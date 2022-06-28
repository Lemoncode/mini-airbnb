import { ObjectId } from 'mongodb';
import { NumericType } from "mongodb";

export interface Address {
  country: string;
  street: string;
  market: string;
}

export interface Images {
  picture_url: string;
}

export interface Review {
  _id: string;
  reviewer_name: string;
  date: Date;
  comments: string;
}

export interface House {
  _id: string;
  name: string;
  summary: string;
  images: Images;
  address: Address;
  bedrooms: number;
  beds: number;
  bathrooms: NumericType;
  reviews: Review[];
}
