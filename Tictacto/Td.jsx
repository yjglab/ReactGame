import React, { useCallback, useEffect, useRef, memo } from "react";
import { CLICK_CELL } from "./Tictactoe";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  // --- 어떤 것이 렌더링을 유발하는 지 확인하기 ---
  const ref = useRef([]);
  useEffect(() => {
    console.log(
      rowIndex === ref.current[0],
      cellIndex === ref.current[1],
      dispatch === ref.current[2],
      cellData === ref.current[3]
    );
    ref.current = [rowIndex, cellIndex, dispatch, cellData];
    console.log(ref.current);
  }, [rowIndex, cellIndex, dispatch, cellData]);
  // ---
  const onClickTd = useCallback(() => {
    if (cellData) return;
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
});
export default Td;
