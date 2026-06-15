import { useState } from "react";
import "./App.css";
import Header2 from "./components/layout/Header/Header2";
import Footer from "./components/layout/Footer/Footer";
import BoardList from "./features/board/BoardList";
import { Route, Routes } from "react-router-dom";
import Welcom from "./components/layout/welcom/welcom";
import BoardDetail from "./features/board/BoardDetail";
import BoardForm from "./features/board/BoardForm";

function App() {
  return (
    <>
      <Header2 />
      <Routes>
        <Route path="/" element={<Welcom />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/boards/:no" element={<BoardDetail />} />
        <Route path="/boards/write" element={<BoardForm />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
