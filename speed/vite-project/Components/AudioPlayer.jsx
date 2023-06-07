import React, { useEffect, useRef } from "react";
import ReignsAudio from "./Reigns.mp3";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3 ; // Set the volume to 0.3 (30%)
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.code === "Space" && !isInputFocused()) {
      event.preventDefault(); // Prevent the space bar from scrolling the page
      toggleAudio();
    }
  };

  const isInputFocused = () => {
    const activeElement = document.activeElement;
    return activeElement && activeElement.tagName === "INPUT";
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <h2>Audio Player</h2>
      <audio ref={audioRef} src={ReignsAudio} autoPlay loop controls />
    </div>
  );
}




// import React, { useEffect, useRef } from "react";
// import ReignsAudio from "./Reigns.mp3";

// export default function AudioPlayer() {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = 0.3; // Set the volume to 0.5 (50%)
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Audio Player</h2>
//       <audio ref={audioRef} src={ReignsAudio} loop controls />
//     </div>
//   );
// }

// import React from 'react'
// import ReignsAudio from "./Reigns.mp3";
// export default function AudioPlayer() {

    
//   return (
//     <div>
//       <h2>Audio Player</h2>
//       <audio
//         src={ReignsAudio}
//         loop
//         autoPlay
//         volume={0.2}
//         controls
//         type="audio/mpeg"
//       ></audio>
//     </div>
//   );
// }
