"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          
          {/* Left - Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-semibold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400" />
              UppTask
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Smart team management platform designed to simplify workflows,
              improve productivity, and keep your team aligned.
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex gap-16 md:justify-end w-full md:w-auto">
            
            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                
                <Link className="hover:text-foreground cursor-pointer" href="#feature">Features</Link>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">About</li>
                <Link className="hover:text-foreground cursor-pointer" href="#how-it-works">How it works</Link>
              </ul>
            </div>


             {/* socials */}
            <div>
              <h4 className="text-sm font-semibold">Connect</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Number</li>
                <li className="hover:text-foreground cursor-pointer">Facebook</li>
                <li className="hover:text-foreground cursor-pointer">Instagram</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UppTask All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1Gd28V7xAA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/upptask"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}