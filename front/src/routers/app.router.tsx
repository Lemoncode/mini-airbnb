import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { linkRoutes, switchRoutes } from './routes.constants';
import { HouseDetailScene, HouseListScene } from '@/scenes/';

export const AppRouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.list} element={<HouseListScene />} />
        <Route path={switchRoutes.detail} element={<HouseDetailScene />} />
        <Route path="*" element={<Navigate to={linkRoutes.list} replace />} />
      </Routes>
    </Router>
  );
};
