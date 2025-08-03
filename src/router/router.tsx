import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProductList from '../pages/ProductList';
import NewProduct from '../pages/NewProduct';
import { produtosLoader } from '../loaders/produtosLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: produtosLoader,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: 'novo',
        element: <NewProduct />,
      },
    ],
  },
]);

export default router;
