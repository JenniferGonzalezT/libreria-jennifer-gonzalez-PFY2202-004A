import { useFetch } from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import MensajeError from '../components/MensajeError';
import LibroGrid from '../components/LibroGrid';

export default function Catalogo() {
  const { data: libros, cargando, error, reintentar } = useFetch('/api/libros');

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-color-oscuro">
          Catálogo Completo
        </h1>
        <p className="text-gray-600 mt-1">
          Todos los ejemplares disponibles actualmente en nuestra librería.
        </p>
      </div>

      {cargando && <Spinner mensaje="Cargando catálogo completo..." />}

      {!cargando && error && (
        <MensajeError mensaje={error} onReintentar={reintentar} />
      )}

      {!cargando && !error && libros && 
        <LibroGrid libros={libros} />
      }
    </section>
  );
}
