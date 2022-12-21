import React from "react";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

const Task = ({ type, list, setlist, addTask }) => {
  return (
    <div className="container">
      <Droppable droppableId={type}>
        {(provided) => (
          <div
            className="red+dragactive"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="red__heading">{type}</span>
            <button onClick={addTask} className="input_submit">
              Add
            </button>
            {list?.map((todo, index) => (
              <SingleTodo
                colour={type}
                index={index}
                red={list}
                todo={todo}
                key={todo.id}
                setRed={setlist}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Task;
