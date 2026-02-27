import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import ThemeToggle from './components/ThemeToggle';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleScrollLinkClick = (event, targetId) => {
    event.preventDefault();
    const scrollOptions = { smooth: true, duration: 500, offset: -80 };
    if (location.pathname === '/') {
      scroller.scrollTo(targetId, scrollOptions);
    } else {
      navigate(`/#${targetId}`);
      setTimeout(() => scroller.scrollTo(targetId, scrollOptions), 180);
    }
    closeMenu();
  };

  const navLinkClass = "text-[var(--text-secondary)] font-medium text-sm hover:text-[var(--accent)] transition-colors relative";

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border)] mb-0">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <RouterLink to="/" aria-label="Goodly Development home" className="inline-flex items-center">
            <img
              src="GoodlyG.svg"
              alt="Goodly Development logo"
              className="w-36 md:w-44 h-auto"
            />
          </RouterLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Services dropdown */}
            <div className="relative group">
              <button className={`${navLinkClass} inline-flex items-center gap-1 px-3 py-2 bg-transparent border-0`}>
                Services
                <FiChevronDown size={14} className="mt-0.5" />
              </button>
              <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl shadow-lg p-2 min-w-[220px]">
                  <RouterLink
                    to="/"
                    className="block px-4 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                  >
                    Development Services
                  </RouterLink>
                  <RouterLink
                    to="/it-services"
                    className="block px-4 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                  >
                    IT Services
                  </RouterLink>
                  <RouterLink
                    to="/web-services"
                    className="block px-4 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                  >
                    Web Services
                  </RouterLink>
                </div>
              </div>
            </div>

            <a
              href="/#testimony"
              onClick={(e) => handleScrollLinkClick(e, 'testimony')}
              className={`${navLinkClass} px-3 py-2`}
            >
              Testimonials
            </a>
            <RouterLink to="/blog" className={`${navLinkClass} px-3 py-2`}>
              Blog
            </RouterLink>
            <RouterLink to="/support" className={`${navLinkClass} px-3 py-2`}>
              Support
            </RouterLink>
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-card)]">
          <div className="max-w-site mx-auto px-5 py-4 flex flex-col gap-1">
            <button
              onClick={() => setServicesOpen(o => !o)}
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] bg-transparent border-0 rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
            >
              Services
              <FiChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                <RouterLink
                  to="/"
                  onClick={closeMenu}
                  className="px-3 py-2 text-sm text-[var(--text-secondary)] rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                >
                  Development Services
                </RouterLink>
                <RouterLink
                  to="/it-services"
                  onClick={closeMenu}
                  className="px-3 py-2 text-sm text-[var(--text-secondary)] rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                >
                  IT Services
                </RouterLink>
                <RouterLink
                  to="/web-services"
                  onClick={closeMenu}
                  className="px-3 py-2 text-sm text-[var(--text-secondary)] rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                >
                  Web Services
                </RouterLink>
              </div>
            )}
            <a
              href="/#testimony"
              onClick={(e) => handleScrollLinkClick(e, 'testimony')}
              className="px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
            >
              Testimonials
            </a>
            <RouterLink
              to="/blog"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
            >
              Blog
            </RouterLink>
            <RouterLink
              to="/support"
              onClick={closeMenu}
              className="px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] rounded-lg hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
            >
              Support
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
