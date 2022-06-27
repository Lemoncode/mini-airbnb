import React from 'react';
import { HouseDetailComponet } from './house-detail.component';
import { House } from './house-detail.vm';

export const HouseDetailContainer: React.FC = () => {
  const detail: House = {
    name: 'Casa rural Málaga',
    image:
      'https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso-560x371.jpg',
    description:
      'Fantastica casa rural en Málaga disponible para todos el verano, con 5 habitaciones, 2 cuartos de baños, piscina.',
    address: 'Calle Camino Cupiana, Málaga, Spain',
    rooms: 5,
    beds: 8,
    bathrooms: 2,
    reviews: [
      {
        date: '2021-06-12',
        user: 'Ana',
        comment: 'La casa es fantástica, 100% recomendada',
      },
      {
        date: '2021-03-22',
        user: 'Miguel',
        comment:
          'Son super amables y pudimos pasar un rato bueno en familia- Muy recomendada.',
      },
    ],
  };

  return <HouseDetailComponet detail={detail} />;
};
