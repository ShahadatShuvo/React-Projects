import React from "react";

import Joke from "./Joke";

import JokeData from "./JokesData";

function Jokes() {
  const [allJokes, setAllJokes] = React.useState(JokeData);
  function onHandleClick(id) {
    setAllJokes((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === id) {
          return {
            id: id,
            setup: obj.setup,
            punchline: obj.punchline,
            isShown: !obj.isShown,
          };
        }
        return obj;
      });
    });
  }
  const showdata = allJokes.map((jokeObj) => (
    <Joke key={jokeObj.id} {...jokeObj} onButtonClick={onHandleClick} />
  ));
  return (
    <div className="jokes-wrapper pt-3">
      <div className="container">
        <h1 className="text-center">Jokes App</h1>
        <hr />
        {showdata}
      </div>
    </div>
  );
}

export default Jokes;
