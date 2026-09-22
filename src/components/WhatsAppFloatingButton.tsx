import { WhatsappIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={profileData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="btn-tactile fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/40 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
      <WhatsappIcon className="w-7 h-7 relative" />
    </a>
  );
}
