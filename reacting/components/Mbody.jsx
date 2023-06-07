import React, { useState, useEffect } from "react";
import IMeme from "./IMeme";

export default function Mbody() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://tinyurl.com/2kchrh2h",
  });

  // const [editMeme, setEditMeme] = useState({
  //   editTopText: "",
  //   editBottomText: "",
  // });

  const [allMemes, setAllMemes] = useState([]);
  const [memeList, setMemeList] = useState([]);
  const [counter, setCounter] = useState(1);
  // const [edit, setEdit] = useState(false);

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

  // function handleChangeEdit(event) {
  //   const { name, value } = event.target;
  //   setEditMeme((prevEditMeme) => ({
  //     ...prevEditMeme,
  //     [name]: value,
  //   }));
  // }

  function handleClick(e) {
    e.preventDefault();
    const newMeme = {
      id: counter, // to generate a number to Id each new image
      topText: meme.topText,
      bottomText: meme.bottomText,
      randomImage: meme.randomImage,
      deleted: false,
    };

    setMemeList((prevList) => [...prevList, newMeme]);
    setCounter((prevCounter) => prevCounter + 1);

    localStorage.setItem("memeList", JSON.stringify([...memeList, newMeme])); //Stores the updated memeList in the browser's local storage as a string.
  }

  function deleted(id) {
    const updatedMemeList = memeList.filter((meme) => meme.id !== id);
    setMemeList(updatedMemeList);
    localStorage.setItem("memeList", JSON.stringify(updatedMemeList));
  }

  function editButton() {
    console.log("edit fires");
setEdit((prev) => !prev);
  }

  function saveButton(id, editMeme) {
    console.log("save fires");
    const updatedMemeList = memeList.map((meme) => {
      if (meme.id === id) {
        return {
          ...meme,
          topText: editMeme.editTopText,
          bottomText: editMeme.editBottomText,
        };
      }
      return meme;
    });
    setMemeList(updatedMemeList);
    localStorage.setItem("memeList", JSON.stringify(updatedMemeList));
  
  }
  function silly(){
    console.log('testthis out')
  }
  console.log(memeList, "memeList");

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
        <h2 className="meme--text_top">{meme.topText}</h2>
        <h2 className="meme--text_bottom">{meme.bottomText}</h2>
      </div>
      <br />
      <h2 className="content">⬇ Saved Memes Content Area ⬇</h2>
      <br />

      <ul className="list">
        {memeList.map((meme) => (
        <IMeme {...meme} saveButton = {saveButton} silly = {silly} />
        ))}
      </ul>
    </div>
  );
}