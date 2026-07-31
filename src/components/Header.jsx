import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/results', label: 'Results' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
    { 
      path: 'https://champions.classy.institute/', 
      label: 'Online Exam Portal', 
      external: true,
      icon: '📝'
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/b60aaa8ab323f5ff5e438d24f6dc233a.jpg" 
              alt="Champions Tutorials Logo" 
              className="h-14 md:h-20 w-auto object-contain rounded-md"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.path}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-foreground hover:text-primary hover:bg-primary/5"
                >
                  {link.icon && <span>{link.icon}</span>}
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 lg:px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden xl:block flex-shrink-0 ml-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5" size="lg">
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </div>

          <button
            className="xl:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 text-foreground hover:text-primary hover:bg-primary/5"
                  >
                    {link.icon && <span className="text-lg">{link.icon}</span>}
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full shadow-md" size="lg">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Enroll Now</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;