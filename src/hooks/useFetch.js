import { useState, useEffect } from 'react';

// Caché global en memoria para guardar las respuestas previas y evitar consultas repetidas
const cache = {};

export function useFetch(url) {
  const [estado, setEstado] = useState({
    urlActual: null,
    data: null,
    error: null,
  });
  const [intentos, setIntentos] = useState(0);

  // Verificar directamente si la URL ya está en caché y si no es un reintento manual
  const tieneCache = Boolean(url && cache[url] && intentos === 0);

  // Función para forzar un reintento manual 
  const reintentar = () => {
    if (url) delete cache[url]; // Limpiar la entrada en caché para forzar nueva consulta
    setEstado({ urlActual: null, data: null, error: null });
    setIntentos((prev) => prev + 1);
  };

  useEffect(() => {
    // Si no hay URL o ya están los datos en caché, no se ejecuta fetch ni setState
    if (!url || (cache[url] && intentos === 0)) {
      return;
    }

    const controlador = new AbortController();

    fetch(url, { signal: controlador.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con el servidor');
        return res.json();
      })
      .then((json) => {
        cache[url] = json; // Guardar en caché para futuras consultas
        setEstado({ urlActual: url, data: json, error: null });
      })
      .catch((err) => {
        // Ignorar la cancelación intencional al desmontar el componente
        if (err.name !== 'AbortError') {
          setEstado({ urlActual: url, data: null, error: err.message });
        }
      });

    // Cleanup function: se ejecuta al desmontar
    return () => controlador.abort();
  }, [url, intentos]);

  // Derivar los valores finales sin provocar doble renderizado
  const data = tieneCache ? cache[url] : estado.urlActual === url ? estado.data : null;
  const error = tieneCache ? null : estado.urlActual === url ? estado.error : null;
  const cargando = Boolean(url) && !tieneCache && estado.urlActual !== url;

  return { data, cargando, error, reintentar };
}
