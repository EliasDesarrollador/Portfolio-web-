import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold glow-text hover:scale-105 transition-transform duration-300"
            >
              &lt;Dev/&gt;
            </button>
            <p className="text-foreground-muted">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegación</h3>
            <div className="space-y-2">
              {[
                { name: "Inicio", href: "#home" },
                { name: "Sobre mí", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Proyectos", href: "#projects" },
                { name: "Contacto", href: "#contact" }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = item.href === "#home" 
                      ? document.body 
                      : document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-foreground-muted hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Conecta Conmigo</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:desarrollador@ejemplo.com"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-foreground-muted text-sm">
              emails.eliasortiz@gmail.com<br />
              Fernando de la Mora, Paraguay
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Desarrollador Portfolio. Todos los derechos reservados.
            </p>
            <p className="text-foreground-muted text-sm flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500" /> y mucho café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;