import React, { Component } from "react";

class GuguInput extends Component {
  state = { inputValue: "3" };
  onChange = (e) => {
    this.setState({ inputValue: e.target.value });

    this.props.setStateFunc(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          value={this.state.inputValue}
          placeholder="숫자를 입력해주세요"
        />
      </div>
    );
  }
}

export default GuguInput;
