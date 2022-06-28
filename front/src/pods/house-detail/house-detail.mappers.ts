import * as apiModel from './api';
import * as viewModel from './house-detail.vm';

const mapReviewFromApiToVm = (review: apiModel.Review): viewModel.Review => ({
  id: review.id,
  comment: review.comments,
  user: review.reviewer_name,
  date: new Date(review.date),
});

export const mapHouseFromApiToVm = (
  house: apiModel.House
): viewModel.House => ({
  id: house.id,
  image: house.image,
  name: house.name,
  address: `${house.street}, ${house.market}, ${house.country}`,
  beds: house.beds,
  rooms: house.bedrooms,
  bathrooms: house.bathrooms,
  description: house.summary,
  reviews: house.reviews?.map(mapReviewFromApiToVm),
});
