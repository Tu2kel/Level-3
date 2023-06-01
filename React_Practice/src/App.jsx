import { useState } from 'react'
import './App.css'

function App() {
  const [inputField, setInputField] = useState({
    fName:'' ,
  });

  const [names, setNames] = useState([]);


  function handleChange (e){
    
    const {name, value} = e.target
    
    setInputField( prevState => { 
      return {
        ...prevState, //PULLS IN ALL PREV DATA
        [name]: value, //  CHOOSE WHAT DATA PROPERTY TO UPDATE FROM INPUT SECTION / LINE 43 name='fName'
      };
    });
    console.log(value);
  }


  
  function handleSubmit(e) {
    e.preventDefault();

    setNames((prevState) => [...prevState, inputField.fName]);
    setInputField({ name: "" }); // Reset the input field to an empty string


  }
  
  return (
    <div>
      <h1>Hello Kelz</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Add Text Here"
          name="fName"
          type="text"
          value={inputField.fName || ""}
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>

      <h2> Names </h2>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default App
