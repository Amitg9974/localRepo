import React from "react";

function Test2() {
  function Asyncs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("failed");
        console.log("timer");
      }, 3000);
    });
  }

  async function asyncFun() {
    try {
      console.log("test 1");
      console.log("test 2");
      const data = await Asyncs();
      console.log(data);
      console.log("test 3");
      console.log("test 4");
    } catch (error) {
      console.error(error);
    }
  }

  function pattern(n) {
    let counter = n;
    for (let i = 0; i < 4; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        // if((i+j)%2==0){
        //     row += "0";
        // }else{
        //     row += "1";
        // }

        row += counter + "  ";
        counter += n;

      }
      console.log(row);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const inputData = prompt("Enter the number of Row: ");
    const rows = parseInt(inputData);
    pattern(rows);
  };

  return (
    <div>
      <h1>Test</h1>
      <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default Test2;
