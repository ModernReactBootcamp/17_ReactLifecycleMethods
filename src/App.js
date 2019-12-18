import React from "react";

import "./App.css";
import Timer from "./Timer";
import ZenQuote from "./ZenQuote";
import GithubUserInfo from "./GithubUserInfo";

function App() {
  return (
    <div className="App">
      {/* <GithubUserInfo username="kdord" /> */}
      <ZenQuote />
    </div>
  );
}

export default App;
