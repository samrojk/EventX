import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CalendarDays, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CalendarDays size={28} className="text-primary-600" />
          <span className="text-xl font-bold font-heading text-primary-600">
            EventX
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            Home
          </NavLink>
          <a href="/#upcoming-events" className="nav-link">
            Upcoming Events
          </a>
          <a href="/#testimonials" className="nav-link">
            Testimonials
          </a>
          <a href="/#contact" className="nav-link">
            Contact
          </a>
          <Link to="/book" className="ml-4 btn btn-primary">
            Book a Ticket
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white shadow-lg`}
      >
        <div className="container py-4 space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block nav-link nav-link-active'
                : 'block nav-link'
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <a
            href="/#upcoming-events"
            className="block nav-link"
            onClick={() => setIsOpen(false)}
          >
            Upcoming Events
          </a>
          <a
            href="/#testimonials"
            className="block nav-link"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="/#contact"
            className="block nav-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/book"
            className="block w-full btn btn-primary text-center"
            onClick={() => setIsOpen(false)}
          >
            Book a Ticket
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;