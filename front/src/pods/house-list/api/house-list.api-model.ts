export interface Review {
  id: string;
  date: Date;
  reviewer_name: string;
  comments: string;
}

export interface House {
  id: string;
  name: string;
  summary: string;
  image: string;
  country: string;
  street: string;
  market: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews: Review[];
}
