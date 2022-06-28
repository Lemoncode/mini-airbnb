import { apiRoutes } from '@/core/api-configuration/api.constants';
import axios from 'axios';
import { House } from './house-detail.api-model';

export const getHouse = (id: string): Promise<House> =>
  axios.get(apiRoutes.houses.detail(id)).then((response) => response?.data);
