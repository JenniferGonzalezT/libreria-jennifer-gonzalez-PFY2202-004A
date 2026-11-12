import { NavLink, Link } from 'react-router';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-color-claro border-b-2 border-color-secundario pb-1 font-semibold transition-colors'
      : 'text-gray-300 hover:text-white pb-1 transition-colors';

  return (
    <header className="bg-color-oscuro text-color-claro shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-serif font-bold tracking-wide text-color-claro flex items-center gap-2">
          <span>📚</span>
          <span>Ateneo Libros</span>
        </Link>

        <div className="flex items-center gap-6 text-sm sm:text-base">
          <NavLink to="/" className={linkClass}>
            Categorías
          </NavLink>
          <NavLink to="/catalogo" className={linkClass}>
            Catálogo Completo
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
