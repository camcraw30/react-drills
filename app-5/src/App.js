import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://placeholder.com"} />
      </div>
    );
  }
}

export default App;
