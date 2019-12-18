import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    console.log("IN CONSTUCTOR");
    this.state = {
      time: new Date()
    };
  }
  componentDidMount() {
    console.log("IN componentDidMount");
    // this.timerID = setInterval(() => {
    //   this.setState({ time: new Date() });
    // }, 1000);
  }
  render() {
    console.log("IN RENDER");
    return <h1>{this.state.time.getSeconds()}</h1>;
  }
}

export default Timer;
