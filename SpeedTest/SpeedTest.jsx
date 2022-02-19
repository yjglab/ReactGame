import React, { useState, useRef } from "react";

const SpeedTest = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭하여 시작");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  let startTime = useRef();
  let endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이되면클릭");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("실패");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };
  const onReset = () => {
    setResult([]);
  };
  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균시간: {result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      <div>{renderAverage()}</div>
    </>
  );
};

export default SpeedTest;
