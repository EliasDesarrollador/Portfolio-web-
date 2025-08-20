import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = href === "#home" 
      ? document.body 
      : document.querySelector(href);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("#home")}
            className="text-2xl font-bold glow-text hover:scale-105 transition-transform duration-300"
          >
            &lt;Dev/&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground-muted hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/EliasDesarrollador?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={20} />
            </a>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:emails.eliasortiz@gmail.com" 
              className="text-foreground-muted hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground-muted hover:text-primary transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-border/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-foreground-muted hover:text-primary transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
            
            <div className="flex space-x-4 pt-4 border-t border-border/50">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:desarrollador@ejemplo.com"
                className="text-foreground-muted hover:text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;