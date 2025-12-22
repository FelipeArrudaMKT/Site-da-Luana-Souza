
export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  tip: string;
  category: 'classica' | 'gourmet';
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar: string;
}

export interface CourseModule {
  number: number;
  title: string;
  description: string;
}
