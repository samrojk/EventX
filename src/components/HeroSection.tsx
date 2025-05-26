import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const scrollToEvents = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('upcoming-events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-800 via-primary-900 to-accent-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent-500"></div>
        <div className="absolute -bottom-24 left-1/3 w-64 h-64 rounded-full bg-secondary-500"></div>
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Discover & Experience Amazing Events
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Connect with like-minded people and create unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a 
              href="#upcoming-events" 
              onClick={scrollToEvents}
              className="btn btn-accent text-lg"
            >
              Explore Events
            </a>
            <Link 
              to="/book" 
              className="btn bg-white text-primary-900 hover:bg-gray-100 focus:ring-white text-lg"
            >
              Book a Ticket
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;