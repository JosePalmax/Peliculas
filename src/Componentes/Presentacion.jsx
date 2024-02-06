import React from 'react'
import { Link } from 'react-router-dom'
import salaCine from '../imgs/salaCine.jpg'
import hallCine from '../imgs/hallCine.jpg'
import entradaCine from '../imgs/entradaCine.jpg'


const Presentacion = () => {
    return (
        <div className='w-full flex justify-center text-black my-10'>
            <div className='lg:w-3/4 w-3/4 flex flex-col bordePresentacion rounded-3xl gap-4 p-6 bg-white'>
                <p className='text-center font-bold text-2xl'>EL CINE DE TU CIUDAD</p>
                <p className='text-center'>
                    Descubre la excelencia cinematográfica en nuestra sala:
                    comodidad inigualable y calidad visual excepcional.
                    Disfruta de películas como nunca antes.
                    ¡Bienvenido a la experiencia cinematográfica definitiva!
                </p>
                <div className='w-full flex flex-row gap-4'>
                    <div className='lg:w-1/2 w-1/2'><img src={salaCine} alt="Sala de Cine" className='rounded-lg' /></div>
                    <div className="w-1/2 flex justify-center items-center flex-col">
                        <p className='font-bold text-2xl h-1/6'>NUESTRAS SALAS</p>
                        <p className='h-5/6'>
                            Descubre la excelencia cinematográfica en nuestra sala:
                            comodidad inigualable y calidad visual excepcional.
                            Disfruta de películas como nunca antes.
                            ¡Bienvenido a la experiencia cinematográfica definitiva!
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-row gap-4'>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <p className='font-bold text-2xl h-1/6'>NUESTRAS INSTALACIONES</p>
                        <p className='h-5/6'>Explora nuestras instalaciones de vanguardia,
                            diseñadas para tu disfrute máximo. Desde asientos cómodos hasta tecnología de punta,
                            cada detalle está cuidadosamente pensado para ofrecerte una experiencia única.
                            Bienvenido a un espacio donde el confort se encuentra con la excelencia.</p>
                    </div>
                    <div className='lg:w-1/2 w-1/2'><img src={hallCine} alt="Sala de Cine" className='rounded-lg' /></div>
                </div>
                <div className='w-full flex flex-row gap-4'>
                    <div className='lg:w-1/2 w-1/2'><img src={entradaCine} alt="Sala de Cine" className='rounded-lg' /></div>
                    <div className="w-1/2 flex justify-center items-center flex-col">
                        <p className='font-bold text-2xl h-1/6'>NUESTRA COMPRA</p>
                        <p className='h-5/6'>Compra tus entradas con rapidez y comodidad,
                            solo un clic te separa de una experiencia cinematográfica inigualable.
                            Nuestros productos de alta calidad complementan tu visita,
                            desde deliciosas opciones de snacks hasta bebidas refrescantes.
                            Relájate y disfruta, porque en nuestra sala de cine, la comodidad es la protagonista.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentacion