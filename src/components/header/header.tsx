'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ActiveLink } from '../active-link/active-link';
import { Logo } from '../logo';

export const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filters]:bg-background/60 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-16 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Inicio</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary">
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
