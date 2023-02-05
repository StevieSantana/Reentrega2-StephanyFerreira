import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.modules.css";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"B I E N V E N I D E S"} />}
        />
      </Routes>
    </>
  );
}

export default App;
