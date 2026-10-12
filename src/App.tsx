import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectUrl } from './projects/registry';

const categories = { game: '게임', tool: '도구', experiment: '실험' };

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="mb-10 border-b border-slate-800 pb-8">
          <p className="mb-3 text-sm font-medium tracking-widest text-sky-400">PROJECT COLLECTION</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Web Hub</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">
            게임, 도구, 웹 실험을 둘러보고 원하는 프로젝트를 바로 열어보세요.
          </p>
          <p className="mt-4 text-sm text-slate-500">총 {projects.length}개 페이지</p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map(project => {
            const content = (
              <>
                <div className="aspect-video overflow-hidden bg-slate-800">
                  <img
                    src={project.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                    onError={event => {
                      const fallback = projectUrl('/og/default.png');
                      if (!event.currentTarget.src.endsWith(fallback)) event.currentTarget.src = fallback;
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-3 text-xs font-medium text-sky-400">{categories[project.category]}</span>
                  <h2 className="text-lg font-semibold leading-6">{project.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{project.description}</p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-200">
                    열어보기 <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </>
            );
            const className = 'group flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-colors hover:border-sky-500/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400';
            return project.type === 'static' ? (
              <a key={project.id} href={projectUrl(project.path)} className={className}>
                {content}
              </a>
            ) : (
              <Link key={project.id} to={project.path} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
