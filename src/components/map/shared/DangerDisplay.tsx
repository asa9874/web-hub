export default function DangerDisplay({ display }: { display: string }) {
  return (
    <>
      {[...display].map((c, i) =>
        c === '★' ? <span key={i} className="sf">★</span>
        : c === '☆' ? <span key={i} className="se">☆</span>
        : c === '✦' ? <span key={i} className="sd">✦</span>
        : <span key={i} className="se">{c}</span>
      )}
    </>
  );
}
