import React from "react";

function LoremImgGenerator() {
  function handleClick() {
    window.location.reload();
  }
  return (
    <div className="container pt-3">
      <h1 className="text-center">Random Image Generator</h1>
      <hr />
      <div className="row">
        <div className="col-11 col-md-8 mx-auto">
          <img
            src="https://picsum.photos/640/360"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4 col-md-2 mx-auto">
          <button className="btn btn-success" onClick={handleClick}>
            Click Me
          </button>
        </div>
      </div>
      <small>[ Topic: React props ]</small>
    </div>
  );
}

export default LoremImgGenerator;
