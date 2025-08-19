import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "./WhatsAppButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé pronto.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Hablemos de tu <span className="glow-text">Proyecto</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 fade-in-up stagger-1">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <p className="text-foreground-muted leading-relaxed mb-8">
                ¿Tienes una idea increíble? ¡Hablemos! Estoy disponible para proyectos 
                freelance, colaboraciones o simplemente para charlar sobre tecnología.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-foreground-muted">emails.eliasortiz@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone className="text-accent-foreground" size={20} />
                </div>
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-foreground-muted">+595 976393314</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <MapPin className="text-secondary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-foreground-muted">Fernando de la Mora </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-modern fade-in-up stagger-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-info">
          
        </div>
        <div className="mt-4">
          <WhatsAppButton phone="595976393314" message="¡Hola! Vi tu portfolio y quiero contactarte." />
        </div>
      </div>
    </section>
  );
};

export default Contact;