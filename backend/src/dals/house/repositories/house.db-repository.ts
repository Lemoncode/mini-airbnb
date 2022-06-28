import { HouseRepository } from './house.repository';
import { House, Review } from '../house.model';
import { getDBInstance } from 'core/servers/db.server';

export const dbRepository: HouseRepository = {
  getHouseList: async (page: number, pageSize: number, country: string) => {
    const db = getDBInstance();

    if (page && pageSize && country) {
      const skip = page * pageSize - pageSize;
      return await db
        .collection<House>('listingsAndReviews')
        .find(
          { 'address.country': { $eq: country } },
          { projection: { reviews: { $slice: -5 } } }
        )
        .skip(skip)
        .limit(pageSize)
        .toArray();
    } else if (page && pageSize) {
      const skip = page * pageSize - pageSize;
      return await db
        .collection<House>('listingsAndReviews')
        .find({}, { projection: { reviews: { $slice: -5 } } })
        .skip(skip)
        .limit(pageSize)
        .toArray();
    }
    return await db.collection<House>('listingsAndReviews').find().toArray();
  },
  getReviewsList: async (id: string) => {
    const db = getDBInstance();
    const { reviews } = await db
      .collection('listingsAndReviews')
      .findOne(
        { _id: id },
        { projection: { reviews: { $slice: -5 }, _id: 0 } }
      );
    return reviews;
  },
  getHouse: async (id: string) => {
    const db = getDBInstance();
    return await db.collection<House>('listingsAndReviews').findOne({
      _id: id,
    });
  },
  insertReview: async (review: Review, id: string) => {
    const db = getDBInstance();

    await db.collection<Review>('listingsAndReviews').findOneAndUpdate(
      {
        _id: id,
      },
      { $push: { reviews: { $each: [review], $position: 0 } } },
      { upsert: true, returnDocument: 'after' }
    );
    return review;
  },
};
