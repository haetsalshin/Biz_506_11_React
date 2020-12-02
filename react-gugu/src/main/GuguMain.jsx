import React, { Component } from "react";
import "./GuguInput";
import GuguInput from "./GuguInput";
import "./GuguList";
import GuguList from "./GuguList";

class GuguMain extends Component {
  state = { number: 3 };
  setStateFunc = (value) => {
    this.setState({ number: value });
  };

  render() {
    return (
      <div>
        <GuguInput setStateFunc={this.setStateFunc} />
        <GuguList number={this.state.number} />
      </div>
    );
  }
}

export default GuguMain;
