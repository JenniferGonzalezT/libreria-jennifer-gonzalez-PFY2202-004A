import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import NotFound from './pages/NotFound';
import { rutasApp } from './routes/routes.config';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col bg-color-claro text-color-oscuro">
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<Spinner mensaje="Cargando vista..." />}>
            <Routes>
              {rutasApp.map((ruta) => (
                <Route key={ruta.path} path={ruta.path} element={ruta.element} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
