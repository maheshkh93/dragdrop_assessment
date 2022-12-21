import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";

const SingleTodo = ({ index, todo, red, setRed }) => {
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.todo);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleDelete = (id) => {
    setRed(red.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    setRed(
      red.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          onDoubleClick={() => setEdit(!edit)}
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div
            className="red__single"
            style={{ backgroundColor: `${todo.colour}` }}
          >
            {edit ? (
              <input
                style={{ backgroundColor: `${todo.colour}` }}
                className="input__box"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                ref={inputRef}
              />
            ) : (
              <span className="red__single--text">{todo.todo}</span>
            )}
            <div>
              <span className="icon" onClick={() => handleDelete(todo.id)}>
                <i class="fa fa-trash-o"></i>
              </span>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
