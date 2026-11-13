import { Link } from 'react-router';
import LibroCard from './LibroCard';

export default function LibroGrid({
  libros,
  mensajeVacio = 'No encontramos libros disponibles en este momento.',
}) {
  if (!libros || libros.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-color-oscuro mb-2">
          Sin resultados
        </h3>
        <p className="text-gray-600 mb-6">{mensajeVacio}</p>
        <Link to="/" className="btn-primario inline-block">
          Explorar categorías disponibles
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {libros.map((libro) => (
        <LibroCard key={libro.id} libro={libro} />
      ))}
    </div>
  );
}
