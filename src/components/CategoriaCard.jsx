import { Link } from 'react-router';

export default function CategoriaCard({ categoria }) {
  return (
    <Link
      to={`/categoria/${categoria.id}`}
      className="card-libro flex flex-col justify-between border-t-4 border-t-color-primario hover:border-t-color-secundario hover:-translate-y-1"
    >
      <div>
        <h3 className="text-xl font-serif font-bold text-color-oscuro mb-2">
          {categoria.nombre}
        </h3>
        <p className="text-sm text-gray-600 mb-6">{categoria.descripcion}</p>
      </div>
      <span className="text-sm font-semibold text-color-secundario flex items-center gap-1">
        Explorar libros →
      </span>
    </Link>
  );
}
