import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }
  componentDidCatch(error, errorinfo) {
    console.error(`Error caught by ErrorBoundary:`, error);
    console.error("Error info",errorinfo);

  }
  render() {
    if(this.state.hasError){

        return (
          <div>
            <h1>ErrorBoundary</h1>
            <p>Something wrong in The Tree</p>
            <p>{this.state.errorMessage}</p>
          </div>
        );
    }
    // return this.state.children
    return this.props.children;
  }
}

export default ErrorBoundary
