import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";

const SingleCard = ({ index, card, list, setList }) => {
  const [editCard, setEditCard] = useState(card.card);

  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleDelete = (id) => {
    setList(list.filter((card) => card.id !== id));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    setList(
      list.map((card) => (card.id === id ? { ...card, card: editCard } : card))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <form
          onClick={() => setEdit(true)}
          onDoubleClick={(e) => handleEdit(e, card.id)}
          onSubmit={(e) => handleEdit(e, card.id)}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div
            className="red__single"
            style={{ backgroundColor: `${card.colour}` }}
          >
            {edit ? (
              <input
                style={{ backgroundColor: `${card.colour}` }}
                className="input__box"
                value={editCard}
                onChange={(e) => setEditCard(e.target.value)}
                ref={inputRef}
              />
            ) : (
              <span className="red__single--text">{editCard}</span>
            )}

            <div>
              <span className="icon" onClick={() => handleDelete(card.id)}>
                <i class="fa fa-close"></i>
              </span>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleCard;

{
  /* <input
              style={{
                background: card.colour,
                color: "white",
                border: "none",
              }}
              type="text"
              value={editCard}
              onChange={(e) => handleEdit(card.id, e.target.value)}
            /> */
}
