// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//React, Terceros, Codigo


export const GifGrid = ({ category }) => {  

    //en lugar de arreglo es un objeto, useNAMEHOOK
    const { images, isLoading } = useFetchGifs( category );



    return (
    <>
        <h3>{ category }</h3>
        
        {/* {
            isLoading ? (<h2>Cargando...</h2>) : null
        } */}

        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {/* {images.map(({id, title})=> (
                <GifItem key={id} />
            ))} */}

            {images.map((image)=> (
                <GifItem 
                    key={image.id} 
                    {...image}
                />
            ))}
            
        </div>
    </>
  )
}
