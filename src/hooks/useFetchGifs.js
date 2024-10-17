import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading
    }
}


//return (<div></div>) //Esto es un JSX Functional component

//return {images: [], isLoading: false} //Esto es un hook

//Un hooks es una función que regresa algo