import React, { Component } from "react";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorinfo) {
    // console.log(error);
    this.setState({ errorMsg: error.toString() });
    console.log("___________________________________------", errorinfo);
  }
  handle = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something Wrong Please try Again after 10 minutes</h1>
          <p>ErrorDetails:{this.state.errorMsg}</p>
          <button onClick={this.handle}>Back</button>
        </>
      );
    }
    return this.props.children;
  }
}
