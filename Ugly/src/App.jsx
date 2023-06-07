import React from "react";
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import { AppContextProvider } from "../components/AppContext.jsx";



function App() {

  return (
    <AppContextProvider>
      <Header />
      <Gallery/>     
    </AppContextProvider>
  );
}

export default App
