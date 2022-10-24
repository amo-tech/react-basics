import ReactDom from "react-dom";

const App = () => {
  return (
    // React.Fragment
    <>
      <h1>Hello!</h1>
      <p>How are you</p>
    </>
  );
};

// ReactDom.render(<App />, document.getElementById("root"));
createRoot.render(<App />, document.getElementById("root"));