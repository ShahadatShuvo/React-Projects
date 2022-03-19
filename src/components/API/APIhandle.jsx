import React from "react";
import { Link } from "react-router-dom";

function APIhandle() {
  const [starWarsData, setStarWarsData] = React.useState("");
  console.log(starWarsData);

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div className="api-wrapper pt-3">
      <div className="container">
        <h3>Star Wars Character</h3>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <Link to="/api2">API practice 2</Link> 
      </div>
    </div>
  );
}

export default APIhandle;
