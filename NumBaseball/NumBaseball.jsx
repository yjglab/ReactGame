import React, { useState, memo } from "react";
import Try from "./Try";

function getNumbers() {
  const candidate = Array(9)
    .fill()
    .map((v, i) => i + 1);
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * (candidate.length - i)),
      1
    )[0];
    array.push(chosen);
  }
  console.log(array);
  return array;
}
const NumBaseball = memo(() => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런!" }];
      });
      alert("게임을 다시 시작합니다");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려 실패! 답은 ${answer.join("")}입니다`);
        alert("게임을 다시 시작합니다");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike} 스트라이크, ${ball} 볼` },
          ];
        });
        setValue("");
      }
    }
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도: `} tryInfo={v} index={i} />;
        })}
      </ul>
    </>
  );
});

export default NumBaseball;
