import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import { upcomingEvents, pastEvents, testimonials } from '../data/eventData';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-20 bg-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these amazing events. Book your tickets now and be part of something special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our previous successful events that left lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="card overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary-100 text-secondary-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                  <div className="flex items-center text-gray-500 mb-1">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <a href="#" className="text-primary-600 font-medium flex items-center hover:underline">
                    View Highlights
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary-500 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent-500 blur-3xl"></div>
        </div>

        <div className="container relative">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Attendees Say</h2>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what people who've attended our events have to say about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Got an Event to Share?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for exciting events to feature on our platform. Share your event details with us and reach a wider audience.
            </p>
            <Link to="/book" className="btn btn-accent">
              Submit Your Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;