interface Props {
  label:    string;
  barText:  string;
  barClass: string;
  numeric:  string;
}

export default function StatRow({ label, barText, barClass, numeric }: Props) {
  return (
    <div className="stat-row">
      <div className="stat-label-text">{label}</div>
      <span className={`stat-bar-ascii ${barClass}`}>{barText}</span>
      <div className="stat-numeric">{numeric}</div>
    </div>
  );
}
