import React, { useEffect, useState } from "react";
import { ColorfulMassage } from "./components/ColorfulMessage";

const App = () => {
// React= 状態+関数→クロージャー
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  }
  const onClickSwitchShowFlag =() => {
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {
    if (num > 0 ) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
  

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMassage color="blue">How are you</ColorfulMassage>
      <ColorfulMassage color="pink">Good</ColorfulMassage>
      <button onClick={onClickCountUp}>CountUp</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on / off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(=^・・^=)</p>}
    </>
  );
};

export default App;