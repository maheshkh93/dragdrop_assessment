import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./styles.css";
import Task from "./Task";

export default function TaskList() {
  const [todo, setTodo] = useState("");
  const [red, setRed] = useState([]);
  const [blue, setblue] = useState([]);
  const [green, setGreen] = useState([]);
  const [black, setBlack] = useState([]);

  const addRed = () => {
    if (red.length < 8) {
      setRed([...red, { id: Date.now(), todo, colour: "red" }]);
      setTodo("");
    }
  };
  const addBlue = () => {
    if (blue.length < 8) {
      setblue([...blue, { id: Date.now(), todo, colour: "blue" }]);
      setTodo("");
    }
  };
  const addGreen = () => {
    if (green.length < 8) {
      setGreen([...green, { id: Date.now(), todo, colour: "green" }]);
      setTodo("");
    }
  };
  const addBlack = () => {
    if (black.length < 8) {
      setBlack([...black, { id: Date.now(), todo, colour: "black" }]);
      setTodo("");
    }
  };

  const onDragEnd = (result) => {
    let { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === "red" && red.length == 8) {
      return;
    } else if (destination.droppableId === "blue" && blue.length == 8) {
      return;
    } else if (destination.droppableId === "green" && green.length == 8) {
      return;
    } else if (destination.droppableId === "black" && black.length == 8) {
      return;
    }

    let add;

    if (source.droppableId === "red") {
      add = red[source.index];
      red.splice(source.index, 1);
    } else if (source.droppableId === "blue") {
      add = blue[source.index];
      blue.splice(source.index, 1);
    } else if (source.droppableId === "green") {
      add = green[source.index];
      green.splice(source.index, 1);
    } else if (source.droppableId === "black") {
      add = black[source.index];
      black.splice(source.index, 1);
    }

    if (destination.droppableId === "red") {
      red.splice(destination.index, 0, add);
    } else if (destination.droppableId === "blue") {
      blue.splice(destination.index, 0, add);
    } else if (destination.droppableId === "green") {
      green.splice(destination.index, 0, add);
    } else if (destination.droppableId === "black") {
      black.splice(destination.index, 0, add);
    }

    setblue(blue);
    setRed(red);
    setBlack(black);
    setGreen(green);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div className="App">
          <Task
            type="red"
            list={red}
            setlist={setRed}
            addTask={addRed}
            todo={todo}
            setTodo={setTodo}
          />
          <Task
            type="blue"
            list={blue}
            setlist={setblue}
            addTask={addBlue}
            todo={todo}
            setTodo={setTodo}
          />
          <Task
            type="green"
            list={green}
            setlist={setGreen}
            addTask={addGreen}
            todo={todo}
            setTodo={setTodo}
          />
          <Task
            type="black"
            list={black}
            setlist={setBlack}
            addTask={addBlack}
            todo={todo}
            setTodo={setTodo}
          />
        </div>
      </div>
    </DragDropContext>
  );
}
