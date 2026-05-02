"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-semibold text-lg">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400" />
              TeamTrackPro
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Smart team management platform designed to simplify workflows,
              improve productivity, and keep your team aligned.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">Features</li>
              <li className="hover:text-foreground cursor-pointer">Pricing</li>
              <li className="hover:text-foreground cursor-pointer">
                Integrations
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">About</li>
              <li className="hover:text-foreground cursor-pointer">Careers</li>
              <li className="hover:text-foreground cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-foreground cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TeamTrackPro. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <FaFacebookF className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            <FaTwitter className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
            <FaInstagram className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
