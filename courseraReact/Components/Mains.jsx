import React, { useState } from 'react'
// import { createMachine } from 'xstate'
import './Mains.css'
import Child from './child.jsx'

export default function Mains(){

    const [date, setDate] =  useState(new Date() )
    const [word, setWord] = useState('Clock ')

    function handleClick (){

        setWord("The time is ");

    }

    useState

    return (
      <div className="mainHeader">
        <Child message =  {word + date.toLocaleTimeString()} />
        <button onClick={handleClick}>Click Me</button>
      </div>
    );


}





