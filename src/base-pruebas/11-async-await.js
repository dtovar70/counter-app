

export const getImagen = async() => {

    try {

        const apiKey = 'nygt4WnDamxO39i6RiV5wdKszCuNYYgR';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No se encontró la imágen';
    }
    
    
    
}

 getImagen();



