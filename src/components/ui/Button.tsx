import type { ReactNode } from 'react';
import Link from 'next/link';
type Props = { href: string; children: ReactNode; variant?: 'primary' | 'outline' };
export function Button({ href, children, variant = 'primary' }: Props) { return <Link className={`button button--${variant}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>; }
