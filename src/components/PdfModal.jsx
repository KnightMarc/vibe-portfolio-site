import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PdfModal({ isOpen, onClose, pdfUrl, title }) {
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl h-[85vh] flex flex-col rounded-2xl bg-white dark:bg-darkCard border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
              <h3 className="text-lg font-semibold heading-font text-black dark:text-white truncate">
                {title || 'Administrative & Technical Guide (PDF)'}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-violentBlue text-white hover:bg-violet-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                  </svg>
                  Open / Download
                </a>
              )}
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
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-900 relative">
            {pdfUrl ? (
              <iframe
                src={pdfUrl.includes('drive.google.com') ? pdfUrl.replace('/view', '/preview') : pdfUrl}
                title={title}
                className="w-full h-full border-0"
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-4">
                <svg className="w-16 h-16 text-black/30 dark:text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-black dark:text-white text-base">PDF Document Ready for Upload</h4>
                  <p className="text-xs text-black/60 dark:text-white/60 max-w-md mt-1">
                    Place your official PDF file inside the <code className="bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded font-mono">public/</code> directory or update the Google Drive URL parameter.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default PdfModal;
