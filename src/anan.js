const Paragraph = require("./test");
const ReactDom = require("react-dom");
const React = require("react");

// import React from "react";

function App() {
  return (
    <div
      style={{ background: "yellow", padding: "50px" }}
      onChange={() => console.log("changed yellow")}
      onChangeCapture={() => console.log("captured yellow")}
    >
      <div
        style={{ background: "blue", padding: "50px" }}
        onChange={(e) => {
          console.log("changed blue");
          // e.persist();
          console.log(e);
          // console.log(e.target);
        }}
        onChangeCapture={() => console.log("captured blue")}
      >
        <div
          style={{ background: "green", padding: "50px" }}
          onChange={() => console.log("changed green")}
          onChangeCapture={() => console.log("captured green")}
        >
          <input
            onChange={() => console.log("changed input")}
            onChangeCapture={() => console.log("captured input")}
          />
        </div>
      </div>
    </div>
  );
}

// export default App;

ReactDom.render(<App></App>, document.querySelector("#root"));
