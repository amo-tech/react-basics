import React, {useState} from "react";
import ColorfulMassage from "./components/ColorfulMessage";

const App = () => {
    const onClickCoutUp = () => {
      setNum(num + 1);
    }
    const [num, setNum] = useState(0);
    return (
        <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMassage color="blue">How are you</ColorfulMassage>
      <ColorfulMassage color="pink">Good</ColorfulMassage>
      <button onClick = {onClickCoutUp}>CountUp</button>
      <p>{num}</p>
    </>
    );
};

export default App;