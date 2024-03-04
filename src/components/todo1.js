import React, { useState } from "react";
import "./todo1.css";

function Todo1() {
  const [data, setData] = useState("");
  const [newData, setNewData] = useState([]);

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
