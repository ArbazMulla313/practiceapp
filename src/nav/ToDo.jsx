import React, { useState } from "react";

const ToDo = () => {
  const [text, setText] = useState("");
  const [ToDo, setToDo] = useState([]);
  const [copyToDo, setcopyToDo] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);
  const [Edit, setEdit] = useState(false);

  const handleAddTask = () => {
    if (Edit) {
      const EditedTask = ToDo.map((elem, index) =>
        index === selectedIndex ? text : elem);
      setToDo(EditedTask);
      setcopyToDo(EditedTask);
      setText("");
      setEdit(false);
    } else {
      if (!text.trim()) return;
      setToDo([...ToDo, text]);
      setcopyToDo([...ToDo, text]);
      setText("");
    }
  };
  const handleDeleteTask = (index) => {
    const remainTask = ToDo.filter((elem, ind) => ind != index);
    setToDo(remainTask);
  };
  const handleSearchTask = (value) => {
    const searchedItem = copyToDo.filter((elem) =>
      elem.toUpperCase().includes(value.toUpperCase())
    );
    // console.log(searchedItem);
    setToDo(searchedItem);
  };
  const handleEditTask = (item, ind) => {
    setText(item);
    setselectedIndex(ind);
    setEdit(true);
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <input
        type="text"
        placeholder="Search Here....."
        onChange={(e) => handleSearchTask(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Add ToDo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <button onClick={() => handleAddTask()}>
        {Edit ? "Edit" : "Add"}Task
      </button>
      <ol>
        {ToDo.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => handleEditTask(item, index)}>
                Edit
              </button>{" "}
              <button onClick={() => handleDeleteTask(item, index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ToDo;
