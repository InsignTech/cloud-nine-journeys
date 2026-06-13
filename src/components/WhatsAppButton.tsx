import { FaWhatsapp } from "react-icons/fa";

const WA_URL =
  "https://api.whatsapp.com/send/?phone=971526874401&text&type=phone_number&app_absent=0";

export function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 inline-flex items-center justify-center p-3 rounded-full focus:outline-none transition-all duration-300 hover:scale-110"
      style={{
        background: "#25D366",
        boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
        width: "44px",
        height: "44px",
      }}
    >
      {/* Pill — absolutely floats LEFT of the button, driven by group-hover */}
      <span
        className="
          absolute right-full top-1/2 -translate-y-1/2 mr-3
          bg-[#25D366] text-white text-xs font-bold tracking-wide
          px-4 py-2 rounded-full whitespace-nowrap
          shadow-[0_4px_16px_rgba(37,211,102,0.45)]
          pointer-events-none select-none
          opacity-0 -translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
        "
      >
        Chat with us
      </span>

      <FaWhatsapp size={20} color="white" />
    </a>
  );
}
