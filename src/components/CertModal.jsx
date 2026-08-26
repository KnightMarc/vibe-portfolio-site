import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CertModal({ isOpen, onClose, cert }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cert) return null;

  const isPdf = cert.imageSrc && cert.imageSrc.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl flex flex-col rounded-2xl bg-white dark:bg-darkCard border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5 shrink-0">
            <div className="flex items-center gap-3">
              <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold ${cert.badgeBg}`}>
                {cert.badgeText}
              </span>
              <h3 className="text-base font-semibold heading-font text-black dark:text-white truncate">
                {cert.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-black/60 dark:text-white/60 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
            {/* Image / PDF Scan Preview */}
            <div className="relative w-full flex-1 min-h-[350px] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-900 flex items-center justify-center">
              {cert.imageSrc ? (
                isPdf ? (
                  <iframe
                    src={cert.imageSrc}
                    title={cert.title}
                    className="w-full h-full border-0"
                  ></iframe>
                ) : (
                  <img
                    src={cert.imageSrc}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                )
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center text-white/70 gap-3">
                  <svg className="w-16 h-16 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-white text-base">Verified Technical Credential</h4>
                    <p className="text-xs text-white/60 font-mono mt-1">ISSUER: {cert.issuer} | CODE: {cert.code}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description & Metadata */}
            <div className="space-y-2 shrink-0">
              <h4 className="font-mono text-xs text-violentBlue dark:text-violet-400 font-semibold uppercase tracking-wider">
                Official Credential Overview
              </h4>
              <p className="text-sm text-black/80 dark:text-white/80 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Verification & Action Links */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-black/10 dark:border-white/10 shrink-0">
              {cert.imageSrc && (
                <a
                  href={cert.imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-violentBlue text-white hover:bg-violet-700 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Open Full Resolution Certificate Document
                </a>
              )}
              <span className="px-4 py-2 text-xs font-mono rounded-lg bg-black/5 dark:bg-white/10 text-black/70 dark:text-white/70">
                Verification Code: {cert.code}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default CertModal;
