import { retornarError } from './gestionarErrores';

export const pedirMusica = async item => {
    try {
        const response = await hacerPedido(item);
        console.log(response);
    } catch (error) {
        retornarError();
    }
};
const hacerPedido = async item => {
    const entity = 'Usuario';
    const schema = 'Tema';
    const url = `http://localhost:82/api/melodi/v1/${entity}/${schema}/pedir`;
    const credentials = btoa('admin:admin');
    const requestBody = {
        video: item,
    };
    const options = {
        method: 'POST',
        headers: {
            'request-decrypt-response': true,
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify(requestBody),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
