import React, { useState, useEffect } from "react";

const ListNumbers = ({ getNumbers }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(getNumbers(15));
  }, [numbers]);

  return numbers.map((number) => <div key={number}>{number}</div>);
};

export default ListNumbers;
