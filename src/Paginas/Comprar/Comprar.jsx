import { React, useState, useEffect } from 'react'
import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineChair } from "react-icons/md";
import { BiAccessibility } from "react-icons/bi";
import Modal from '../../Componentes/modalCompra';

export async function loader({ params }) {
    const nombrePeli = params.nombre;
    return { nombrePeli };
}

const Comprar = () => {
    const { nombrePeli } = useLoaderData();
    const [modal, setModal] = useState(false)

    const Toggle = () => {
        setAsientos(asientosSeleccionados)
        setModal(!modal)
    }

    let asientosSeleccionados = []
    const [asientos, setAsientos] = useState([])

    const cambiarColor = (e) => {
        if (e.target.style.color == 'gray') {
            asientosSeleccionados.push(e.currentTarget.id)
            e.currentTarget.style.color = 'blue';
        } else {
            asientosSeleccionados.splice(asientosSeleccionados.indexOf(e.currentTarget.id), 1);
            e.currentTarget.style.color = 'gray';
        }
    };

    return (
        <div className='w-full flex items-center flex-col'>
            <p className='text-white text-3xl font-bold m-10'>Comprar entrada para <span className='text-red-500'>{nombrePeli}</span></p>
            <p className='text-white'>Selección de butacas: Selecciona las butacas que desea reservar</p>
            <hr />
            <div className='flex flex-row text-white gap-4 mt-2'>
                <p className='flex flex-row gap-1'><MdOutlineChair className='text-3xl' style={{ color: 'gray' }} /> Butaca sin reservar</p>
                <p className='flex flex-row gap-1'><MdOutlineChair className='text-3xl' style={{ color: 'blue' }} /> Butaca a reservar</p>
                <p className='flex flex-row gap-1'><MdOutlineChair className='text-3xl' style={{ color: 'red' }} /> Butaca reservada</p>
                <p className='flex flex-row gap-1'><BiAccessibility className='text-3xl' style={{ color: 'white' }} /> Asiento Minusvalido</p>
            </div>
            <div className='bg-white flex items-center flex-col p-5 w-3/5 rounded m-4'>
                <div className='w-full'>
                    <div id='Pantalla' className='bg-gray-600 mx-5 text-white font-bold flex justify-center rounded-sm'>
                        <p>PANTALLA</p>
                    </div>
                    <div id='Asientos' className='my-3 gap-2 flex flex-col '>
                        <div className='flex flex-row justify-around'>
                            <BiAccessibility className='text-4xl' id='f1 a1' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f1 a2' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f1 a3' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f1 a4' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f1 a5' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                        </div>
                        <div className='flex flex-row justify-around'>
                            <MdOutlineChair className='text-4xl' id='f2 a1' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f2 a2' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f2 a3' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' style={{ color: 'red' }} />
                            <MdOutlineChair className='text-4xl' style={{ color: 'red' }} />

                        </div>
                        <div className='flex flex-row justify-around'>
                            <MdOutlineChair className='text-4xl' id='f3 a1' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f3 a2' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' style={{ color: 'red' }} />
                            <MdOutlineChair className='text-4xl' id='f3 a4' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                            <MdOutlineChair className='text-4xl' id='f3 a5' style={{ color: 'gray', cursor: 'pointer' }} onClick={cambiarColor} />
                        </div>
                    </div>
                </div>
                <button className="bn632-hover bn28" onClick={() => Toggle()}>Comprar</button>
            </div>
            <Modal show={modal} cerrar={Toggle} boton={<Link to={`/compraRealizada/${nombrePeli}`}><button className="bn32 mr-4">Comprar</button></Link>}>
                <p className='text-lg underline font-bold'>Asientos:</p>
                {
                    asientos.map((element, index) => (
                        <div key={index}>
                            {element}
                        </div>
                    ))
                }
            </Modal>
        </div>
    )
}

export default Comprar