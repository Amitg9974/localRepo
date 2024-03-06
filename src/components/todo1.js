import React, { useState } from "react";
import "./todo1.css";

function Todo1() {
  const [data, setData] = useState("");
  const [newData, setNewData] = useState([]);
  const para = [5, [8, [7, 2]], 2, [11, 4], 1];
  // let sum = 0;

  // const num = para.map((num) => num)

  // for (let i = 0; i < para.length; i++) {
  //   // console.log("data(i): ",para[i]);
  //   if (Array.isArray(para[i])) {
  //     for (let j = 0; j < para[i].length; j++) {
  //       // console.log("data(i,j): ",para[i][j]);
  //       if (Array.isArray(para[i][j])) {
  //         for (let k = 0; k < para[i][j].length; k++) {
  //           sum += para[i][j][k];
  //         }
  //       } else {
  //         sum += para[i][j];
  //       }
  //     }
  //   } else {
  //     sum += para[i];
  //   }
  // }

  const sum = para.push(0);

  // function asyncFun1() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("data1");
  //       resolve("success");
  //     }, 3000);
  //   });
  // }

  // function asyncFun2() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("data2");
  //       resolve("success");
  //     }, 3000);
  //   });
  // }

  // console.log("fetching data1..");
  // let p1 = asyncFun1();
  // p1.then((res) => {
  //   console.log("fetching data2..");
  //   let p2 = asyncFun2();
  //   p2.then((res) => {});
  // });

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = (e) => {
    // e.preventDefault();
    if (data.trim() !== "") {
      setNewData([...newData, data]);
      setData("");
      // console.log(data);
    }
    console.log(sum);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  const handleClose = (e) => {
    const deleteData = newData.filter((_, i) => i !== e);
    setNewData(deleteData);
  };

  return (
    <div>
      <div className="contain">
        <input
          className="input"
          type="text"
          name="todo"
          value={data}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleClick} className="button">
          Add
        </button>
      </div>
      <div className="todo_list">
        {newData.map((item, index) => (
          <>
            <p key={index} className="list">
              {item}
              <div className="close" onClick={() => handleClose(index)}>
                X
              </div>
            </p>
          </>
        ))}
      </div>
    </div>
  );
}

export default Todo1;
