import React, { useState } from "react";
import "./todo.css";

function Todo() {
  const [list, setList] = useState("");
  const [newList, setNewList] = useState([]);

  const handleChange = (event) => {
    setList(event.target.value);
  };

  const addClick = () => {
    if (list.trim() !== "") {
      setNewList([...newList, list]);
      setList("");
      console.log(list);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addClick();
    }
  }

  return (
    <div className="todo">
      <div className="todo_input">
        <input
          type="text"
          placeholder="type here.."
          value={list}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button className="add-btn" onClick={addClick}>
          +
        </button>
        <div className="ul_list">
          {newList.map((item, index) => (
            <>
              <p key={index}>{item}</p>
              <i className="fa-solid fa-trash-arrow-up"></i>
            </>
          ))}
        </div>
        {/* <p>okk</p> */}
      </div>
    </div>
  );
}

export default Todo;
