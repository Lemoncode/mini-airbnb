import { House, Review } from '../house.model';

export interface HouseRepository {
  getHouseList: (
    page: number,
    pageSize: number,
    country: string
  ) => Promise<House[]>;
  getReviewsList: (id: string) => Promise<Review[]>;
  getHouse: (id: string) => Promise<House>;
  insertReview: (review: Review, id:string) => Promise<Review>;
}
