import React, { Component } from "react";

class CompInputClass extends Component {
  state = { inputValue: "25" };
  onChange = (e) => {
    this.setState({ inputValue: e.target.value });

    this.props.setStateFunc(e.target.value);
  };
  render() {
    const style = {
      fontSize: "20px",
      padding: "5px",
    };
    return (
      <div>
        <input
          onChange={this.onChange}
          style={style}
          placeholder="숫자를 입력하세요"
          value={this.state.inputValue}
        />
      </div>
    );
  }
}

export default CompInputClass;
