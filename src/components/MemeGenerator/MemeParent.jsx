import React from "react";

import MemesData from "./MemesData";
import Form from "./Form";
import Meme from "./Meme";

function MemeParent() {
  const allMemes = MemesData.data.memes;

  const [randomMemeImg, setRandomMemeImg] = React.useState("");

  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
  });
  console.log(formData);

  function handleClick() {
    const randomValue = Math.floor(Math.random() * allMemes.length);
    const randomMemeURL = allMemes[randomValue].url;
    setRandomMemeImg(randomMemeURL);
  }
  return (
    <div>
      <Form
        formData={formData}
        setFormData={setFormData}
        btnClick={handleClick}
      />
      <Meme randomMemeImg={randomMemeImg} formData={formData} />
      <div className="container">
        <small>
          [ Meme Generator Topic: API &#8827; useEffect, React form, Conditional
          Rendering, State handling, State lifting, props, useState, styling ]
        </small>
        <br />
        <small>[ Navbar Topic: React Router ]</small>
      </div>
    </div>
  );
}

export default MemeParent;
