import React, { Component } from "react";

class CompDispClass extends Component {
  render() {
    const { stateVar } = this.props;
    const { number } = stateVar;
    return (
      <div>
        <h3>
          {number}와 20의 합 : {Number(number) + 20}
        </h3>
        <h3>
          {number}와 {number}의 곱 : {Number(number * number)}
        </h3>
      </div>
    );
  }
}

export default CompDispClass;
