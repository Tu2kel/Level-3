import React, { useState, useEffect } from "react";

export default function Mbody() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://tinyurl.com/2kchrh2h",
  });

  const [editMeme, setEditMeme] =  useState({
    editTopText: "",
    editBottomText: ""
  })

  const [allMemes, setAllMemes] = useState([]);
  const [memeList, setMemeList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [edit, setEdit] = useState(null);

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
      deleted: false, 
      
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

  function editButton(id) {
    console.log("edit fires");
    setEdit(id);
  }

  function saveButton() {
    console.log("save fires");
    // setMemeList(prevList => ([
    //   ...prevList,
    //   { topText: editMeme.editTopText,
    //     bottomText: editMeme.editBottomText
    //   }
    // ]))
    // const editedMeme = memeList.find((meme) => meme.id === edit);
    setEdit(null);
  }
  console.log(memeList, "memeList")

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
          <li key={meme.id} className="newPic">
            <img src={meme.randomImage} alt="Meme" />
            {edit === meme.id ? (
              <div>
                <input
                  type="text"
                  placeholder="top of pic"
                  className="inputLeft"
                  name="editTopText"
                  value={editMeme.editTopText.id}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="bottom of pic"
                  className="inputRight"
                  name="editBottomText"
                  value={editMeme.editBottomText.id}
                  onChange={handleChange}
                />
                <button
                  className="save-btn"
                  onClick={() => saveButton(meme.id)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text_top">{meme.topText}</h2>
                <h2 className="text_bottom">{meme.bottomText}</h2>
                <button
                  className="edit-btn"
                  onClick={() => editButton(meme.id)}
                >
                  Edit
                </button>
                <button className="delete-btn" onClick={() => deleted(meme.id)}>
                  x
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <br />
    </div>
  );
}

 