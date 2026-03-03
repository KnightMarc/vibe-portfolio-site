function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white dark:bg-darkBg dark:border-white/10 transition-colors duration-300">
      <div className="container flex flex-col gap-2 py-8 text-sm text-black/60 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <span>Knight Marc Xavier C. Ballao © {year}</span>
        <span className="text-black/50 dark:text-white/50">Built with React, Vite, and Tailwind.</span>
      </div>
    </footer>
  );
}

export default Footer;

