import React from 'react'
import './cssModal.css'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const modalCompra = ({
    show, cerrar, children, boton
}) => {
    return (
        <>
            {show ?
                <div className="contenedorModal bg-white" onClick={() => cerrar()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <header className="headerModal">
                            <h2 className="tituloModal text-2xl font-bold my-2">Realizar Compra</h2>
                            <IoMdClose className="cerrar text-4xl cursor-pointer pb-2" onClick={() => cerrar()}>Cerrar</IoMdClose>
                        </header>
                        <main className="contenidoModal">
                            {children}
                        </main>
                        <footer className="footerModal">
                            <button className="bn32" onClick={() => cerrar()}>Cancelar</button>
                            {boton}
                        </footer>
                    </div>
                </div>
                : null}
        </>
    )

}

export default modalCompra