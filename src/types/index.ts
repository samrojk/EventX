export interface Event {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  description: string;
  category: string;
  image: string;
}

export interface PastEvent {
  id: number;
  name: string;
  location: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  event: string;
  quote: string;
  avatar: string;
}