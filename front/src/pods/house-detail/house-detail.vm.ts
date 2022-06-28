import noImage from '@/assets/no-image-icon.png';

export interface Review {
  id: string;
  date: Date;
  user: string;
  comment: string;
}

export interface House {
  id: string;
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
  id: '',
  name: '-',
  description: '-',
  address: '-',
  image: noImage,
  rooms: 0,
  beds: 0,
  bathrooms: 0,
  reviews: [],
});
