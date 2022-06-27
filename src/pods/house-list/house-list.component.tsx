import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '@/logo.svg';
import lupa from '@/lupa.svg';

import { House } from './house-list.vm';
import './house-list.style.css';
import { linkRoutes } from '@/routers/routes.constants';

interface Props {
  houseList: House[];
}

export const HouseListComponet: React.FC<Props> = (props) => {
  const { houseList } = props;
  const [list, setList] = React.useState(houseList);
  const [search, setSearch] = React.useState('');
  const navivate = useNavigate();

  React.useEffect(() => {
    if (houseList) {
      setList(houseList.filter((house) => house.name.indexOf(search) >= 0));
    }
  }, [houseList, search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const handleClick = (house: House) => () =>
    navivate(linkRoutes.detail(house.id));

  return (
    <>
      <div className="title">
        <img src={logo} />
        <h1>Rent a Room</h1>
      </div>
      <div className="search">
        <div>
          <img className="icon" src={lupa} />
          <input className="input" value={search} onChange={handleChange} />
        </div>
      </div>
      <div className="results">
        <div className="container">
          {list.map((house) => (
            <div className="description" onClick={handleClick(house)}>
              <h3>{house.name}</h3>
              <img src={house.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
