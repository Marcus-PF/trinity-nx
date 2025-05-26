'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-rotary-blue text-white pt-12 pb-8 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Club Info */}
        <div>
          <Image
            src="/rotary-logo.svg"
            alt="Rotary Logo"
            width={200}
            height={77}
            className="mx-auto md:mx-0 mb-2"
          />
          <h3 className="font-semibold text-lg mb-2">Portuguese Forum Rotary Club</h3>
          <p className="max-w-sm mx-auto md:mx-0">
            We’re part of a global movement of leaders and changemakers.
            Service Above Self is more than a motto — it’s our way of life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-rotary-gold">About</Link></li>
            <li><Link href="/membership" className="hover:text-rotary-gold">Membership</Link></li>
            <li><Link href="/contact" className="hover:text-rotary-gold">Contact</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-rotary-gold">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3">
          <h4 className="font-semibold text-lg mb-3">Connect</h4>
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:info@portugueserotaryeclub.org"
              className="hover:text-rotary-gold"
            >
              info@portugueserotaryeclub.org
            </a>
          </div>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-rotary-gold">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-rotary-gold">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-xs border-t border-rotary-gold pt-4">
        © {new Date().getFullYear()} Portuguese Forum Rotary Club. All rights reserved.
      </div>
    </footer>
  );
}
