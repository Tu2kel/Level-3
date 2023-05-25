// import Card from "../card";
// import MainPic from "../images/katie.png";
// import StarPic from "../images/Star.png";
// import MiddlePic from "../images/middlePic.png";
// import LastPic from "../images/bike.png";
// import Data from "../data"
// console.log(Data);
import React from "react";

export default function Setup() {

    const audio = (
      <audio id="audio" src="./Hello_Zepp.mp3"  ></audio>
    );
  


  return (

    <div> {audio } </div>
  )

}
// export default function Setup() {

    // const dataItems =  dataItems.map(card => {

    //    return  <Card info= {Data.id} />
    // })


//   return (

    // <div> {dataItems} </div>




    // <div className="container">
    //   <Card
    //     img={MainPic}
    //     img_star={StarPic}
    //     rating={'5.0'}
    //     num={"(6)"}
    //     country="USA"
    //     p={<p>Life Lessons with Katied Zaferes</p>}
    //     cost={136}
    //   />
    //   <Card
    //     img={MiddlePic}
    //     img_star={StarPic}
    //     rating={5.0}
    //     num={"(30)"}
    //     p={<p>Learn wedding photography</p>}
    //     country="USA"
    //     cost={125}
    //   />
    //   <Card
    //     img={LastPic}
    //     img_star={StarPic}
    //     rating={4.8}
    //     num={"(2)"}
    //     country="USA"
    //     p={<p>Group Mountain Biking</p>}
    //     cost={50}
    //   />
    // </div>
//   );
// }
