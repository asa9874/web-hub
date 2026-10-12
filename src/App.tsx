import { ArrowUpRight, FlaskConical, Gamepad2, LayoutGrid, Search, Sparkles, Wrench, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { projects, projectUrl, type Project } from './projects/registry';
import './Hub.css';

const categories = [
  { id: 'game', label: '게임', caption: 'PLAY', description: '잠깐의 재미부터 몰입하는 이야기까지', icon: Gamepad2 },
  { id: 'tool', label: '도구', caption: 'MAKE', description: '일상과 공부에 작은 도움을 주는 도구', icon: Wrench },
  { id: 'experiment', label: '실험', caption: 'EXPLORE', description: '새로운 아이디어와 상상으로 만든 공간', icon: FlaskConical },
] as const;
const normalize = (value: string) => value.normalize('NFKC').toLocaleLowerCase().trim();

function ProjectCard({ project }: { project: Project }) {
  const category = categories.find(item => item.id === project.category)!;
  const content = (
    <>
      <div className="hub-card-image">
        <img src={project.thumbnail} alt="" loading="lazy" onError={event => {
          const fallback = projectUrl('/og/default.png');
          if (!event.currentTarget.src.endsWith(fallback)) event.currentTarget.src = fallback;
        }} />
        <span className="hub-card-badge"><category.icon size={12} aria-hidden="true" />{category.label}</span>
        <span className="hub-card-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
      </div>
      <div className="hub-card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="hub-card-action">프로젝트 열기 <ArrowUpRight size={14} aria-hidden="true" /></span>
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
          <div className="hub-brand"><span className="hub-brand-mark"><Sparkles size={21} aria-hidden="true" /></span>web hub<span className="hub-brand-dot">.</span></div>
          <span className="hub-topbar-note">작은 아이디어가 모이는 곳</span>
        </header>
        <section className="hub-hero" aria-labelledby="hub-title">
          <div className="hub-hero-copy">
            <p className="hub-eyebrow"><span /> A COLLECTION OF SMALL WORLDS</p>
            <h1 id="hub-title">오늘은 어떤 걸<br /><span>열어볼까요?</span></h1>
            <p className="hub-intro">직접 만든 게임, 유용한 도구, 자유로운 실험.<br />마음에 드는 프로젝트를 골라 나만의 시간을 즐겨보세요.</p>
            <div className="hub-stats"><strong>{projects.length}</strong><span>개의 프로젝트</span><span className="hub-stats-divider" /><strong>3</strong><span>가지 발견</span></div>
          </div>
          <div className="hub-hero-art" aria-hidden="true">
            <div className="hub-orbit hub-orbit-one" /><div className="hub-orbit hub-orbit-two" />
            <div className="hub-art-core"><Sparkles size={46} /><span>IDEAS INTO PLAY</span></div>
            <div className="hub-art-chip hub-art-play"><Gamepad2 size={24} /><span>PLAY</span></div>
            <div className="hub-art-chip hub-art-make"><Wrench size={21} /><span>MAKE</span></div>
            <div className="hub-art-chip hub-art-explore"><FlaskConical size={22} /><span>EXPLORE</span></div>
            <span className="hub-art-star">✦</span>
          </div>
        </section>
        <div className="hub-discovery">
          <div className="hub-discovery-title"><h2>프로젝트 둘러보기</h2><p>취향대로 찾고, 가볍게 시작하세요.</p></div>
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
            <div className="hub-section-heading"><div className="hub-section-icon"><category.icon size={21} aria-hidden="true" /></div><div><h2 id={'hub-' + category.id}>{category.label}<span>{group.length}</span></h2><p>{category.description}</p></div><span className="hub-section-caption">{category.caption}</span></div>
            <div className="hub-grid">{group.map(project => <ProjectCard key={project.id} project={project} />)}</div>
          </section>;
        }) : <section className="hub-empty"><Search size={32} aria-hidden="true" /><h2>아직 찾는 프로젝트가 없어요</h2><p>다른 검색어를 입력하거나 카테고리를 바꿔보세요.</p><button type="button" onClick={reset}>전체 프로젝트 보기 <ArrowUpRight size={16} aria-hidden="true" /></button></section>}
        <footer className="hub-footer"><span>WEB HUB</span><p>작은 호기심에서 시작된, 계속 커지는 컬렉션.</p><span>MADE TO EXPLORE ✦</span></footer>
      </main>
    </div>
  );
}
export default App;
