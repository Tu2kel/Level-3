import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

export default function Gallery({ item }) {
  const { deleteData, handleEdit, handleEditCancel, handleEditSubmit } =
    useContext(AppContext);
  const [editedTitle, setEditedTitle] = useState(item?.title || "");
  const [editedDescription, setEditedDescription] = useState(
    item?.description || ""
  );
  const [editedImgUrl, setEditedImgUrl] = useState(item?.imgUrl || "");

  if (!item || !item._id || !item.title) {
    return null;
  }

  const handleSave = () => {
    const updatedData = {
      title: editedTitle,
      description: editedDescription,
      imgUrl: editedImgUrl,
    };

    handleEditSubmit(updatedData, item._id);
  };
  

  return (
    <div key={item._id} className={item._id}>
      {item.isEditing ? (
        <form>
          <input
            type="text"
            name="title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Title"
          />
          <br />
          <input
            type="text"
            name="description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Description"
          />
          <br />
          <input
            type="text"
            name="imgUrl"
            value={editedImgUrl}
            onChange={(e) => setEditedImgUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <br />
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button
            className={item._id}
            onClick={() => handleEditCancel(item._id)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h1>Title: {item.title}</h1>
          <br />
          <h2>Description: {item.description}</h2>
          <br />
          <img
            src={item.imgUrl}
            alt="Portrait"
            // style={{ border: "solid red" }}
          />
          <br />
          <div className="buttons" >
            <button onClick={() => handleEdit(item._id)} className="edit" >Edit</button>
            <button onClick={() => deleteData(item._id)} className="delete" >Delete</button>
          </div>
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
}
