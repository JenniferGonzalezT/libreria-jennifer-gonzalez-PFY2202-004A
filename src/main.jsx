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
  // MSW solo se activará en entorno de desarrollo local
  if (!import.meta.env.DEV) {
    return;
  }
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
