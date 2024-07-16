import { retornarError } from './gestionarErrores';

export const buscarMusica = async setVideos => {
    try {
        const elemento = buscarElemento();
        if (!elemento) return;
        const query = elemento.value;
        const videos = await buscarVideos(query);
        setVideos(videos);
    } catch (error) {
        retornarError();
    }
};
const buscarElemento = () => {
    const elemento = document.getElementById('buscar-musica');
    if (!elemento) return;
    return elemento;
};
const buscarVideos = async query => {
    const API_KEY = 'AIzaSyAO4U4TraT2sdGe-fL_xBGbecgdaB0sS2o';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
};
