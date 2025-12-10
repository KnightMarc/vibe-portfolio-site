function Contact() {
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
        action="https://formspree.io/f/placeholder"
        method="POST"
        className="grid gap-6 rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:grid-cols-2"
      >
        <label className="flex flex-col gap-2 text-sm font-medium">
          Name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm font-normal text-black/80 outline-none transition focus:border-violentBlue focus:ring-2 focus:ring-violentBlue/40"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm font-normal text-black/80 outline-none transition focus:border-violentBlue focus:ring-2 focus:ring-violentBlue/40"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
          Message
          <textarea
            name="message"
            rows="4"
            placeholder="Tell me about your project"
            required
            className="rounded-xl border border-black/15 px-4 py-3 text-sm font-normal text-black/80 outline-none transition focus:border-violentBlue focus:ring-2 focus:ring-violentBlue/40"
          ></textarea>
        </label>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-violentBlue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violentBlue/20 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violentBlue focus-visible:ring-offset-2 sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;

