import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Spinner from '../components/Spinner';
import MensajeError from '../components/MensajeError';
import CategoriaGrid from '../components/CategoriaGrid';

export default function Home() {
  const [simularFallo, setSimularFallo] = useState(false);
  const endpoint = simularFallo ? '/api/error-simulado' : '/api/categorias';
  const { data: categorias, cargando, error, reintentar } = useFetch(endpoint);

  const manejarRecuperacion = () => {
    if (simularFallo) {
      setSimularFallo(false);
    } else {
      reintentar();
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="bg-color-primario text-color-claro rounded-2xl p-8 sm:p-12 mb-10 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-3">
          Explora Nuestro Archivo Literario
        </h1>
        <p className="text-color-claro/90 max-w-2xl text-base sm:text-lg">
          Selecciona una categoría para consultar los títulos disponibles.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-serif font-bold text-color-oscuro">
          Categorías Disponibles
        </h2>
        <button
          type="button"
          onClick={() => setSimularFallo((prev) => !prev)}
          className="text-xs px-3 py-1.5 rounded-md border border-color-primario/30 text-color-primario hover:bg-color-primario hover:text-white transition-colors"
        >
          {simularFallo ? 'Restaurar API normal' : 'Simular error 500 de API'}
        </button>
      </div>

      {cargando && <Spinner mensaje="Cargando categorías literarias..." />}

      {!cargando && error && (
        <MensajeError mensaje={error} onReintentar={manejarRecuperacion} />
      )}

      {!cargando && !error && categorias && (
        <CategoriaGrid categorias={categorias} />
      )}
    </section>
  );
}
