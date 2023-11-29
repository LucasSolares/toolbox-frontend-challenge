import { RootRoute, Route, Router } from '@tanstack/react-router';

import { Layout } from '../components';
import { Files } from '../pages';

export const rootRoute = new RootRoute({
  component: Layout,
});

export const indexRoute = new Route({
  path: '/',
  component: Files,
  getParentRoute: () => rootRoute,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = new Router({ routeTree });

export default router;
