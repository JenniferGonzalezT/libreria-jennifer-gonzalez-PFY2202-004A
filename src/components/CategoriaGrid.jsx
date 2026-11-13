import CategoriaCard from './CategoriaCard';

export default function CategoriaGrid({ categorias }) {
  if (!categorias || categorias.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-color-oscuro mb-2">
          Sin categorías disponibles
        </h3>
        <p className="text-gray-600">
          No encontramos categorías literarias registradas en este momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categorias.map((cat) => (
        <CategoriaCard key={cat.id} categoria={cat} />
      ))}
    </div>
  );
}
