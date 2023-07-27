'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  {
    href: '/',
    name: 'Overview',
  },
  {
    href: '/projects',
    name: 'Projects',
  },
  {
    href: '/settings',
    name: 'Settings',
  },
];

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  // TODO: check url - and toggle color
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              isActive ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
