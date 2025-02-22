import React from "react";

function GuguList2({ number }) {
  // 숫자 0으로 초기화 된 10개의 배열 생성
  // map을 이용하여 반복문을 구현하려면 반드시 fill()을 사용하여
  // 각 요소를 초기화 해 주어야 한다
  const gugus = Array(9).fill(1);
  const guguMaps = gugus.map((item, index) => {
    return (
      <div>
        {number} X {index + 1} = {number * (index + 1)}
      </div>
    );
  });
  return <div>{guguMaps}</div>;
}

export default GuguList2;
