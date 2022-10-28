import React from "react";

// 大文字？
const ColorfulMassage = (props) => {
    const { color, children} = props; // 分割代入
    const contentStyle = {
        color,
        fontSize: "18px",
      }
    return <p style={contentStyle}>{children}</p> // children使う？
}

export default ColorfulMassage;