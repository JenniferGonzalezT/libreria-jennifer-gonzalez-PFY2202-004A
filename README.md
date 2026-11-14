# Ateneo Libros — Catálogo Literario 📚

## 📎 Descripción

Aplicación web SPA (Single Page Application) desarrollada con React y Vite para la Semana 4 de la asignatura **Desarrollo Frontend II (PFY2202)**. Permite explorar categorías literarias y consultar el catálogo de libros consumiendo una API REST simulada mediante **Mock Service Worker (MSW)**, incorporando control de estados de carga, manejo de errores con recuperación, caché en memoria y accesibilidad web.


## 🚀 Características Principales

- **Mock REST API con MSW:** Intercepción de peticiones HTTP (`GET /api/categorias`, `GET /api/libros?categoria=:id` con validación `404` para categorías inexistentes y simulación de errores `500`) con latencia controlada.

- **Custom Hook `useFetch` Optimizado:** Gestión centralizada de estados (`data`, `cargando`, `error`), manejo diferenciado de códigos HTTP (`404`, `500`), cancelación de peticiones mediante `AbortController`, reintentos manuales y **caché en memoria** para evitar consultas duplicadas.

- **Enrutamiento Dinámico y Lazy Loading:** Navegación sin recargas con **React Router** (`BrowserRouter`, `NavLink`, `useParams`), rutas parametrizadas (`/categoria/:id`), carga diferida con `React.lazy` + `Suspense` y manejo de rutas inexistentes (`404`).

- **Arquitectura Modular y Accesible:** Componentes reutilizables desacoplados (tarjetas y grillas con manejo de estados vacíos), HTML semántico y atributos ARIA (`role="status"`, `role="alert"`, `aria-hidden`) para tecnologías de asistencia.

- **Diseño Responsivo con Tailwind CSS:** Paleta personalizada de estética *Dark Academia* (`color-primario`, `color-secundario`, `color-claro`, `color-oscuro`) y clases utilitarias reutilizables con `@apply`.


## 🛠️ Tecnologías Utilizadas

- **Core:** React 19 (Hooks: `useState`, `useEffect`, `useParams`)

- **Build Tool:** Vite

- **Enrutamiento:** React Router

- **Mock API:** Mock Service Worker (`msw`)

- **Estilos:** Tailwind CSS v3


## 📂 Estructura del Proyecto
```text
libreria-jennifer-gonzalez-PFY2202-004A/
├── public/
│   └── mockServiceWorker.js      # Worker generado por MSW para interceptar red
├── src/
│   ├── components/
│   │   ├── CategoriaCard.jsx     # Tarjeta reutilizable de categoría literaria
│   │   ├── CategoriaGrid.jsx     # Grilla responsiva de categorías con estado vacío
│   │   ├── Footer.jsx            # Pie de página institucional
│   │   ├── LibroCard.jsx         # Tarjeta reutilizable de libro con formato CLP
│   │   ├── LibroGrid.jsx         # Grilla responsiva de libros con estado vacío
│   │   ├── MensajeError.jsx      # Alerta accesible (role="alert") con reintento
│   │   ├── Navbar.jsx            # Barra de navegación con estados activos (NavLink)
│   │   └── Spinner.jsx           # Indicador accesible de carga asíncrona
│   ├── hooks/
│   │   └── useFetch.js           # Hook de fetching con caché y AbortController
│   ├── mocks/
│   │   ├── browser.js            # Configuración del worker en el navegador
│   │   └── handlers.js           # Endpoints REST simulados y base de datos en memoria
│   ├── pages/
│   │   ├── Catalogo.jsx          # Vista del catálogo completo de libros
│   │   ├── CategoriaLibros.jsx   # Vista filtrada por parámetro :id de categoría
│   │   ├── Home.jsx              # Vista principal de categorías y prueba de error 500
│   │   └── NotFound.jsx          # Vista comodín para rutas no encontradas (404)
│   ├── routes/
│   │   └── routes.config.jsx     # Configuración centralizada de rutas con Lazy Loading
│   ├── App.jsx                   # Contenedor principal, Router y Suspense
│   ├── index.css                 # Directivas de Tailwind CSS y clases @apply
│   └── main.jsx                  # Punto de entrada e inicialización de MSW
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```


# ⚙️ Instrucciones de Instalación y Ejecución

Para correr este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:
```bash
git clone https://github.com/JenniferGonzalezT/libreria-jennifer-gonzalez-PFY2202-004A.git
```

2. Navega hasta el directorio del proyecto en tu terminal:
```bash
cd libreria-jennifer-gonzalez-PFY2202-004A
```

3. Instala las dependencias necesarias:
```bash
npm install
```

4. Inicia el servidor local de desarrollo:
```bash
npm run dev
```

5. Abrir en el navegador el enlace indicado en la terminal (por defecto http://localhost:5173).


## 🔗 Enlaces del Proyecto

* **Repositorio en GitHub:** https://github.com/JenniferGonzalezT/libreria-jennifer-gonzalez-PFY2202-004A.git

* **Sitio Web Publicado (GitHub Pages):** https://jennifergonzalezt.github.io/libreria-jennifer-gonzalez-PFY2202-004A/
