import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { HouseDetailComponet } from './house-detail.component';
import { mapHouseFromApiToVm } from './house-detail.mappers';
import { createEmptyHouse, House } from './house-detail.vm';

export const HouseDetailContainer: React.FC = () => {
  const [detail, setDetail] = React.useState<House>(createEmptyHouse);
  const { id } = useParams();

  React.useEffect(() => {
    api
      .getHouse(id ?? '0')
      .then(mapHouseFromApiToVm)
      .then(setDetail);
  }, []);

  return <HouseDetailComponet detail={detail} />;
};
