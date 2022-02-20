import React, { useState, useRef, useEffect } from "react";

const rspCoords = {
  rock: "0",
  scissors: "-142px",
  paper: "-284px",
};
const scores = {
  rock: 1,
  scissors: -1,
  paper: 0,
};
const comChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};
const Rsp = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.rock);
  const [score, setScore] = useState(0);
  const interval = useRef();
  useEffect(() => {
    interval.current = setInterval(changeHand, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [imgCoord]);
  const changeHand = () => {
    if (imgCoord === rspCoords.rock) {
      setImgCoord(rspCoords.scissors);
    } else if (imgCoord === rspCoords.scissors) {
      setImgCoord(rspCoords.paper);
    } else if (imgCoord === rspCoords.paper) {
      setImgCoord(rspCoords.rock);
    }
  };
  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const comScore = scores[comChoice(imgCoord)];
    const diff = myScore - comScore;
    if (diff === 0) {
      setResult("비겼습니다");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("졌습니다");
      setScore((prevScore) => prevScore - 1);
    }
    interval.current = setInterval(changeHand, 1000);
  };
  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("rock")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("scissors")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("paper")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};
export default Rsp;
