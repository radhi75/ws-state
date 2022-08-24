import React from "react";
import "./App.css";
import Counter from "./Components/Counter";

class App extends React.Component {
  constructor() {
    super();
    
    this.state = { isShow: true };
  }
  toggleVisibility = () =>
    this.setState({
      isShow: !this.state.isShow,
    });
  render() {
    console.log("rendering");
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.toggleVisibility}>click</button>
        {this.state.isShow && <Counter />}
      </div>
    );
  }
}

export default App;
