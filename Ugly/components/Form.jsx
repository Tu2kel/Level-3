import React from "react";
import AudioPlayer from "./AudioPlayer";

export default function Form(props) {

  
  return (
    <div className="formContainer">
      <AudioPlayer   />

      <form className="form" onSubmit={props.handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <input type="text" name="imgUrl" placeholder="Enter URL" required />
        <button className="addImgBtn" type="submit">
          Add Image
        </button>
      </form>
    </div>
  );

}
