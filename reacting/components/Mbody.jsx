import React, { useState } from 'react'
import '../src/myIndex.css'

export default function Mbody() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://tinyurl.com/2kchrh2h",
  });

  /*ALLMEMES state stores an array of all available memes 
  fetched from an API.

  The MEMELIST state stores an array of memes submitted by the user.
  */

  const [allMemes, setAllMemes] = useState([]);
  const [memeList, setMemeList] = useState([]);
  const [counter, setCounter] = useState(1);

  React.useEffect(function () {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    // getMemeImage() generates a random meme image and updates the randomImage state
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    // Updates the meme state based on the input changes
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleClick(e) {
    // Handles the submit button click event and adds a new meme to the memeList state
    e.preventDefault();
    const newMeme = {
      id: counter, // Increment the counter and use its value
      topText: meme.topText,
      bottomText: meme.bottomText,
      randomImage: meme.randomImage,
    };

    setMemeList((prevList) => [...prevList, newMeme]);
    setCounter((prevCounter) => prevCounter + 1); // Increment the counter
  }

  function deleted(id) {
    // Handles the deletion of a meme from the memeList state based on its ID
    setMemeList((prevList) => prevList.filter((meme) => meme.id !== id));
  }

  return (
    <div className="innerContainer">
      <div className="form">
        <input
          type="text"
          placeholder="top of pic"
          className="inputLeft"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="bottom of pic"
          className="inputRight"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <br />
        <br />
        <button onClick={getMemeImage} className="meme-btn">
          Get a new meme image 🖼️
        </button>

        <button className="submit-btn" type="submit" onClick={handleClick}>
          Submit
        </button>
      </div>

      <div className="imagery">
        <img className="memed" src={meme.randomImage} alt="Meme" />
        <h2 className="meme--text_top"> {meme.topText} </h2>
        <h2 className="meme--text_bottom">{meme.bottomText}</h2>
      </div>
      <br />
      <br />

      <ul className="list">
        {memeList.map((meme) => (
          <li key={meme.id} className="newPic">
            <img src={meme.randomImage} alt="Meme" />
            <h2 className="text_top"> {meme.topText} </h2>
            <h2 className="text_bottom">{meme.bottomText}</h2>
            <button className="delete-btn" onClick={() => deleted(meme.id)}>
              x
            </button>
          </li>
        ))}
      </ul>

      <br />
    </div>
  );
}
 