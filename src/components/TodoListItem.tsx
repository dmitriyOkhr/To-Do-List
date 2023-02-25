import { useDispatch } from "react-redux";
import { FC, useState } from "react";
import { TodoItem } from "../features/todos/types";
import cn from "classnames";
import deleteItem from "../actions/deleteItem";
import updateItem from "../actions/updateItem";
import moveItemUp from "../actions/moveItemUp";
import moveItemDown from "../actions/moveItemDown";
import changeCondition from "../actions/changeCondition";

interface Props {
  data: TodoItem;
  index: number;
  id: string | number;
  lastButton: boolean;
}

const TodoListItem: FC<Props> = ({ data, index, id, lastButton }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(data.title);
  const [updateDescription, setUpdateDescription] = useState(data.description);

  const onDelete = () => {
    dispatch(deleteItem(id));
  };

  const onSaveUpdate = () => {
    const obj = { title: updateTitle, description: updateDescription };
    dispatch(updateItem(obj, id));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsEdit(false);
  };
  return (
    <div>
      {isEdit ? (
        <form onSubmit={onSubmit}>
          <input
            value={updateTitle}
            type="text"
            onChange={(e) => setUpdateTitle(e.target.value)}
          ></input>
          <textarea
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
          ></textarea>
          <button onClick={() => setIsEdit(false)}>cansel</button>
          <button onClick={onSaveUpdate}>save</button>
        </form>
      ) : (
        <div>
          <input
            checked={data.completed}
            type="checkbox"
            onChange={(e) => dispatch(changeCondition(e.target.checked, id))}
          ></input>
          <div className={cn({ textLineThrough: data.completed })}>
            {data.title}
          </div>
          <div className={cn({ textLineThrough: data.completed })}>
            {data.description}
          </div>
          <button onClick={() => setIsEdit(true)}>chenge</button>
          <button onClick={onDelete}>delete</button>
          <div>
            {index !== 0 && (
              <button onClick={() => dispatch(moveItemUp(index))}>up</button>
            )}
            {!lastButton && (
              <button onClick={() => dispatch(moveItemDown(index))}>
                down
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
