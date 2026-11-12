import { useParams, Link } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import MensajeError from '../components/MensajeError';
import LibroCard from '../components/LibroCard';

export default function CategoriaLibros() {
  const { id } = useParams();
  const { data: libros, cargando, error, reintentar } = useFetch(`/api/libros?categoria=${id}`);
  const { data: categorias } = useFetch('/api/categorias');

  const categoriaActual = categorias?.find((cat) => cat.id === id);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link
          to="/"
          className="text-sm font-medium text-color-secundario hover:text-color-primario transition-colors inline-block mb-3"
        >
          ← Volver a todas las categorías
        </Link>
        <h1 className="text-3xl font-serif font-bold text-color-oscuro capitalize">
          {categoriaActual ? categoriaActual.nombre : id.replace('-', ' ')}
        </h1>
        {categoriaActual && (
          <p className="text-gray-600 mt-1">{categoriaActual.descripcion}</p>
        )}
      </div>

      {cargando && <Spinner mensaje="Buscando libros en esta categoría..." />}

      {!cargando && error && (
        <MensajeError mensaje={error} onReintentar={reintentar} />
      )}

      {!cargando && !error && libros && libros.length === 0 && (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-color-oscuro mb-2">
            No encontramos libros en esta categoría
          </h3>
          <p className="text-gray-600 mb-6">
            Es posible que la categoría no exista o que aún no tenga ejemplares registrados.
          </p>
          <Link to="/" className="btn-primario inline-block">
            Explorar categorías disponibles
          </Link>
        </div>
      )}

      {!cargando && !error && libros && libros.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {libros.map((libro) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      )}
    </section>
  );
}
