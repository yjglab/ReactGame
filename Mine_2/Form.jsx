import React, { useCallback, useState } from "react";

const Form = ({}) => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeCell = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onChangeMine = useCallback((e) => {
    setRow(e.target.value);
  }, []);
  const onClickBtn = useCallback(() => {}, []);
  return (
    <div>
      <input
        type="number"
        placeholder="세로"
        value={row}
        onChange={onChangeRow}
      />
      <input
        type="number"
        placeholder="가로"
        value={cell}
        onChange={onChangeCell}
      />
      <input
        type="number"
        placeholder="세로"
        value={mine}
        onChange={onChangeMine}
      />
      <button onClick={onClickBtn}>Start</button>
    </div>
  );
};
export default Form;
