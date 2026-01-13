const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/67f6d70798529443c8f91162/34de26e2-ce84-4680-9f7d-5489ef8325a0/5Windows.png?format=500w"
            alt="Five Windows"
            className="h-12 w-auto brightness-0 invert mx-auto"
          />
        </div>

        {/* Tagline */}
        <p className="text-cream/80 text-sm md:text-base font-display italic mb-6">
          Elevating lasting love
        </p>

        {/* Email */}
        <a
          href="mailto:inquiries@drherwitz.com"
          className="text-cream/70 hover:text-cream text-sm transition-colors"
        >
          inquiries@drherwitz.com
        </a>

        {/* Copyright */}
        <div className="border-t border-cream/10 mt-10 pt-8">
          <p className="text-cream/50 text-xs">
            © {new Date().getFullYear()} Five Windows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
