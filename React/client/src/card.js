import React from "react";



export default function Card(props) {
    console.log(props.item.openSpots);

    let badgeText 
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    
    
    } else if (props.item.location === "online") {

        badgeText = "ONLINE"
    }

     



  return (
    <div className="card">
      {/* {props.openSpots === 0 && <div className="card--badge">{badgeText}</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className="card--image" />

      <div className="card--stats">
        <img src={props.item.star} className="card--star" />
        <span> {props.item.stats.rating}</span>
        <span className="gray"> ({props.item.stats.reviewCount}) • </span>
        <span className="gray"> {props.item.location}</span>
      </div>

      <p> {props.item.title} </p>

      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );

}