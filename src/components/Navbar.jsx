const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-black/10 dark:bg-darkBg/80 dark:border-white/10 transition-all duration-300">
      <nav className="container flex items-center justify-between py-5">
        <div className="font-semibold text-lg tracking-tight heading-font dark:text-white">Knight Ballao</div>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-all duration-200 ease-out text-black/80 hover:text-violentBlue hover:underline underline-offset-8 focus-visible:outline-none focus-visible:text-violentBlue dark:text-white/80 dark:hover:text-violentBlue dark:hover:neon-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

