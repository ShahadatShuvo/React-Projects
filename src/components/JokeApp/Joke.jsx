import React from "react";
import { ImCompass } from "react-icons/im";

function Joke(props) {
  const { setup, punchline, isShown } = props;
  return (
    <div className="row">
      <div className="col-10 col-md-8 mx-auto">
        <h3>
          <ImCompass className="me-3" />
          {setup}
        </h3>
        {isShown && (
          <p className="text-secondary fs-4 ms-md-5">
            <li>{punchline}</li>
          </p>
        )}
        <button
          className="btn btn-success ms-md-5"
          onClick={() => props.onButtonClick(props.id)}
        >
          {isShown ? "Hide" : "Show"}
        </button>{" "}
        <hr />
      </div>
    </div>
  );
}

export default Joke;
