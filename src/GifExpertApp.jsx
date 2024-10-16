//Después del aversión 17 ya no es necesario importarlo por todos lados. 
//import React from 'react'

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
    
    //State esta basado en suposición
    //No se puede poner una condición y poner un hook de react dentro. !!! pierde relación. NO SE DEBE CONDICIONAR EL HOOKS
    const [categories, setCategories] = useState([ 'One Puch', 'DBZ' ]); //Vacio genera undefined

    
    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory) ) return;
        //Agregar nuevo elemento a las catgegorias. 
        //Toystory
        // const nuevaCategoria = 'Toy Story';
        // const updatedCategories = categories.push(nuevaCategoria);
        //No se usará el push (muta un objeto y React no muta el estado.)
        //Creamos un nuevo estado. 
        //console.log(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...cat, nuevaCategoria]);
    }

  return (
    <>

        <h1>GifExpertApp</h1>
    

        <AddCategory 
        // setCategories={ setCategories } // No es incorrecto pero es más complicado entender
            //On es cuando se esta emitiendo algo (evento)
            onNewCategory={ (value) => onAddCategory (value) }

        /> 
    
        { //Hay que agregar un aproperty key
        categories.map( (category) => (
                <GifGrid 
                key={ category } 
                category={ category } />
            )) 
        }
           
    </>
  )
}
