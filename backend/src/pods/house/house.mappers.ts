import * as model from "dals";
import * as apiModel from "./house.api-model";

// Model Top Api
export const mapReviewsFromModelToApi = (comment: model.Review): apiModel.Review => ({
  id: comment._id,
  reviewer_name: comment.reviewer_name,
  date: comment.date.toISOString(),
  comments: comment.comments,
});

export const mapListReviewsFromModelToApi = (
  reviewList: model.Review[]
): apiModel.Review[] =>
  Array.isArray(reviewList) ? reviewList.map(mapReviewsFromModelToApi) : [];

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id,
  name: house.name,
  summary: house.summary,
  image: house.images.picture_url,
  country: house.address.country,
  street: house.address.street,
  market: house.address.market,
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: Number(house.bathrooms),
  reviews: mapListReviewsFromModelToApi(house.reviews),
});

export const mapListHouseFromModeltoApi = (
  houseList: model.House[]
): apiModel.House[] =>
  Array.isArray(houseList) ? houseList.map(mapHouseFromModelToApi) : [];

// Api To Model
export const mapReviewsFromApiToModel = (comment: apiModel.Review): model.Review => ({
  _id: Date.now().toString(),
  reviewer_name: comment.reviewer_name,
  date: new Date(),
  comments: comment.comments,
});

const mapListReviewsFromApiToModel = (
  reviewList: apiModel.Review[]
): model.Review[] =>
  Array.isArray(reviewList) ? reviewList.map(mapReviewsFromApiToModel) : [];

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
  _id: house.id,
  name: house.name,
  summary: house.summary,
  images: {
    picture_url: house.image,
  },
  address: {
    country: house.country,
    street: house.street,
    market: house.market,
  },
  bedrooms: house.bedrooms,
  beds: house.beds,
  bathrooms: house.bathrooms,
  reviews: mapListReviewsFromApiToModel(house.reviews),
});

export const mapListHouseFromApiToModel = (
  house: apiModel.House[]
): model.House[] =>
  Array.isArray(house) ? house.map(mapHouseFromApiToModel) : [];
