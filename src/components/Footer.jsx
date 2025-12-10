function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="container flex flex-col gap-2 py-8 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
        <span>Knight Marc Xavier C. Ballao © {year}</span>
        <span className="text-black/50">Built with React, Vite, and Tailwind.</span>
      </div>
    </footer>
  );
}

export default Footer;

