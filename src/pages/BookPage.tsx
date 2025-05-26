import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const BookPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventName = queryParams.get('event') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventName: eventName,
    location: '',
    date: '',
    time: '',
    tickets: 1,
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Update event name if it changes in URL
    setFormData((prev) => ({ ...prev, eventName }));
  }, [eventName]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.eventName.trim()) {
      newErrors.eventName = 'Event name is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time.trim()) {
      newErrors.time = 'Time is required';
    }
    
    if (formData.tickets < 1) {
      newErrors.tickets = 'At least 1 ticket is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds and redirect
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50">
        <div className="container max-w-lg mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-10 h-10 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your ticket has been booked successfully. We've sent the details to your email.
            </p>
            <p className="text-sm text-gray-500">Redirecting to home page...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ticket</h1>
            <p className="text-lg text-gray-600">
              Fill out the form below to secure your spot at the event.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label htmlFor="name" className="label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div className="col-span-1">
                  <label htmlFor="email" className="label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label htmlFor="eventName" className="label">
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleChange}
                    className={`input ${errors.eventName ? 'border-red-500' : ''}`}
                    placeholder="Tech Conference 2025"
                  />
                  {errors.eventName && (
                    <p className="mt-1 text-sm text-red-600">{errors.eventName}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label htmlFor="location" className="label flex items-center">
                    <MapPin size={16} className="mr-1 text-primary-500" />
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`input ${errors.location ? 'border-red-500' : ''}`}
                    placeholder="City Convention Center"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                  )}
                </div>

                <div className="col-span-1">
                  <label htmlFor="date" className="label flex items-center">
                    <Calendar size={16} className="mr-1 text-primary-500" />
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`input ${errors.date ? 'border-red-500' : ''}`}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                  )}
                </div>

                <div className="col-span-1">
                  <label htmlFor="time" className="label flex items-center">
                    <Clock size={16} className="mr-1 text-primary-500" />
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`input ${errors.time ? 'border-red-500' : ''}`}
                  />
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">{errors.time}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label htmlFor="tickets" className="label flex items-center">
                    <Users size={16} className="mr-1 text-primary-500" />
                    Number of Tickets
                  </label>
                  <input
                    type="number"
                    id="tickets"
                    name="tickets"
                    min="1"
                    max="10"
                    value={formData.tickets}
                    onChange={handleChange}
                    className={`input ${errors.tickets ? 'border-red-500' : ''}`}
                  />
                  {errors.tickets && (
                    <p className="mt-1 text-sm text-red-600">{errors.tickets}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label htmlFor="notes" className="label">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="input"
                    placeholder="Any special requirements or questions..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-4 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                        ></circle>
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;