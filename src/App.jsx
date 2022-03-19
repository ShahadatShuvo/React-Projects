import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MemeParent from "./components/MemeGenerator/MemeParent";
import LoremImgGenerator from "./components/LoremGenerate/LoremImgGenerator";
import ToDo from "./components/StateLearning/ToDo";
import BooleanState from "./components/StateLearning/BooleanState";
import CounterApp from "./components/StateLearning/CounterApp";
import Boxes from "./components/BoxApp/Boxes";
import Jokes from "./components/JokeApp/Jokes";
import Forms from "./components/ReactForms/Forms";
import Form2 from "./components/ReactForms/Form2";
import APIhandle from "./components/API/APIhandle";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MemeParent />} />
        <Route path="forms" element={<Forms />} />
        <Route path="form2" element={<Form2 />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="jokes" element={<Jokes />} />
        <Route path="boxes" element={<Boxes />} />
        <Route path="boolean" element={<BooleanState />} />
        <Route path="counter" element={<CounterApp />} />
        <Route path="lorem" element={<LoremImgGenerator />} />
        <Route path="api" element={<APIhandle />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
