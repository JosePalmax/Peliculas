const urlIMDB = 'https://api.themoviedb.org/3/movie/popular?api_key=4c8fdba107c13a1294066817d75f913b';

export const buscarPopulares = () => {
    return fetch(urlIMDB);
}