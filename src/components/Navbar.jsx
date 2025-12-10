const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-black/10">
      <nav className="container flex items-center justify-between py-4">
        <div className="font-semibold text-lg tracking-tight heading-font">Knight Ballao</div>
        <ul className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-colors hover:text-violentBlue focus-visible:outline-none focus-visible:text-violentBlue"
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

