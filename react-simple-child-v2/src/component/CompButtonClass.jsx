import React, { Component } from "react";

class CompButtonClass extends Component {
  render() {
    //body에서 전달받은 2개의 함수를 전개하여 각각 사용준비
    const { incFunc, decFunc } = this.props;
    return (
      <div>
        <button onClick={incFunc}>증가하기</button>
        <button onClick={decFunc}>감소하기</button>
      </div>
    );
  }
}

export default CompButtonClass;
