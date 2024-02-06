import { useState, React, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export async function loader({ params }) {
    const id = params.id;
    return { id };
}
const Pelicula = () => {

    const [pelicula, setPelicula] = useState([]);
    const { id } = useLoaderData();
    const urlPeliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=4c8fdba107c13a1294066817d75f913b`;

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const respuesta = await fetch(urlPeliculas);
                const data = await respuesta.json();
                setPelicula(data);
            } catch (error) {
                console.error("Error al obtener la película:", error);
            }
        };

        fetchPelicula();
    }, []);

    return (
        <div>
            <div className="m-16 text-white">
                <div className="flex flex-row w-full">
                    <div className="w-2/3">
                        <div>
                            <p className="text-4xl ">{pelicula.title}</p>
                        </div>
                    </div>
                    <div className="flex flex-col fondo w-1/2">
                        <div className="flex flex-row gap-4 font-bold colorsito ">
                            <p className="w-2/6 text-center">PUNTUACIÓN IMDB</p>
                            <p className="w-2/6 text-center">Nº DE VOTOS</p>
                            <p className="w-2/6 text-center">POPULARIDAD</p>
                        </div>
                        <div className="flex row text-lg">
                            <p className="flex flex-row w-2/6 justify-center text-2xl">
                                <FaStar className="text-yellow-500 text-4xl" />
                                {typeof pelicula.vote_average === 'number' ? pelicula.vote_average.toFixed(2) : 'N/A'}/10
                            </p>
                            <p className="w-2/6 text-center text-2xl">{pelicula.vote_count}</p>
                            <p className="w-2/6 text-center text-2xl">{pelicula.popularity}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="mr-4"><img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} className="rounded-md" id={pelicula.id} /></div>
                    <div className="flex flex-col gap-2 w-2/3">
                        <p className="underline text-xl">Sinopsis:</p>
                        <p className="w-3/4">{pelicula.overview}</p>
                        <p className="underline text-xl pt-5">Fecha de Salida:</p>
                        <p>{pelicula.release_date}</p>
                        <p className="underline text-xl pt-5">Edad Mínima Recomendada:</p>
                        <p>{pelicula.adult ? (<span className="text-red-500 font-bold">+18</span>) : (<span className="text-green-500 font-bold">-18</span>)}</p>
                        <p className="underline text-xl pt-5">Duración:</p>
                        <p>{pelicula.runtime} min.</p>
                        <p className="underline text-xl pt-5">Géneros:</p>
                        <div className="flex flex-row gap-4">
                            {pelicula.genres && pelicula.genres.map((genre) => (
                                <p className="genero cursor-pointer rounded-3xl p-2">{genre.name}</p>
                            ))}
                        </div>
                        <div className="my-3"><Link to={`/comprar/${pelicula.title}`}><button className="bn30">Reservar Entrada</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pelicula