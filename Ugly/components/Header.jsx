import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AppContext } from "./AppContext";
import Gallery from "./Gallery";
import Form from "./Form";
import './Header.css'


export default function Header() {
  const {
    data,
    getData,
    deleteData,
    handleSubmit,
    editData,
    handleEditSubmit,
    handleEdit,
    handleEditCancel,
    
  } = useContext(AppContext);

  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div className="container">
      <Form handleSubmit={handleSubmit} />

      <h2 className="galleryHeader"> ⬇ UGLY THINGS ⬇</h2>

      <div className="gallery">
        {data.map((item) => (
          <Gallery
            key={item._id}
            item={item}
            handleEditSubmit={handleEditSubmit}
            deleteData={deleteData}
            handleEdit={handleEdit}
            handleEditCancel={handleEditCancel}
            editData={editData}
            axios={axios}
          />
        ))}
      </div>
    </div>
  );
}
