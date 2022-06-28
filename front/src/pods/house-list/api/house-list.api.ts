import { apiRoutes } from '@/core/api-configuration/api.constants';
import axios from 'axios';
import { House } from './house-list.api-model';

export const getHouses = (): Promise<House[]> =>
  axios.get(apiRoutes.houses.list).then((response) => response?.data);
