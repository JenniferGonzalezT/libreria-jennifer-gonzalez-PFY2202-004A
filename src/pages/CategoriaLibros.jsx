import { useParams, Link } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import MensajeError from '../components/MensajeError';
import LibroGrid from '../components/LibroGrid';

export default function CategoriaLibros() {
  const { id } = useParams();
  const { data: libros, cargando, error, reintentar } = useFetch(`/api/libros?categoria=${id}`);
  const { data: categorias } = useFetch('/api/categorias');

  const categoriaActual = categorias?.find((cat) => cat.id === id);

  return (
    <section className="page-container">
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

      {!cargando && !error && libros && (
        <LibroGrid
          libros={libros}
          mensajeVacio="No encontramos libros en esta categoría. Es posible que no exista o aún no tenga ejemplares registrados."
        />
      )}
    </section>
  );
}
