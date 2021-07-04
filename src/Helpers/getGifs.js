

export const getGifs = async (category) => {

    // llamo a la api creada desde postman
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Eju47NEUUslPsWNNzxLNZ3U3jrxEsh79`;
    // capturo la respuesta de la llamada
    const resp = await fetch(url);
    // me devuelve la llamda de la api en formato json
    const { data } = await resp.json()
    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }

    })
    return gift
}
