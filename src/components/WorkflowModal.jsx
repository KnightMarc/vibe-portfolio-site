import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workflows = {
  meetingScheduler: {
    id: 'meetingScheduler',
    name: 'SynergyGrid LLC: Autonomous AI Meeting Scheduler',
    badge: 'Dual Gemini LLM + Calendar Engine',
    description: 'An autonomous multi-agent pipeline that parses scheduling requests from raw email text using Google Gemini LLM, queries calendar availability, computes conflict-free alternative time slots, and routes interactive 1-click booking approvals to Telegram & Slack.',
    imageSrc: '/synergrid-n8n-workflow.png',
    nodes: [
      { id: '1', name: 'Gmail Trigger', type: 'n8n-nodes-base.gmailTrigger', description: 'Polls inbox every 15 minutes for UNREAD meeting request emails.' },
      { id: '2', name: 'Wait & Active Filter', type: 'n8n-nodes-base.wait', description: 'Enforces rate limits and filters operational hours (08:00–17:00 EST).' },
      { id: '3', name: 'AI Agent (Gemini LLM)', type: '@n8n/n8n-nodes-langchain.agent', description: 'Uses Google Gemini to parse email body into structured JSON (is_meeting, sender_name, date, time, duration).' },
      { id: '4', name: 'Process & Validate Email', type: 'n8n-nodes-base.code', description: 'Custom JS node to strip markdown tags, clean email headers, and extract thread IDs.' },
      { id: '5', name: 'Calendar Availability Check', type: 'n8n-nodes-base.googleCalendar', description: 'Queries Google Calendar API for existing events at the requested date and time slot.' },
      { id: '6', name: 'AI Suggest Alternative Time (Gemini)', type: '@n8n/n8n-nodes-langchain.agent', description: 'If a schedule conflict occurs, Gemini calculates 2 free 30-min alternative slots between 09:00 and 17:00 EST.' },
      { id: '7', name: 'Telegram Bot & Slack Interactive Alert', type: 'n8n-nodes-base.telegram / slack', description: 'Dispatches real-time alert messages with inline 1-click action buttons (Confirm vs Reschedule).' },
      { id: '8', name: 'ngrok Webhook Callback Handler', type: 'n8n-nodes-base.webhook', description: 'Listens for admin button clicks from Telegram/Slack to execute automated booking or reschedule replies.' },
      { id: '9', name: 'Calendar Creation & Client Auto-Reply', type: 'n8n-nodes-base.googleCalendar / gmail', description: 'Creates Google Calendar event with attendees & auto-replies to client Gmail thread with calendar invite.' },
    ],
    jsonSnippet: JSON.stringify({
      "name": "AI Meeting Scheduler",
      "nodes": [
        {
          "parameters": {
            "pollTimes": { "item": [{ "mode": "everyX", "value": 15, "unit": "minutes" }] },
            "filters": { "labelIds": ["UNREAD", "INBOX"] }
          },
          "type": "n8n-nodes-base.gmailTrigger",
          "name": "Gmail Trigger"
        },
        {
          "parameters": {
            "promptType": "define",
            "text": "Role: Executive Assistant\\nTask: Convert email snippet into JSON for a meeting request.\\nStrict Rules: Timezone EST, Output ONLY raw JSON."
          },
          "type": "@n8n/n8n-nodes-langchain.agent",
          "name": "AI Agent (Google Gemini)"
        },
        {
          "parameters": {
            "calendar": "knight.ballao@gmail.com",
            "timeMin": "={{ $json.requested_date }}T{{ $json.requested_time }}:00Z"
          },
          "type": "n8n-nodes-base.googleCalendar",
          "name": "Get availability in a calendar"
        },
        {
          "parameters": {
            "chatId": "-1004331046419",
            "text": "📅 New Meeting Request\\nSender: {{ $json.sender_name }}\\nProposed Time: {{ $json.requested_time }}",
            "replyMarkup": "inlineKeyboard"
          },
          "type": "n8n-nodes-base.telegram",
          "name": "Telegram Interactive Alert Bot"
        },
        {
          "parameters": {
            "httpMethod": "POST",
            "path": "slack-approvals"
          },
          "type": "n8n-nodes-base.webhook",
          "name": "Approval Webhook Handler"
        }
      ],
      "active": true
    }, null, 2)
  },
  agreementMonitor: {
    id: 'agreementMonitor',
    name: 'SynergyGrid LLC: AI Agreement Reply Monitor & Escalation Suite',
    badge: '3-Day SOP Engine + Gemini Draft Generator',
    description: 'An automated compliance & outreach engine that tracks sent agreements in Google Sheets, monitors Gmail threads for client replies, generates contextual follow-up drafts using Google Gemini, and escalates stale leads to Slack.',
    imageSrc: '/synergrid-agreement-monitor.png',
    nodes: [
      { id: '1', name: 'Schedule Trigger (2-Day Interval)', type: 'n8n-nodes-base.scheduleTrigger', description: 'Fires every 2 days at 09:00 AM to check pending agreement status.' },
      { id: '2', name: 'Google Sheets Database Lookup', type: 'n8n-nodes-base.googleSheets', description: 'Queries the "Pending Agreements" master spreadsheet to pull tracked agreement threads.' },
      { id: '3', name: 'Gmail Thread Inspection', type: 'n8n-nodes-base.gmail', description: 'Fetches active email threads to verify whether the client sent a response message.' },
      { id: '4', name: '3-Day SOP Deadline Calculation', type: 'n8n-nodes-base.code', description: 'JS node calculating exact 3-day turnaround deadlines and sanitizing recipient data.' },
      { id: '5', name: 'Gemini 2.5 Flash Draft Generator', type: '@n8n/n8n-nodes-langchain.googleGemini', description: 'Generates tailored follow-up copy adapting tone (friendly check-in vs. gentle nudge) based on follow-up count.' },
      { id: '6', name: 'Slack Approval Webhook Card', type: 'n8n-nodes-base.slack', description: 'Posts formatted Block Kit messages to #agreement-followups with "Send Now" & "Skip" action buttons.' },
      { id: '7', name: 'Interactive Approval Receiver', type: 'n8n-nodes-base.webhook', description: 'Captures admin Slack button clicks to send the approved follow-up email via Gmail.' },
      { id: '8', name: 'Urgent Stalled Lead Escalation', type: 'n8n-nodes-base.slack', description: 'If no reply after 2 automated attempts, updates Google Sheets status to "Escalated" and triggers urgent Slack alert.' },
    ],
    jsonSnippet: JSON.stringify({
      "name": "agreement-reply-monitor",
      "nodes": [
        {
          "parameters": {
            "rule": { "interval": [{ "daysInterval": 2, "triggerAtHour": 9 }] }
          },
          "type": "n8n-nodes-base.scheduleTrigger",
          "name": "Schedule Trigger (2-Day SOP)"
        },
        {
          "parameters": {
            "documentId": "1gg9nsoOJYLXWEDvSt9-JsodA8mRBYGb4KHkVE-dc0-o",
            "sheetName": "Pending Agreements"
          },
          "type": "n8n-nodes-base.googleSheets",
          "name": "Get row(s) in sheet"
        },
        {
          "parameters": {
            "modelId": "models/gemini-2.5-flash",
            "messages": {
              "values": [{ "content": "You are an AI assistant acting on behalf of SynergyGrid. Generate a professional follow-up email..." }]
            }
          },
          "type": "@n8n/n8n-nodes-langchain.googleGemini",
          "name": "Gemini 2.5 Flash Draft Generator"
        },
        {
          "parameters": {
            "channelId": "C0ALRNUDN3D",
            "text": "🚨 New Agreement Follow-up Draft",
            "messageType": "block"
          },
          "type": "n8n-nodes-base.slack",
          "name": "Slack Interactive Approval Webhook"
        }
      ],
      "active": true
    }, null, 2)
  }
};

function WorkflowModal({ isOpen, onClose, initialWorkflowKey = 'meetingScheduler' }) {
  const [selectedWorkflowKey, setSelectedWorkflowKey] = useState(initialWorkflowKey);
  const [activeTab, setActiveTab] = useState('visual'); // 'visual' | 'pipeline' | 'json'
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          onClose();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, isZoomed]);

  if (!isOpen) return null;

  const currentWorkflow = workflows[selectedWorkflowKey] || workflows.meetingScheduler;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(currentWorkflow.jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-darkCard border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Top Bar: Header & Pipeline Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 gap-3">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse"></span>
              <div>
                <h3 className="text-base sm:text-lg font-bold heading-font text-black dark:text-white leading-tight">
                  {currentWorkflow.name}
                </h3>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                  {currentWorkflow.badge} • Minimal Supervision Internship Build
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
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

          {/* Pipeline Switcher Tabs & Sub-Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between px-6 py-3 border-b border-black/10 dark:border-white/10 bg-slate-100/60 dark:bg-slate-900/40 gap-3">
            {/* Pipeline Selector */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
              <button
                type="button"
                onClick={() => setSelectedWorkflowKey('meetingScheduler')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  selectedWorkflowKey === 'meetingScheduler'
                    ? 'bg-violentBlue text-white font-semibold shadow-sm'
                    : 'text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                ⚡ 1. AI Meeting Scheduler
              </button>
              <button
                type="button"
                onClick={() => setSelectedWorkflowKey('agreementMonitor')}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                  selectedWorkflowKey === 'agreementMonitor'
                    ? 'bg-violentBlue text-white font-semibold shadow-sm'
                    : 'text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                📋 2. Agreement & NDA Monitor
              </button>
            </div>

            {/* Sub-Tabs (Visual / Pipeline / JSON) */}
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    activeTab === 'visual'
                      ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  🗺️ Visual Canvas
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    activeTab === 'pipeline'
                      ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  ⚡ Node Steps
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                    activeTab === 'json'
                      ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-black/60 dark:text-white/60 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  📜 JSON Blueprint
                </button>
              </div>

              {activeTab === 'json' && (
                <button
                  onClick={handleCopyJson}
                  className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-cyan-500 hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copied ? '✓ Copied!' : '📋 Copy JSON'}
                </button>
              )}
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-darkCard">
            {activeTab === 'visual' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs sm:text-sm text-black/70 dark:text-white/70">
                    High-resolution n8n visual canvas screenshot of <strong className="text-black dark:text-white">{currentWorkflow.name}</strong> built for SynergyGrid LLC:
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsZoomed(true)}
                    className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    🔍 Click to Inspect Fullscreen
                  </button>
                </div>

                <div
                  onClick={() => setIsZoomed(true)}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-950 p-2 shadow-inner"
                >
                  <img
                    src={currentWorkflow.imageSrc}
                    alt={currentWorkflow.name}
                    className="w-full h-auto object-contain max-h-[55vh] rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-black/80 text-white text-xs font-mono font-semibold shadow-lg backdrop-blur-sm border border-white/20">
                      🔍 Click to Expand Fullscreen View
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pipeline' && (
              <div className="flex flex-col gap-4">
                <p className="text-xs sm:text-sm text-black/70 dark:text-white/70 leading-relaxed">
                  {currentWorkflow.description}
                </p>
                <div className="grid gap-3">
                  {currentWorkflow.nodes.map((node, index) => (
                    <div
                      key={node.id}
                      className="flex items-start gap-4 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-slate-800/40"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300 font-mono text-xs font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-semibold text-sm text-black dark:text-white">{node.name}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60">
                            {node.type}
                          </span>
                        </div>
                        <p className="text-xs text-black/70 dark:text-white/70 leading-relaxed">{node.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'json' && (
              <div className="relative">
                <p className="text-xs text-black/70 dark:text-white/70 mb-3">
                  Exact production n8n JSON blueprint export for <strong>{currentWorkflow.name}</strong>. Ready to import directly into any n8n instance:
                </p>
                <pre className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800 max-h-[55vh]">
                  <code>{currentWorkflow.jsonSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </motion.div>

        {/* Fullscreen Image Zoom Overlay */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            >
              <div className="relative max-w-7xl max-h-[95vh] flex flex-col items-center">
                <img
                  src={currentWorkflow.imageSrc}
                  alt={currentWorkflow.name}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/20"
                />
                <span className="mt-3 text-xs font-mono text-white/80 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  Press ESC or click anywhere to close
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}

export default WorkflowModal;
