/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const CategoriaLibros = lazy(() => import('../pages/CategoriaLibros'));
const Catalogo = lazy(() => import('../pages/Catalogo'));

export const rutasApp = [
  { path: '/', element: <Home /> },
  { path: '/categoria/:id', element: <CategoriaLibros /> },
  { path: '/catalogo', element: <Catalogo /> },
];
