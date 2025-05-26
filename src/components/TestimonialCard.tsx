import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-primary-800/80 to-primary-900/80 backdrop-blur rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2">
      <div className="relative">
        <Quote className="absolute -top-4 -left-2 w-8 h-8 text-primary-400/30" />
        <p className="relative text-primary-100 text-lg leading-relaxed mb-6">
          {testimonial.quote}
        </p>
      </div>
      
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-4 ring-primary-400/20">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-primary-300">{testimonial.event}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className="fill-current text-accent-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;