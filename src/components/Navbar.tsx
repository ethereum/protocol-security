import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeSwitch } from './ThemeSwitch';

const links = [
  { text: 'Team', href: '/team' },
  { text: 'Responsibilities', href: '/responsibilities' },
  { text: 'Competitions', href: '/competitions' },
  { text: 'Audits', href: '/audits' },
  { text: 'Blog', href: '/blog' },
  { text: 'Wishlist', href: '/wishlist' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'py-4 bg-background/80 dark:bg-background/80 backdrop-blur-md border-b border-border/40'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold tracking-tighter text-foreground hover:text-red-500 transition-colors"
        >
          Home
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.text}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-all duration-200",
                "text-foreground hover:bg-secondary/80 hover:text-red-500",
                location.pathname === link.href && "bg-secondary/50 text-red-500"
              )}
            >
              {link.text}
            </Link>
          ))}
          <div className="ml-4">
            <ThemeSwitch />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitch />
          <button
            className={cn(
              "p-2 rounded-md transition-colors",
              "text-foreground hover:bg-secondary/80",
              mobileMenuOpen && "bg-secondary/50"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 border-b border-border/40 bg-background/95 dark:bg-background/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2">
          <div className="container py-4 flex flex-col space-y-1">
            {links.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className={cn(
                  "px-4 py-3 rounded-md transition-all duration-200",
                  "text-foreground hover:bg-secondary/80 hover:text-red-500",
                  location.pathname === link.href && "bg-secondary/50 text-red-500"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
