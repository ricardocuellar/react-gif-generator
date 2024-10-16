import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    //Cada componente tiene su propio estado. 
    const [inputValue, setinputValue] = useState('One Punch');
    //En react los attributes son properties

    const onInputChanged = ({target}) => {
        setinputValue( target.value );

    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //Accediendo por callback accedemos a su getValue
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

  return (
    // <form action="" onSubmit={ (event) => onSubmit(event) }> 
    <form action="" onSubmit={ onSubmit }> 

        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            // onChange={ (event) => onInputChanged(event) }
            onChange={ onInputChanged }
        />
    </form>
  );
}
