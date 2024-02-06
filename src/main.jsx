import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import './index.css'
import './Paginas/Home/botonReservar.css'
import './Paginas/Comprar/botonComprar.css'
import Home from './Paginas/Home/Home.jsx';
import DetallesPelicula from './Paginas/Pelicula/DetallesPelicula.jsx';
import Peliculas from './Paginas/Peliculas/Peliculas.jsx';
import Comprar from './Paginas/Comprar/Comprar.jsx';
import { loader as nombrePelicula } from './Paginas/Comprar/Comprar.jsx';
import { loader as pelisInfo } from './Paginas/Pelicula/DetallesPelicula.jsx';
import { loader as nomPelicula } from './Paginas/Realizada/CompraRealizada.jsx';
import Header from './Componentes/Header.jsx';
import Footer from "./Componentes/Footer.jsx";
import ErrorPage from './Paginas/Error/ErrorPage.jsx';
import CompraRealizada from './Paginas/Realizada/CompraRealizada.jsx';

function AppLayout() {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/peliculas",
      element: <Peliculas />,
    },
    {
      path: "/compraRealizada/:nombre",
      element: <CompraRealizada />,
      loader: nomPelicula
    },
    {
      path: "/comprar/:nombre",
      element: <Comprar />,
      loader: nombrePelicula
    },
    {
      path: "/pelicula/:id",
      element: <DetallesPelicula/>,
      loader: pelisInfo
    }]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
