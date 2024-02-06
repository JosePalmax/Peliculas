import React, { useState } from 'react'
import { CiBarcode } from "react-icons/ci";

import { Link, useLoaderData } from "react-router-dom";
import entradaCine from '../../imgs/entradaCine.jpg'
import './botonVolver.css'

export async function loader({ params }) {
  const nombrePeli = params.nombre;
  return { nombrePeli };
}

const CompraRealizada = () => {
  const { nombrePeli } = useLoaderData();
  const fecha = new Date();
  const opciones = { day: 'numeric', month: 'long', year: 'numeric' };
  const nuevaFecha = new Intl.DateTimeFormat('es-ES', opciones).format(fecha);
  return (
    <div className='w-full flex flex-col'>
      <p className='text-center text-white text-4xl font-bold my-4'>DISFRUTE DE SU PELICULA</p>
      <div className='w-full flex justify-center text-black my-14'>
        <div className='lg:w-11/12 w-11/12 flex flex-col bordePresentacion rounded-3xl gap-4 p-6 bg-white'>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-row justify-center gap-4'>
              <p className='text-4xl font-bold'>Su Entrada</p>
              <CiBarcode className='text-5xl'/>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='w-1/3 h-auto'>
                <img src={entradaCine} alt="" className='rounded-lg' />
              </div>
              <div className='flex flex-col w-2/3'>
                <div className='w-3/4 flex flex-col gap-2'>
                  <p className="underline text-2xl">Cine:</p>
                  <p>Cine JoseFlix,  C. Poeta Juan Ramón Jiménez, 25, Nte. Sierra, 14012 Córdoba</p>
                  <p className="underline text-2xl">Película:</p>
                  <p>{nombrePeli}</p>
                  <p className="underline text-2xl">Hora:</p>
                  <p>{nuevaFecha} (Hoy), 20:00</p>
                  <p className="underline text-2xl">Sala:</p>
                  <p>Sala 2</p>
                </div>
                <div className='flex justify-end m-5'>
                  <a href="/" class="bn5">Volver</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='flex justify-end m-10'>

      </div>
    </div>
  )
}

export default CompraRealizada