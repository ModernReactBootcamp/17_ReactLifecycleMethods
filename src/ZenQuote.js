import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    console.log("IN CONSTUCTOR");
    super(props);

    this.state = {
      quote: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    console.log("IN componentDidMount");
    //load data
    axios.get("https://api.github.com/zen").then(response => {
      setTimeout(
        function() {
          this.setState({ quote: response.data, isLoaded: true });
        }.bind(this),
        3000
      );
    });
    // console.log(response.data));
    //set state with that data
  }
  componentDidUpdate() {
    console.log("INSIDE COMPONENT DID UPDATE");
  }

  render() {
    console.log("IN RENDER");
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader">
            <div className="loader-name">Loading</div>
            <div className="loader-circle"></div>
          </div>
        )}
      </div>

      //
      //
    );
  }
}

export default ZenQuote;
