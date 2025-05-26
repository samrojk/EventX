import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Mail, CalendarDays } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <CalendarDays size={28} className="text-primary-400" />
              <span className="text-xl font-bold font-heading text-primary-400">
                EventX
              </span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-sm">
              Discover and book amazing events in your city. Join us for unforgettable experiences.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:info@eventx.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-primary-600 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EventX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;