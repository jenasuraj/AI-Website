"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // render only on homepage
  if (pathname !== "/") return null;

  return (
    <a
      href="https://wa.me/919833048421"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-20 right-6 z-[9999] transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <FaWhatsapp size={28} />
      </div>
    </a>
  );
}