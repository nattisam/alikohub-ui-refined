import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: ["Aliko Academy", "Aliko Consultancy", "Aliko Con-Tech", "Aliko Events"],
  Company: ["About", "Careers", "Contact", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/50 bg-card/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                Aliko<span className="text-primary">Hub</span>
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building Africa's digital future — uniting education, global consultancy, and smart construction tools under one seamless platform.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <a href="mailto:info@alikohub.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> info@alikohub.com
              </a>
              <a href="tel:+251111234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> +251 11 123 4567
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Addis Ababa, Ethiopia
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AlikoHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
