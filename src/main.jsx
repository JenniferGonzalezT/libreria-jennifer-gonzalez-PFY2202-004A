import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});

async function enableMocking() {
  /*
  // En un entorno productivo real con backend propio, MSW se restringe solo a desarrollo:
  if (!import.meta.env.DEV) {
    return;
  }
  // Se mantiene comentado para que el build estático desplegado en GitHub Pages
  // (modo producción) active el Service Worker y simule las respuestas de la API REST.
  */

  const { worker } = await import('./mocks/browser');
  
  return worker.start({ 
    // Indicar a MSW la ruta exacta del worker respetando el base de Vite
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`
    },
    // onUnhandledRequest: 'bypass' evita que la consola se llene de advertencias
    // por peticiones a archivos estáticos o fuentes que no estamos interceptando
    onUnhandledRequest: 'bypass' 
  });
}
