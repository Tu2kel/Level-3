import React, { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://api.vschool.io/Kelley/thing")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://api.vschool.io/Kelley/thing/${id}`)
      .then((res) => getData())
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title: e.target.title.value,
      description: e.target.description.value,
      imgUrl: e.target.imgUrl.value,
    };

    axios
      .post("https://api.vschool.io/Kelley/thing/", postData)
      .then((response) => {
        getData();
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };

  const editData = (id, updatedData) => {
    axios
      .put(`https://api.vschool.io/Kelley/thing/${id}`, updatedData)
      .then((response) => {
        getData();
      })
      .catch((error) => console.log(error));
  };

  const handleEditSubmit = (updatedData, id) => {
    editData(id, updatedData);
  };

  const handleEdit = (id) => {
    setData((prevData) =>
      prevData.map((prevItem) =>
        prevItem._id === id ? { ...prevItem, isEditing: true } : prevItem
      )
    );
  };

  const handleEditCancel = (id) => {
    setData((prevData) =>
      prevData.map((prevItem) =>
        prevItem._id === id ? { ...prevItem, isEditing: false } : prevItem
      )
    );
  };

  const contextValue = {
    data,
    setData,
    getData,
    deleteData,
    handleSubmit,
    editData,
    handleEditSubmit,
    handleEdit,
    handleEditCancel,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
