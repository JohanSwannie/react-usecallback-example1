import React, { useState, useCallback } from "react";
import ListNumbers from "./ListNumbers";

function App() {
  const [number, setNumber] = useState(1);
  const [blueTheme, setBlueTheme] = useState(false);

  const getNumbers = useCallback(
    (passedNumber) => {
      return [
        number + passedNumber,
        (number + 1 + passedNumber) / 2,
        (number + 2 + passedNumber) / 3,
        (number + 3 + passedNumber) / 4,
        (number + 4 + passedNumber) / 5,
      ];
    },
    [number]
  );

  const handleChangedNumber = (event) => {
    event.preventDefault();
    if (event.target.value > 0) {
      setNumber(parseInt(event.target.value));
    } else {
      setNumber(1);
    }
  };
  const appTheme = {
    color: blueTheme ? "#FFF" : "#000",
    backgroundColor: blueTheme ? "navy" : "#FFF",
  };

  return (
    <div className="App" style={appTheme}>
      <input type="number" value={number} onChange={handleChangedNumber} />
      <button onClick={() => setBlueTheme((prevBlueTheme) => !prevBlueTheme)}>
        Toggle between normal and Blue Theme
      </button>
      <ListNumbers getNumbers={getNumbers} />
    </div>
  );
}

export default App;
