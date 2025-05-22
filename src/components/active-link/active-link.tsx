import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const linkPath = (typeof href === 'string' ? href : href.pathname) ?? '';
  const pathname = usePathname();
  const isActive = pathname === linkPath || pathname.startsWith(`${linkPath}/`);
  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-blue-500',
        isActive ? 'text-blue-500' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
};
