//Después del aversión 17 ya no es necesario importarlo por todos lados. 
//import React from 'react'

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
    
    //State esta basado en suposición
    //No se puede poner una condición y poner un hook de react dentro. !!! pierde relación. NO SE DEBE CONDICIONAR EL HOOKS
    const [categories, setCategories] = useState([ 'One Puch', 'DBZ' ]); //Vacio genera undefined

    
    const onAddCategory = () =>{
        //Agregar nuevo elemento a las catgegorias. 
        //Toystory
        const nuevaCategoria = 'Toy Story';
        // const updatedCategories = categories.push(nuevaCategoria);
        //No se usará el push (muta un objeto y React no muta el estado.)
        //Creamos un nuevo estado. 
        setCategories([nuevaCategoria, ...categories]);
        // setCategories( cat => [...cat, nuevaCategoria]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
    
        {/* Input */}
        <AddCategory />
    
        {/* Listado de Items Gifs */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { //Hay que agregar un aproperty key
            categories.map( (category) => {
                return <li key={ category }>{ category }</li>
            }) 
            }
            {/* <li></li> */}
        </ol>
            {/* GifItem */}
    </>
  )
}
