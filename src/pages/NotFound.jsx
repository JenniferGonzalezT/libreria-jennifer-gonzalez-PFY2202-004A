import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl font-serif font-bold text-color-primario mb-4">404</p>
      <h1 className="text-2xl font-bold text-color-oscuro mb-3">
        Página no encontrada
      </h1>
      <p className="text-gray-600 mb-8">
        La sección que buscas no existe o fue trasladada dentro de nuestro archivo.
      </p>
      <Link to="/" className="btn-primario inline-block">
        Volver al inicio
      </Link>
    </section>
  );
}
