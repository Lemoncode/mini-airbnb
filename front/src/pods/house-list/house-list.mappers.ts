import * as apiModel from './api';
import * as viewModel from './house-list.vm';

const mapHouseFromApiToVm = (house: apiModel.House): viewModel.House => ({
  id: house.id,
  image: house.image,
  name: house.name,
});

export const mapHousesFromApiToVm = (
  houses: apiModel.House[]
): viewModel.House[] => houses.map(mapHouseFromApiToVm);
