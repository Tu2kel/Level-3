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

import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
     const Show = false
     const Hide = true
    
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}> {isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
} 

import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState([])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    
   
    
    return (
        <div>
        
         { 
           messages.length === 0  ? 
           <h1>"You're all caught up!"</h1> 
           : 
           <h1>"You have {messages.length} unread {messages.length > 1  ? 'messages' : 'message'}" </h1>
      
     
        
        }
            
        </div>
    )
}