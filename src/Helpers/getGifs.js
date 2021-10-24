export const  getFifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=5&q=${encodeURI(category) }&api_key=1D5kf85DPY456bhooYQleDSgookTalqx`;
    const response = await fetch(url);

    const { data } = await response.json();
    // console.log(data)
    const gifs = data.map((image) => {
        return {
            id: image.id,
            tittle: image.title,
            url: image.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
     return gifs;
}


