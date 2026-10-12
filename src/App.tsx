import { ArrowUpRight, FlaskConical, Gamepad2, LayoutGrid, Search, Wrench, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { projects, projectUrl, type Project } from './projects/registry';
import './Hub.css';

const categories = [
  { id: 'game', label: '게임', icon: Gamepad2 },
  { id: 'tool', label: '도구', icon: Wrench },
  { id: 'experiment', label: '실험', icon: FlaskConical },
] as const;
const normalize = (value: string) => value.normalize('NFKC').toLocaleLowerCase().trim();

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="hub-card-image">
        <img src={project.thumbnail} alt="" loading="lazy" onError={event => {
          const fallback = projectUrl('/og/default.png');
          if (!event.currentTarget.src.endsWith(fallback)) event.currentTarget.src = fallback;
        }} />
      </div>
      <div className="hub-card-body">
        <div className="hub-card-title"><h3>{project.title}</h3><ArrowUpRight size={17} aria-hidden="true" /></div>
        <p>{project.description}</p>
      </div>
    </>
  );
  return project.type === 'static'
    ? <a href={projectUrl(project.path)} className="hub-card" data-category={project.category}>{content}</a>
    : <Link to={project.path} className="hub-card" data-category={project.category}>{content}</Link>;
}

function App() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const selected = categories.some(category => category.id === params.get('category')) ? params.get('category')! : 'all';
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const visible = projects.filter(project => {
    const category = categories.find(item => item.id === project.category)!;
    const haystack = normalize([project.title, project.description, project.id, category.label, project.category].join(' '));
    return (selected === 'all' || selected === project.category) && terms.every(term => haystack.includes(term));
  });
  const update = (key: string, value: string, replace = false) => {
    // Read the latest URL so fast typing cannot overwrite a pending filter change.
    const next = new URLSearchParams(window.location.search);
    if (value && !(key === 'category' && value === 'all')) next.set(key, value); else next.delete(key);
    setParams(next, { replace });
  };
  const reset = () => {
    const next = new URLSearchParams(window.location.search);
    next.delete('q'); next.delete('category');
    setParams(next);
  };

  return (
    <div className="hub">
      <main className="hub-main">
        <header className="hub-topbar">
          <div className="hub-brand">web hub<span className="hub-brand-dot">.</span></div>
          <a className="hub-source" href="https://github.com/asa9874/web-hub">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
        </header>
        <div className="hub-discovery">
          <div className="hub-discovery-title"><h1 id="hub-title">프로젝트</h1><span>{projects.length}</span></div>
          <div className="hub-search" role="search">
            <Search size={19} aria-hidden="true" />
            <label htmlFor="hub-search" className="hub-sr-only">프로젝트 검색</label>
            <input id="hub-search" type="search" placeholder="제목이나 설명으로 검색" value={query} onChange={event => update('q', event.target.value, true)} />
            {query && <button type="button" aria-label="검색어 지우기" onClick={() => update('q', '', true)}><X size={17} /></button>}
          </div>
        </div>
        <div className="hub-filter-row">
          <div className="hub-filters" role="group" aria-label="프로젝트 카테고리">
            <button type="button" aria-pressed={selected === 'all'} onClick={() => update('category', 'all')}><LayoutGrid size={16} aria-hidden="true" />전체<span>{projects.length}</span></button>
            {categories.map(category => <button type="button" key={category.id} aria-pressed={selected === category.id} onClick={() => update('category', category.id)}><category.icon size={16} aria-hidden="true" />{category.label}<span>{projects.filter(project => project.category === category.id).length}</span></button>)}
          </div>
          <p className="hub-results" role="status" aria-live="polite"><strong>{visible.length}</strong>개의 프로젝트{query.trim() && ' · 검색 결과'}</p>
        </div>
        {visible.length ? categories.map(category => {
          const group = visible.filter(project => project.category === category.id);
          return group.length > 0 && <section className="hub-section" key={category.id} data-category={category.id} aria-labelledby={'hub-' + category.id}>
            <div className="hub-section-heading"><category.icon size={20} aria-hidden="true" /><h2 id={'hub-' + category.id}>{category.label}<span>{group.length}</span></h2></div>
            <div className="hub-grid">{group.map(project => <ProjectCard key={project.id} project={project} />)}</div>
          </section>;
        }) : <section className="hub-empty"><Search size={28} aria-hidden="true" /><h2>검색 결과가 없습니다</h2><p>검색어나 카테고리를 변경해 보세요.</p><button type="button" onClick={reset}>전체 프로젝트 보기</button></section>}
        <footer className="hub-footer">asa9874 / web-hub</footer>
      </main>
    </div>
  );
}
export default App;
