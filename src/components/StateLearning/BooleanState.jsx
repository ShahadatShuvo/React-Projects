import React from "react";

function BooleanState() {
  const [isClicked, setIsClicked] = React.useState(true);

  const showResult = isClicked ? "Yes" : "No";

  function handleClick() {
    setIsClicked((prevState) => !prevState);
  }
  return (
    <div className="container pt-3">
       <h1 className="text-center">Learn UseState App-2</h1><hr />
      <div className="row">
        <div className="col">
          <h1 className="fw-bold text-secondary boolean--heading">
            iS State important to know?
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2 mx-auto">
          <div className="circle" onClick={handleClick}>
            <p className="circle--text fs-1 fw-bold">{showResult}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooleanState;
