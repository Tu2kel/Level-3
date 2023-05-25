import logo from "./logo.svg";
import "./App.css";

ReactDom.render(<h2>Hello Girl</h2>, document.getElementById("root"));

// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));



//PRACTICE BELOW PASCAL PASCAL PASCAL



import React from "react";
import ReactDom from "react-dom";

function Learning (){
 return  (<div>
    <ol>
      <li>I'm learining the correct way</li>
      <li>It's just like writing in HTML</li>
      <li>Let's Gooo!!!</li>
    </ol>
  </div>)

};

ReactDom.render(<Learning />, document.getElementById("root")); // ONLY WHEN IT IS SET UP AS A FUNCTION

/*ReactDom.render(Learning, document.getElementById("root")); ----> IF SAVED AS A VARIABLE */



import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header";


function Page() {
    return (
    <div> 
        <header>My React Proj Kel</header>
        <h1>This Page will look like Crap right now but, we're learning</h1>
             <nav> 
             <img src= "./react-logo.png" width = "300px" />  
                <ol>
                    <li>It's a popular library, so I'll be 
                    able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                </ol>
         <footer> <small> "© 2023 Kelley development. All rights reserved."</small> </footer>     
                
            </nav>   
            
    </div>
    
   
    
    
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))


function Header() {
  return (
    <header className="allNav">
      <nav>
        <img src="./react-logo.png" width="40px" className="reactPic" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

/* BELOW IN IT'S OWN JS FILE*/

import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

/*
OR 

export default <----- IS PLACED BEFORE THE FUNCTION
*/





import React from "react"

export default function Navbar() {
    return <h1>navbar component</h1>
}



