import React, { useState, useEffect } from "react";

export default function Mbody() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://tinyurl.com/2kchrh2h",
  });
  const [allMemes, setAllMemes] = useState([]);
  const [memeList, setMemeList] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));

    const storedMemeList = localStorage.getItem("memeList");
    if (storedMemeList) {
      const parsedMemeList = JSON.parse(storedMemeList);
      const filteredMemeList = parsedMemeList.filter(
        (meme) => meme.deleted !== true
      );
      setMemeList(filteredMemeList);
      setCounter(filteredMemeList.length + 1);
    }
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleClick(e) {
    e.preventDefault();
    const newMeme = {
      id: counter,
      topText: meme.topText,
      bottomText: meme.bottomText,
      randomImage: meme.randomImage,
      deleted: false, // Add a 'deleted' property to track deleted memes
    };

    setMemeList((prevList) => [...prevList, newMeme]);
    setCounter((prevCounter) => prevCounter + 1);

    localStorage.setItem("memeList", JSON.stringify([...memeList, newMeme]));
  }

  function deleted(id) {
    const updatedMemeList = memeList.filter((meme) => meme.id !== id);
    setMemeList(updatedMemeList);
    localStorage.setItem("memeList", JSON.stringify(updatedMemeList));
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
 