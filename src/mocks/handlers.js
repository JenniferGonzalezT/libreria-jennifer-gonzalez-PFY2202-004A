import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  // Endpoint para obtener las categorías de libros
  http.get('/api/categorias', async () => {
    // Simular un retraso de red de 1.5 segundos para apreciar el estado de carga
    await delay(1500);

    return HttpResponse.json(db.categorias);
  }),


  // Endpoint para obtener libros filtrados por categoría
  http.get('/api/libros', async ({ request }) => {
    await delay(1500);
    
    // Extraer parámetro de la URL (ej: /api/libros?categoria=ciencia-ficcion)
    const url = new URL(request.url);
    const categoriaId = url.searchParams.get('categoria');

    if (!categoriaId) {
      return HttpResponse.json(db.libros); // Si no hay filtro, retorna todos
    }

    const librosFiltrados = db.libros.filter(libro => libro.categoriaId === categoriaId);
    return HttpResponse.json(librosFiltrados);
  }),


  // Endpoint para simular un error 500
  http.get('/api/error-simulado', async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }),
];


// "Base de datos" en memoria para Categorías y Libros
const db = {
  categorias: [
    { id: 'ficcion', nombre: 'Ficción', descripcion: 'Explora mundos imaginarios y narrativas cautivadoras.' },
    { id: 'ciencia-ficcion', nombre: 'Ciencia Ficción', descripcion: 'Viajes espaciales, tecnología futurista y distopías.' },
    { id: 'misterio', nombre: 'Misterio y Suspenso', descripcion: 'Resuelve enigmas y mantén la tensión hasta la última página.' },
    { id: 'historia', nombre: 'Historia', descripcion: 'Descubre los eventos que forjaron nuestro mundo actual.' }
  ],
  
  libros: [
    // Ficción
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', categoriaId: 'ficcion', precio: 21000, portada: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80' },
    { id: 2, titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald', categoriaId: 'ficcion', precio: 14500, portada: 'https://images.unsplash.com/photo-1522813589417-640a463200ff?w=500&q=80' },
    { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', categoriaId: 'ficcion', precio: 18900, portada: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80' },
    { id: 4, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', categoriaId: 'ficcion', precio: 16000, portada: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=500&q=80' },

    // Ciencia Ficción
    { id: 5, titulo: '1984', autor: 'George Orwell', categoriaId: 'ciencia-ficcion', precio: 15900, portada: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80' },
    { id: 6, titulo: 'Dune', autor: 'Frank Herbert', categoriaId: 'ciencia-ficcion', precio: 19990, portada: 'https://images.unsplash.com/photo-1518378146477-5085e6837943?w=500&q=80' },
    { id: 7, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', categoriaId: 'ciencia-ficcion', precio: 13500, portada: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?w=500&q=80' },
    { id: 8, titulo: 'Un mundo feliz', autor: 'Aldous Huxley', categoriaId: 'ciencia-ficcion', precio: 14900, portada: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80' },

    // Misterio y Suspenso
    { id: 9, titulo: 'El resplandor', autor: 'Stephen King', categoriaId: 'misterio', precio: 18500, portada: 'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=500&q=80' },
    { id: 10, titulo: 'La chica del tren', autor: 'Paula Hawkins', categoriaId: 'misterio', precio: 15500, portada: 'https://images.unsplash.com/photo-1476275466078-4007374efac4?w=500&q=80' },
    { id: 11, titulo: 'El código Da Vinci', autor: 'Dan Brown', categoriaId: 'misterio', precio: 17200, portada: 'https://images.unsplash.com/photo-1533659223126-78eec74b8fb1?w=500&q=80' },

    // Historia
    { id: 12, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoriaId: 'historia', precio: 24900, portada: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=500&q=80' },
    { id: 13, titulo: 'Una breve historia de casi todo', autor: 'Bill Bryson', categoriaId: 'historia', precio: 22000, portada: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=500&q=80' },
    { id: 14, titulo: 'Armas, gérmenes y acero', autor: 'Jared Diamond', categoriaId: 'historia', precio: 26500, portada: 'https://images.unsplash.com/photo-1505664159620-1e5b8d277717?w=500&q=80' }
  ]
};
