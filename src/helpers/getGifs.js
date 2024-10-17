//Es terminación JS porque es puro código JS
//No tan buena práctica (pésima práctica)
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FIUAdm9mFUy6unkIw7KJhCcDqSQCBKKV&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url
    }));

    return gifs;
    
}
