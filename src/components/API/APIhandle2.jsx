import React from "react";
import { Link } from "react-router-dom";

function APIhandle2() {
  const [counter, setCounter] = React.useState(0);

  const [starWarsData, setStarWarsData] = React.useState(" ");

  function onHandleClick() {
    setCounter(counter + 1);
  }

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${counter}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [counter]);
  return (
    <div className="api-wrapper pt-3">
      <div className="container">
        <h3>Get Star Wars data from API (Fetch)</h3>
        <hr />
        <div className="row mb-5">
          <div className="col">
            <h4>The counter is {counter}</h4>
            <button onClick={onHandleClick}>Get Next Character</button>
            <pre className="mt-3">{JSON.stringify(starWarsData, null, 2)}</pre>
          </div>
        </div>
        <Link to="/api">Go back</Link>
      </div>
    </div>
  );
}

export default APIhandle2;
