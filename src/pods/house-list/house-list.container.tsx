import React from 'react';
import { HouseListComponet } from './house-list.component';
import { House } from './house-list.vm';

export const HouseListContainer: React.FC = () => {
  const list: House[] = [
    {
      id: '1',
      name: 'Casa rural Málaga',
      image:
        'https://imagenes.elpais.com/resizer/32VwWeT2DQmDmJSStO-9TaQw-RQ=/1960x1470/filters:focal(4225x2895:4235x2905)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VMP7D7JF2BFKPLHOBL3WDBPNZY.jpg',
    },
    {
      id: '2',
      name: 'Casa rural Tomelloso',
      image:
        'https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg',
    },
    {
      id: '3',
      name: 'Casa de campo Jaen',
      image:
        'https://arquitecturaviva.com/assets/uploads/articulos/71318/av_182045.jpeg?h=87ae05d2',
    },
    {
      id: '4',
      name: 'Casa con piscina',
      image:
        'https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso-560x371.jpg',
    },
    {
      id: '5',
      name: 'Apartamento con jardin',
      image:
        'https://www.elmueble.com/medio/2020/03/30/00385010_42087d1e_2000x1501.jpg',
    },
    {
      id: '6',
      name: 'Duplex en pleno centro',
      image:
        'https://s03.s3c.es/imag/_v0/700x420/a/e/4/casas-prefabricadas-lujo-atlantida-homes-1.jpg',
    },
  ];
  return <HouseListComponet houseList={list} />;
};
