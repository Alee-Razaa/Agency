import { ReactNode } from 'react';

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card ${className}`}>{children}</div>;
}

export function CardHeader({ children }: { children: ReactNode }) {
  return <div className="card-header">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="card-title">{children}</h3>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <div className="card-body">{children}</div>;
}

export function CardFooter({ children }: { children: ReactNode }) {
  return <div className="card-footer">{children}</div>;
}
