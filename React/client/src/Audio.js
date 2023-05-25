import React from 'react';

// export default function Audio() {

//   return (
    
//     <audio id="audio"  src="Hello_Zepp.mp3"></audio>


//   );
   

   
//   };

  // render() {
  //   return (
  //     <div>
  //       <audio className="audio-element">
  //         <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
  //       </audio>
  //     </div>
  //   );
  // }



  export default class {
    Audio() {
      const audioEl = document.getElementById("root");
      audioEl.play();
    }

    render() {
      return (
        <div>
          <audio className="audio">
            <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
          </audio>
        </div>
      );
    }
  }