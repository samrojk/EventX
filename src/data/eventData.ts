import { Event, PastEvent, Testimonial } from '../types';

export const upcomingEvents: Event[] = [
  {
    id: 1,
    name: "Tech Summit 2025",
    location: "Pragati Maidan, New Delhi",
    date: "June 15, 2025",
    time: "10:00 AM - 6:00 PM",
    description: "Join the biggest tech conference of the year featuring industry leaders, workshops, and networking opportunities.",
    category: "Tech",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Music Festival Weekend",
    location: "Mahalaxmi Race Course, Mumbai",
    date: "July 22-24, 2025",
    time: "12:00 PM - 11:00 PM",
    description: "Three days of amazing music performances, food, and art installations featuring top artists from around the world.",
    category: "Music",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Design Workshop",
    location: "Indira Nagar, Bangalore",
    date: "August 5, 2025",
    time: "9:00 AM - 4:00 PM",
    description: "A hands-on workshop for designers to learn new techniques, tools, and collaborate on real-world projects.",
    category: "Workshop",
    image: "https://images.pexels.com/photos/7256897/pexels-photo-7256897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Food & Wine Festival",
    location: "Taj Palace, Hyderabad",
    date: "September 12, 2025",
    time: "11:00 AM - 7:00 PM",
    description: "Taste exceptional cuisines and wines from renowned chefs and vineyards. A culinary adventure you won't forget.",
    category: "Food",
    image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Startup Pitch Night",
    location: "Cyber Hub, Gurugram",
    date: "October 20, 2025",
    time: "6:00 PM - 9:00 PM",
    description: "Watch innovative startups pitch their ideas to investors and industry experts. Networking and refreshments included.",
    category: "Business",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Wellness Retreat",
    location: "The Leela Palace, Udaipur",
    date: "November 5-7, 2025",
    time: "All Day",
    description: "A three-day retreat focused on mindfulness, yoga, meditation, and holistic health practices to rejuvenate your body and mind.",
    category: "Health",
    image: "https://images.pexels.com/photos/8436566/pexels-photo-8436566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const pastEvents: PastEvent[] = [
  {
    id: 1,
    name: "Figma Config Meetup – Indore",
    location: "Brilliant Convention Centre, Indore",
    date: "March 10, 2025",
    description: "A community-driven meetup where Figma users shared insights, tips, and best practices for design workflows.",
    image: "https://images.pexels.com/photos/7969644/pexels-photo-7969644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Design", "Figma", "Community"]
  },
  {
    id: 2,
    name: "AI Conference 2025",
    location: "HICC, Pune",
    date: "February 22, 2025",
    description: "Experts from around the world discussed the latest advancements in artificial intelligence and machine learning.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["AI", "Technology", "Research"]
  },
  {
    id: 3,
    name: "Photography Workshop",
    location: "Lalit Kala Akademi, Chennai",
    date: "January 15, 2025",
    description: "Professional photographers taught techniques for capturing stunning images in various settings and lighting conditions.",
    image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Photography", "Art", "Workshop"]
  },
  {
    id: 4,
    name: "Web3 Summit",
    location: "Goa Marriott Resort, Goa",
    date: "December 5, 2024",
    description: "Blockchain enthusiasts and developers gathered to discuss the future of decentralized web technologies.",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Blockchain", "Web3", "Crypto"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    event: "Tech Summit 2024",
    quote: "An absolutely phenomenal experience! The workshops were incredibly insightful, and I made valuable connections with industry leaders. The venue and organization were top-notch.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Arjun Mehta",
    event: "Design Workshop",
    quote: "The hands-on approach and expert guidance transformed my design skills. The collaborative atmosphere and real-world projects made learning both fun and practical.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Zara Patel",
    event: "Music Festival Weekend",
    quote: "What an incredible festival! The diverse lineup, amazing food, and beautiful art installations created an unforgettable experience. Can't wait for next year!",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];