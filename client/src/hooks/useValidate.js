import { useReducer, useState } from "react";

const initialState = {
    value: undefined,
    isTouched: false
}

const reducer = (inputState, action) => {
    if(action.type === 'ENTER'){
        return{value: action.payload.value, isTouched: inputState.isTouched}
    }

    if(action.type === 'BLUR'){
        return{value: inputState.value, isTouched: true}
    }
}

const useValidate = (validation) => {
    const [inputState, dispatch] = useReducer(reducer, initialState)
    const hasError = !validation(inputState.value)
    console.log(hasError)

    const onChangeHandler = (e) => {
        dispatch({type: 'ENTER', payload: {value: e.target.value}})
    }

    const onBlurHandler = () => {
        dispatch({type: 'BLUR', payload: {isTouched: true}})
    }

    return{
        value: inputState.value,
        isTouched: inputState.isTouched,
        onChangeHandler,
        onBlurHandler,
        hasError
    }
}

export default useValidate