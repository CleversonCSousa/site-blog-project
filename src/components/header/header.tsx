'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');

  return (
    <header className="bg-background/95 supports-[backdrop-filters]:bg-background/60 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-16 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-500',
                isHomePage ? 'text-blue-500' : 'text-muted-foreground'
              )}
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-500',
                isBlogPage ? 'text-blue-500' : 'text-muted-foreground'
              )}
            >
              Blog
            </Link>
            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
