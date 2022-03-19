import React from "react";

function ToDo() {
  const [thingsArray, setThingsArray] = React.useState([]);

  const showData = thingsArray.map((data) => (
    <p className="fw-bold fs-4" key={data}>
      {data}
    </p>
  ));

  function handleClick() {
    const createNewThing = `Things ${thingsArray.length + 1}`;
    setThingsArray((prevThingsArray) => [...prevThingsArray, createNewThing]);
  }
  return (
    <div className="container pt-3">
      <h1 className="text-center">Learn UseState App-1</h1><hr />
      <div className="row ">
        <div className="col-4 col-md-2 mx-auto">
          <button className="btn btn-success" onClick={handleClick}>
            Click Me
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6 col-md-3 mx-auto">{showData}</div>
      </div>
      <small>[ Topic: React useState]</small>
    </div>
  );
}

export default ToDo;
