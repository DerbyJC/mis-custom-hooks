import { useState } from "react";

export const useCounter = ( initialState = 1 ) => {

    const [counter, setCounter] = useState(initialState)

    const sumar = () => {
        setCounter( counter + 1 );
    }

    const restar = () =>  {
        setCounter( counter - 1 );
    }
    
    const resetear = () =>  {
        setCounter( initialState );
    }
    return  {
        counter,
        sumar,
        restar,
        resetear
    };
}
