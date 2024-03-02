//test.js
import React from "react";
import "./test.css";

const para = ["2","1","9","5","0",4];
const array = ["u", "DOG", "go", "Cat", "rat"];

function test() {
  // const values = Object.values(para);
  const large = para.slice().sort((a,b) => b-a);
  const upper = array.map(num => num.toUpperCase());
  const largest = Math.max(...para);
  const shortest = Math.min(...para);
  const evenNumbers = para.filter(number => number % 2 === 0);
  return (
    <div >
      {/* {
        values.map((value, index) => (
          <div key={index}>{value}</div>
        ))
      } */}
<p>{upper.join(', ')}</p>
      
    </div>
    
  );
}

export default test;
