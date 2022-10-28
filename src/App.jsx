import React from "react";
import ColorfulMassage from "./components/ColorfulMessage";

const App = () => {
    const onClickButton = () => {
      alert();
    }
    
    return (
        <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMassage color="blue">How are you</ColorfulMassage>
      <ColorfulMassage color="pink">Good</ColorfulMassage>
      <button onClick = {onClickButton}>Button</button>
    </>
    );
};

export default App;