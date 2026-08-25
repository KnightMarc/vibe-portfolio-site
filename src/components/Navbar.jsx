import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/10 dark:bg-darkBg/90 dark:border-white/10 transition-all duration-300">
      <nav className="container flex items-center justify-between py-4">
        {/* Brand Header */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg tracking-tight heading-font dark:text-white group">
          <span className="h-2.5 w-2.5 rounded-full bg-violentBlue dark:shadow-[0_0_8px_rgba(58,79,255,0.8)]"></span>
          <span>Knight Ballao</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-all duration-200 text-black/80 hover:text-violentBlue dark:text-white/80 dark:hover:text-violentBlue font-mono text-xs tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle Navigation Menu"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-black/10 dark:border-white/20 text-black dark:text-white focus:outline-none"
        >
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
          <span className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/95 dark:bg-darkBg/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="container flex flex-col gap-3 py-4 text-sm font-mono">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-black/80 hover:text-violentBlue dark:text-white/80 dark:hover:text-violet-400 transition-colors"
                  >
                    &gt; {item.label}_
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
