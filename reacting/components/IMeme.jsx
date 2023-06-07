import React, {useState} from 'react'

export default function IMeme(props) {

  const [edit, setEdit] = useState(false);

  const [editMeme, setEditMeme] = useState({
    editTopText: "",
    editBottomText: "",
  });

    function handleChangeEdit(event) {
      const { name, value } = event.target;
      setEditMeme((prevEditMeme) => ({
        ...prevEditMeme,
        [name]: value,
      }));
    }

    function newSave(e) {
        e.preventDefault()
        setEdit(!edit);
        props.silly()
        props.saveButton(props.id, editMeme)
    }

  return (
    <div>
      <li key={props.id} className="newPic">
        <img src={props.randomImage} alt="Meme" />
        {/* {edit ? (  */}
        <div>
          {edit ? (
           <>
           <input
              type="text"
              placeholder="top of pic"
              className="inputLeft"
              name="editTopText"
              
              value={editMeme.editTopText}
              onChange={handleChangeEdit}
            />
            <input
            type="text"
            placeholder="bottom of pic"
            className="inputRight"
            name="editBottomText"
            value={editMeme.editBottomText}
            onChange={handleChangeEdit}
          />
          <button className="save-btn" onClick={newSave}>SAVE
          </button>
           </> 
          ) : (
            <>
            <h2 className="text_top">{props.topText}</h2>
            <h2 className="text_bottom">{props.bottomText}</h2>
          <button className="edit-btn" onClick={() => setEdit(!edit)}>EDIT</button>
            </>
            
          )}
          
          
        </div>
        {/* ) : ( // what is this line saying? */}
        <div>
        
          <button className="delete-btn" onClick={() => deleted(props.id)}>
            x
          </button>
        </div>
      </li>
    </div>
  );
}
