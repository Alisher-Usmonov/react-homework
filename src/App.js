import React, { Fragment } from "react";
import Person from "./Person/Person";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  // Increment Function
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  // Decrement Function
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };
  // Reset function
  reset() {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div className="App">
        <div className="counter">
          <h1 className="count">{this.state.count}</h1>
          <div className="button-box">
            <button onClick={this.increment.bind(this)} className="plus">+</button>
            <button onClick={this.decrement.bind(this)} className="minus">-</button>
            <button onClick={this.reset.bind(this)} className="reset">Reset</button>
          </div>
        </div>
      </div>
    );
  }
};

export default App;