import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
      <div>
        <a href="">
          <ul className='bootstrap'>
            <li className="start">Start Booststrap</li>
          </ul>
          <ul className="menu">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SAMPLE POST</li>
            <li>CONTACT</li>
          </ul>
        </a>
      </div>
    </>
  );
}
