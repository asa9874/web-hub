export default function Lives({count}:{count:number}){
  return <div className="wt-lives" role="status" aria-label={`남은 라이프 ${count}/3`}><small>작은 용기</small><div>{[0,1,2].map(i=><svg key={i} className={i<count?'':'spent'} viewBox="0 0 40 38" aria-hidden="true"><path d="M20 34 5 20C-4 9 10-2 20 9 30-2 44 9 35 20Z" fill="#dfa0ad" stroke="#ba9474" strokeWidth="3"/><path d="M8 11Q12 6 17 12M10 18 20 28" fill="none" stroke="#f5dbc7" strokeWidth="2" opacity=".65"/></svg>)}</div></div>;
}
