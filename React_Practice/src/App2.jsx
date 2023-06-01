import React, { useState } from 'react'
import "./App.css";

export default function App2() {

    const [names, setNames] = useState({
        lName:''
    })

    const [newNames, setNewNames] = useState([])


    function changedClicked(e) {
        
        const {name, value} = e.target
        
        setNames(prevNames => {
            return {
                ...prevNames,
                [name]: value,
            };
        });
        console.log("Update", value);

    }

    function addClicked(e){
        e.preventDefault()
        console.log(e, 'next list');


        setNewNames((prevNewNames) => [
           ...prevNewNames, names.lName]);
           setNames({name:''})
    };
       

    // console.log(names);

  return (
    <div>
      <h1>Next Practice set</h1>
      <form action="" onSubmit={addClicked}>
        <input
          placeholder="Last Name"
          type="text"
          name="lName"
          value={names.lName}
          onChange={changedClicked}
        />
        <button>Add</button>
        <h2>Names Here</h2>
      </form>
        {newNames.map((name, index) => (<p key={index}>{name}</p>))}
    </div>
  );

    

}
