import React from "react";

function Meme(props) {
  const { randomMemeImg, formData } = props;
  return (
    <div className="row justify-content-center my-3">
      <div className="col-12 col-md-8 img--container">
        {randomMemeImg.length > 0 && (
          <p className="top-text text-uppercase fs-1 fw-bolder text-danger">
            {formData.topText }
          </p>
        )}
        <img src={randomMemeImg} alt="" width="100%" />
        {randomMemeImg.length > 0 && (
          <p className="bottom-text text-uppercase fs-1 fw-bolder text-warning">
            {formData.bottomText }
          </p>
        )}
      </div>
    </div>
  );
}

export default Meme;
