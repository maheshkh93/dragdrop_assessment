import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./styles.css";
import Card from "./CardList";

export default function StackOfCards() {
  const [card, setCard] = useState("");
  const [red, setRed] = useState([]);
  const [blue, setblue] = useState([]);
  const [green, setGreen] = useState([]);
  const [black, setBlack] = useState([]);

  const addRed = () => {
    if (red.length < 8) {
      setRed([...red, { id: Date.now(), card: `red`, colour: "red" }]);
      setCard("");
    } else {
      alert("Exceeding Maximum Limit");
    }
  };
  const addBlue = () => {
    if (blue.length < 8) {
      setblue([...blue, { id: Date.now(), card: `blue`, colour: "blue" }]);
      setCard("");
    } else {
      alert("Exceeding Maximum Limit");
    }
  };
  const addGreen = () => {
    if (green.length < 8) {
      setGreen([...green, { id: Date.now(), card: `green$`, colour: "green" }]);
      setCard("");
    } else {
      alert("Exceeding Maximum Limit");
    }
  };
  const addBlack = () => {
    if (black.length < 8) {
      setBlack([...black, { id: Date.now(), card: `black`, colour: "black" }]);
      setCard("");
    } else {
      alert("Exceeding Maximum Limit");
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
      alert("Exceeding Maximum Limit");
      return;
    } else if (destination.droppableId === "blue" && blue.length == 8) {
      alert("Exceeding Maximum Limit");
      return;
    } else if (destination.droppableId === "green" && green.length == 8) {
      alert("Exceeding Maximum Limit");
      return;
    } else if (destination.droppableId === "black" && black.length == 8) {
      alert("Exceeding Maximum Limit");
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
          <Card type="red" list={red} setList={setRed} addTask={addRed} />
          <Card type="blue" list={blue} setList={setblue} addTask={addBlue} />
          <Card
            type="green"
            list={green}
            setList={setGreen}
            addTask={addGreen}
          />
          <Card
            type="black"
            list={black}
            setList={setBlack}
            addTask={addBlack}
          />
        </div>
      </div>
    </DragDropContext>
  );
}
