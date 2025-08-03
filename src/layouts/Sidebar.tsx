import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>
            Lista de Produtos
          </NavLink>
        </li>
        <li>
          <NavLink to="/novo" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Novo Produto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
