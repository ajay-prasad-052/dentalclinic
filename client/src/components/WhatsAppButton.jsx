import { clinic } from "../data/clinic";

const WhatsAppButton = () => {
  return (
    <a
      href={clinic.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      WhatsApp
    </a>
  );
};

export default WhatsAppButton;
