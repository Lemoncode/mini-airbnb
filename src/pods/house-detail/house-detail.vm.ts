import noImage from '@/no-image-icon.png';

export interface Review {
  date: string;
  user: string;
  comment: string;
}

export interface House {
  name: string;
  image: string;
  description: string;
  address: string;
  rooms: number;
  beds: number;
  bathrooms: number;
  reviews: Review[];
}

export const createEmptyHouse = (): House => ({
  name: '-',
  description: '-',
  address: '-',
  image: noImage,
  rooms: 0,
  beds: 0,
  bathrooms: 0,
  reviews: [],
});
