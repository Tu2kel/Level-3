import React from 'react'
import WrapUp from "../Components/WrapUp/WrapUp.jsx";
// import Run from "../Components/Header/Run.jsx";
import "../Components/Mbody/Mbody.css";


export default function App() {

    // const {
    //   timeRemaining,
    //   isTimeRunning,
    //   handleChange,
    //   startClock,
    //   textBoxRef,
    //   wordCount,
    //   text   
      
    //   } = useWordGame(10)

  return (
    <>
      {/* TITLE  */}
      <WrapUp>
        {/* <div className="title">
          <h1>Speed Type Test</h1>
        </div> */}
      </WrapUp>

      {/*BODY  */}
      <WrapUp>
        <div className="toDarken">
          <div className="mainBody">
            <h1 className="title">How fast do you type?</h1>
            {/* <textarea ref={textBoxRef} className='screen' value={text} onChange={handleChange} disabled= {!isTimeRunning} />
            <h1 className="bottomText">Time Remaining: {timeRemaining}</h1>
            <button onClick={startClock} disabled= {isTimeRunning} > {wordCount >  0 ? "PLAY AGAIN": "START" } </button> */}
          </div>{" "}
        </div>
      </WrapUp>

      {/* SECTIONS */}
      <WrapUp>{/* <h3>Hello World</h3> */}</WrapUp>

      {/*  */}
      <WrapUp>{/* <h4>Hello World</h4> */}</WrapUp>
    </>
  );
}
