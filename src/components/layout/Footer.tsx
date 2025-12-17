import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src="https://images.squarespace-cdn.com/content/v1/67f6d70798529443c8f91162/34de26e2-ce84-4680-9f7d-5489ef8325a0/5Windows.png?format=500w"
              alt="Five Windows"
              className="h-10 w-auto brightness-0 invert mb-6"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Elevating lasting love through intimate conversations, tailored experiences, and quietly provocative frameworks.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg mb-6">Navigate</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                About
              </Link>
              <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Connect</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Upper East Side, New York City
            </p>
            <Link
              to="/contact"
              className="inline-block border border-primary-foreground/30 text-primary-foreground px-6 py-2 text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Five Windows. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
