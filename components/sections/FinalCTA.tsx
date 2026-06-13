export default function FinalCTA() {
  return (
    <section className="py-24 bg-base relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.08] rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-h2 text-text-primary font-bold max-w-3xl mx-auto">
          Your Patients Are Searching Google Right Now.
        </h2>
        <p className="text-body-lg text-text-secondary mt-4 max-w-xl mx-auto">
          Don&apos;t let them find your competitor instead. Let&apos;s get your clinic live
          in 72 hours.
        </p>

        {/* Availability Badge */}
        <div className="mt-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] text-xs text-success">
            <span className="w-2 h-2 rounded-full bg-success animate-dot-pulse" />
            Currently accepting 2 more projects for July 2026
          </span>
        </div>

        {/* Button Row */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/918074782997?text=Hi%20Abhinay%2C%20I%27m%20interested%20in%20a%20clinic%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-8 py-4 rounded-btn text-lg transition-colors inline-flex items-center gap-2"
          >
            WhatsApp Me Now →
          </a>
          <a
            href="#contact"
            className="border border-border-hover text-text-primary hover:bg-card px-6 py-4 rounded-btn font-semibold transition-colors"
          >
            Fill the Form Below ↓
          </a>
        </div>

        {/* Trust Copy */}
        <p className="mt-6 text-[13px] text-text-muted">
          No commitment. No upfront payment. Just a conversation.
        </p>
      </div>
    </section>
  );
}
