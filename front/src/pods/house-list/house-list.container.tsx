import React from 'react';
import * as api from './api';
import { HouseListComponet } from './house-list.component';
import { mapHousesFromApiToVm } from './house-list.mappers';
import { House } from './house-list.vm';

export const HouseListContainer: React.FC = () => {
  const [houseList, setHouseList] = React.useState<House[]>([]);

  React.useEffect(() => {
    api.getHouses().then(mapHousesFromApiToVm).then(setHouseList);
  }, []);

  return <HouseListComponet houseList={houseList} />;
};
