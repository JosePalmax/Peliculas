const urlIMDB = 'https://api.themoviedb.org/3/search/movie?api_key=4c8fdba107c13a1294066817d75f913b';

export const buscarPorNombre = (busqueda) => {
    return fetch(`${urlIMDB}&query=${busqueda}`);
}