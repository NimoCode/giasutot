export interface Tutor {
  id: string;
  name: string;
  avatar: string | null;
  subjects: string[];
  levels: string[];
  rating: number;
  price_per_hour: number;
  short_bio: string;
  long_bio: string;
  teaching_experience_years: number;
  education: string;
  sample_video_url: string;
  tags: string[];
  gallery_images: string[];
  contact: {
    email: string;
    phone: string;
  };
  availability: string[];
  location: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  contentMarkdown: string;
  date: string;
  author: string;
}

export interface Lead {
  id: string;
  name: string;
  parentPhone: string;
  studentAge: string;
  subject: string;
  preferredTime: string;
  createdAt: string;
}


