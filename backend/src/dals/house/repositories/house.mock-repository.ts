import { HouseRepository } from "./house.repository";
import { House, Review } from "../house.model";
import { db } from "../../mock-data";

const paginateHouseList = (
  houseList: House[],
  page: number,
  pageSize: number,
  country: string
): House[] => {
  let paginatedHouseList = [...houseList];

  if (page && pageSize && country) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList
      .filter((c) => c.address.country.toLowerCase() === country.toLowerCase())
      .slice(startIndex, endIndex);
  } else if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
  }

  return paginatedHouseList;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page, pageSize, country) =>
    paginateHouseList(db.houses, page, pageSize, country),
  getReviewsList: async (id: string) =>
    db.houses.find((h) => h._id === id).reviews,
  getHouse: async (id: string) => db.houses.find((h) => h._id === id),
  insertReview: async (review: Review, id: string) => {
    const { reviews } = db.houses.find((h) => h._id === id);
    const foundIndex = db.houses.findIndex((i) => i._id === id);
    db.houses[foundIndex].reviews = [review, ...reviews];

    return review;
  },
};
