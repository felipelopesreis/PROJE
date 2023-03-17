import React from 'react'
import './style.css'
export function StateExample(){
    let name ='Felipe'

    function handleInput(event: React.ChangeEvent<HTMLInputElement>){
        name = event.target.value
        console.log("Disparou evento")
    }
    return(
        <>
            <input onInput={handleInput} className='inputName' type="text"/>
            <h1>{name}</h1>
        </>
    )
}