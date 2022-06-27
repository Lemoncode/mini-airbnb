import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '@/logo.svg';
import { switchRoutes } from '@/routers/routes.constants';

import { createEmptyHouse, House } from './house-detail.vm';
import './house-detail.style.css';

interface Props {
  detail: House;
}

export const HouseDetailComponet: React.FC<Props> = (props) => {
  const { detail = createEmptyHouse() } = props;
  const navivate = useNavigate();

  const handleClick = () => navivate(switchRoutes.list);

  return (
    <>
      <div className="title">
        <img src={logo} />
        <h1>{detail.name}</h1>
        <button onClick={handleClick}>Volver</button>
      </div>
      <div className="detail">
        <img src={detail.image} />
        <div>
          <h3>Descripción</h3>
          <p>{detail.description}</p>
          <h3>Dirección</h3>
          <p>{detail.address}</p>
          <h3>Habitaciones: {detail.rooms}</h3>
          <h3>Camas: {detail.beds}</h3>
          <h3>Baños: {detail.bathrooms}</h3>
        </div>
      </div>
      {detail.reviews.length > 0 && (
        <div className="reviewContent">
          <h1>Reviews</h1>
          {detail.reviews.map((review) => (
            <div className="review">
              <p>Fecha: {review.date}</p>
              <p>{`${review.user}: ${review.comment}`}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
