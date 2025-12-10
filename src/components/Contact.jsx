import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      setStatus('loading');
      setFeedback('');
      const response = await fetch('https://formspree.io/f/manrpdya', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setFeedback('Thanks for reaching out! I will get back to you soon.');
        form.reset();
      } else {
        setStatus('error');
        setFeedback('Something went wrong. Please try again or email me directly.');
      }
    } catch (error) {
      setStatus('error');
      setFeedback('Network error. Please try again in a moment.');
    }
  };

  return (
    <section
      id="contact"
      className="container flex flex-col gap-10 border-t border-black/10 py-16 md:py-20"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold heading-font">Contact</h2>
        <p className="text-sm text-black/60">
          Ready to collaborate? Drop a line below.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:grid-cols-2 sm:gap-6 space-y-4 sm:space-y-0"
      >
        <label className="flex flex-col gap-3 text-sm font-medium">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm font-normal text-black/80 outline-none transition focus:border-violentBlue focus:ring-2 focus:ring-violentBlue/40"
          />
          <span className="text-xs text-black/50">Please enter your full name.</span>
        </label>
        <label className="flex flex-col gap-3 text-sm font-medium">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm font-normal text-black/80 outline-none transition focus:border-violentBlue focus:ring-2 focus:ring-violentBlue/40"
          />
          <span className="text-xs text-black/50">We’ll reply to this address.</span>
        </label>
        <label className="flex flex-col gap-3 text-sm font-medium sm:col-span-2">
          Message
          <textarea
            name="message"
            rows="4"
            placeholder="Tell me about your project"
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm font-normal text-black/80 outline-none transition focus:border-violentBlue focus:ring-2 focus:ring-violentBlue/40"
          ></textarea>
          <span className="text-xs text-black/50">Include scope, timeline, or links if available.</span>
        </label>
        {status === 'success' && (
          <div className="sm:col-span-2 mt-4 rounded-xl border border-green-500/30 bg-green-50 px-4 py-3 text-sm text-green-700">
            {feedback}
          </div>
        )}
        {status === 'error' && (
          <div className="sm:col-span-2 mt-4 rounded-xl border border-red-500/30 bg-red-50 px-4 py-3 text-sm text-red-700">
            {feedback}
          </div>
        )}
        <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex w-full items-center justify-center rounded-full bg-violentBlue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violentBlue/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          <p className="text-xs text-black/50">
            I respect your privacy. Your details are only used to respond to your inquiry.
          </p>
        </div>
      </form>
    </section>
  );
}

export default Contact;

