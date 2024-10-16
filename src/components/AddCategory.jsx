import { useState } from "react";

export const AddCategory = () => {

    //Cada componente tiene su propio estado. 
    const [inputValue, setinputValue] = useState('One Punch');
    //En react los attributes son properties

    const onInputChanged = ({target}) => {
        setinputValue( target.value );

    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(inputValue);
    }

  return (
    <form action="" onSubmit={ (event) => onSubmit(event) }> 
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
