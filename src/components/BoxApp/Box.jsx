import React from "react";

function Box(props) {
  const styles = {
    backgroundColor: props.on ? "" : "#000",
  };

  return (
    <div className="col-7 col-md-3 mx-auto">
      <div
        className="box shadow-lg p-3 mb-5 rounded"
        style={styles}
        onClick={() => props.onBoxClick(props.id)}
      ></div>
    </div>
  );
}

export default Box;
