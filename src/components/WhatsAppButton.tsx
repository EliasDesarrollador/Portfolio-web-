import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
}

const WhatsAppButton = ({ phone, message }: WhatsAppButtonProps) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message || "¡Hola! Vi tu portfolio y quiero contactarte.")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp flex items-center justify-center gap-2 px-4 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors mt-4 text-sm font-medium"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={20} />
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;