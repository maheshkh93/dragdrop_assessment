import React from "react";
import SingleCard from "./SingleCard";
import { Droppable } from "react-beautiful-dnd";

const Card = ({ type, list, setList, addTask }) => {
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
            {list?.map((card, index) => (
              <SingleCard
                index={index}
                list={list}
                card={card}
                key={card.id}
                setList={setList}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Card;
