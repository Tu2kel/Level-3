import './airBnb.css';
import NavBar from "./navBar";
import Main from "./airBnb_main";
import Setup from "./components/setup"




function AirBnb() {



  return (
    <div className="entirePage">
      <NavBar />
      <Main />      
      <Setup />
    </div>
  );
}

export default AirBnb;

