import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="card group overflow-hidden flex flex-col h-full transition-all duration-300 hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {event.category}
        </div>
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-xl font-bold mb-3">{event.name}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-2 text-primary-500" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar size={16} className="mr-2 text-primary-500" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock size={16} className="mr-2 text-primary-500" />
          <span>{event.time}</span>
        </div>
        <p className="text-gray-600 mb-6">{event.description}</p>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <Link
          to={`/book?event=${encodeURIComponent(event.name)}`}
          className="btn btn-primary w-full"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default EventCard;