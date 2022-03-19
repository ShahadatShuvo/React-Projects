import React from "react";

import BoxesData from "./BoxesData";
import Box from "./Box";

function Boxes() {
  const [allData, setAllData] = React.useState(BoxesData);
  
  function onHandleBoxClick(id) {
    const findBox = allData.find((dataObj) => dataObj.id === id);
    setAllData((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === id) {
          return {
            id: id,
            on: !findBox.on,
          };
        }
        return obj;
      });
    });
  }
  const displayBoxes = allData.map((boxObj) => (
    <Box key={boxObj.id} {...boxObj} onBoxClick={onHandleBoxClick} />
  ));

  return (
    <div className="boxes-wrapper pt-3">
      <h1 className="text-center">Boxes App</h1> <hr />
      <div className="container">
        <div className="row">{displayBoxes}</div>
      </div>
    </div>
  );
}

export default Boxes;
