export default function LibroCard({ libro }) {
  const precioFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(libro.precio);

  return (
    <article className="card-libro flex flex-col justify-between overflow-hidden group">
      <div>
        <div className="h-56 w-full overflow-hidden rounded-lg mb-4 bg-color-claro">
          <img
            src={libro.portada}
            alt={`Portada de ${libro.titulo}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-color-secundario mb-1">
          {libro.categoriaId.replace('-', ' ')}
        </span>
        <h3 className="text-lg font-serif font-bold text-color-oscuro mb-1 line-clamp-2">
          {libro.titulo}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{libro.autor}</p>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-lg font-bold text-color-primario">{precioFormateado}</span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-color-claro text-color-oscuro font-medium">
          Disponible
        </span>
      </div>
    </article>
  );
}
