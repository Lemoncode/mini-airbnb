import { generatePath } from 'react-router';

export interface AppRoutes {
  list: string;
  detail: string;
}

const baseRoutes: AppRoutes = {
  list: '/list',
  detail: '/detail/:id',
};

export type SwitchRoutes = AppRoutes;

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
};

interface LinkRoutes extends Omit<AppRoutes, 'detail'> {
  detail: (id: string) => string;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  detail: (id: string) => generatePath(baseRoutes.detail, { id }),
};
