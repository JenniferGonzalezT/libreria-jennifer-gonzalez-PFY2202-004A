export default function Spinner({ mensaje = 'Cargando contenido...' }) {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-color-claro border-t-color-primario border-r-color-secundario mb-4"></div>
      <p className="text-color-oscuro font-medium text-lg">{mensaje}</p>
    </div>
  );
}
