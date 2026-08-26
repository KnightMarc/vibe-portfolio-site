import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WorkflowModal({ isOpen, onClose, workflowData }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('pipeline');

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

  const defaultWorkflow = workflowData || {
    name: 'SynerGrid n8n Enterprise Workflow',
    nodes: [
      { id: '1', name: 'Webhook Receiver', type: 'n8n-nodes-base.webhook', description: 'Listens for incoming external schedule requests & triggers payload validation.' },
      { id: '2', name: 'Collision & Availability Check', type: 'n8n-nodes-base.if', description: 'Queries database/Google Calendar for existing time-slot conflicts.' },
      { id: '3', name: 'Telegram Notification Bot', type: 'n8n-nodes-base.telegram', description: 'Dispatches instant alert message with decision buttons to administrative chat.' },
      { id: '4', name: 'Google Calendar API', type: 'n8n-nodes-base.googleCalendar', description: 'Creates confirmed event item upon admin validation approval.' },
      { id: '5', name: 'Client Auto-Reply Email', type: 'n8n-nodes-base.emailSend', description: 'Returns dynamic confirmation message and calendar invite to client.' },
    ],
    jsonSnippet: `{
  "name": "SynerGrid Enterprise Appointment & Notification Pipeline",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "synergrid-booking"
      },
      "name": "Webhook Receiver",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [{ "value1": "={{ $json.conflict }}", "value2": false }]
        }
      },
      "name": "Collision Detector",
      "type": "n8n-nodes-base.if"
    },
    {
      "parameters": {
        "chatId": "={{ $env.TELEGRAM_ADMIN_CHAT_ID }}",
        "text": "New SynerGrid appointment request received."
      },
      "name": "Telegram Alert Bot",
      "type": "n8n-nodes-base.telegram"
    }
  ],
  "connections": {
    "Webhook Receiver": { "main": [[{ "node": "Collision Detector", "type": "main", "index": 0 }]] }
  }
}`
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(defaultWorkflow.jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              <span className="h-3 w-3 rounded-full bg-cyan-500"></span>
              <h3 className="text-lg font-semibold heading-font text-black dark:text-white truncate">
                {defaultWorkflow.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
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

          {/* Subheader / Tabs */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-black/10 dark:border-white/10 bg-slate-100/50 dark:bg-slate-900/50">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === 'pipeline'
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                Node Flow Pipeline
              </button>
              <button
                onClick={() => setActiveTab('json')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  activeTab === 'json'
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                Workflow JSON Blueprint
              </button>
            </div>

            {activeTab === 'json' && (
              <button
                onClick={handleCopyJson}
                className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-1.5"
              >
                {copied ? '✓ Copied!' : '📋 Copy JSON'}
              </button>
            )}
          </div>

          {/* Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-darkCard">
            {activeTab === 'pipeline' ? (
              <div className="flex flex-col gap-4">
                <p className="text-sm text-black/70 dark:text-white/70">
                  Step-by-step microservice trigger pipeline powering self-hosted n8n workflows containerized with Docker:
                </p>
                <div className="grid gap-3">
                  {defaultWorkflow.nodes.map((node, index) => (
                    <div
                      key={node.id}
                      className="flex items-start gap-4 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-800/40 relative"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 font-mono text-xs font-bold">
                        0{index + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm text-black dark:text-white">{node.name}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60">
                            {node.type}
                          </span>
                        </div>
                        <p className="text-xs text-black/70 dark:text-white/70">{node.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="relative">
                <pre className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                  <code>{defaultWorkflow.jsonSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default WorkflowModal;
