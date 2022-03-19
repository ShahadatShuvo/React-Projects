import React from "react";

function CounterApp() {
  const [counter, setCounter] = React.useState(0);

  function handleDecreament() {
    setCounter((prevState) => prevState - 1);
  }
  function handleIncreament() {
    setCounter((prevState) => prevState + 1);
  }
  return (
    <div className="counter--wrapper">
      <div className="container pt-3">
      <h1 className="text-center text-light">Learn UseState App-3</h1><hr />
        <div className="row pt-5">
          <div className="col-8 col-md-4 mx-auto">
            <div className="left-counter" onClick={handleDecreament}>
              <div className="parent--sign">
                <h2 className="child-sign fw-bold">-</h2>
              </div>
            </div>
            <div className="middle-counter">
              <h2 className="middle--counter--text fw-bold">{counter}</h2>
            </div>
            <div className="right-counter" onClick={handleIncreament}>
              <div className="parent--sign">
                <h2 className="child-sign fw-bold">+</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
