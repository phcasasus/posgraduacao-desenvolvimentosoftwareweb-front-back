import { Outlet, useLoaderData } from 'react-router-dom';
import { ProdutosProvider } from '../state/ProdutosContext';
import Header from './Header';
import Sidebar from './Sidebar';
import './MainLayout.css';

export default function MainLayout() {
  const produtosLoaderData = useLoaderData();

  return (
    <ProdutosProvider produtosIniciais={produtosLoaderData}>
      <div className="layout-container">
        <Header />
        <Sidebar />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </ProdutosProvider>
  );
}
