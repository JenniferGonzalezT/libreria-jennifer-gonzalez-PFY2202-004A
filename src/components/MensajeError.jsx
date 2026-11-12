import { Link } from 'react-router';

export default function MensajeError({ mensaje, onReintentar }) {
  return (
    <div className="max-w-xl mx-auto my-12 p-6 bg-white border-l-4 border-color-primario rounded-r-xl shadow-md text-center">
      <h3 className="text-xl font-bold text-color-primario mb-2">
        Ocurrió un inconveniente al cargar los datos
      </h3>
      <p className="text-gray-600 mb-6">
        {mensaje || 'No pudimos conectar con el catálogo en este momento.'}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {onReintentar && (
          <button onClick={onReintentar} className="btn-primario">
            Reintentar conexión
          </button>
        )}
        <Link
          to="/"
          className="px-4 py-2 border border-color-oscuro text-color-oscuro hover:bg-color-oscuro hover:text-white font-medium rounded-lg transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
