import React, { Component } from "react";

class GuguList extends Component {
  render() {
    const { number } = this.props;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const list = numbers.map((numbers) => (
      <h3>
        {number} X {numbers} = {numbers * number}
      </h3>
    ));

    return (
      <div>
        <h3>{list}</h3>
      </div>
    );
  }
}

export default GuguList;
