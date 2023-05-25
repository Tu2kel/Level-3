import React from "react"
import data from "./data";
import Card from "./card";


// import Sound from 'react-sound'
// import Zepp from './Hello_Zepp.mp3'

export default function Main(){

  const cards = data.map((item) => {

    return (
      <Card

      key={item.id}
      item={item}
      //or Spread {...item} if done this way REMOVE THE .ITEM FROM CARD.JS

        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // star={item.star}
        // openSpots={item.openSpots}
      />
    );

  });

    return (
      <div className="alignMain">
        <div className="topImages"></div>

        <h1 className="middle">Online Experiences</h1>

        <h2 className="h2">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h2>

        <section 
        className="cards-list">{cards}</section>

      </div>
    );


} 