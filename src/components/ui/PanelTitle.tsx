import type { ReactNode } from 'react';

interface Props { children: ReactNode }

export default function PanelTitle({ children }: Props) {
  return <div className="panel-title">{children}</div>;
}
