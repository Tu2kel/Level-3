import React, { useState } from "react"

export default function NewApp(){ 

    const [count, setCount] = useState("")
    console.log(count)

    setCount(prevCount =>  ({
        ...prevCount, 


    }))


    return (

        <input type="text" />,
        <h1></h1>,
        <button></button>
    )


}