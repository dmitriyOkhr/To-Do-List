import { useState } from "react";
import { useDispatch } from "react-redux";
import addItem from "../actions/addItem";

const StartForm = () => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const onSave = () => {
    const obj = { title: titleInput, description: descriptionInput };
    dispatch(addItem(obj));
    setTitleInput("");
    setDescriptionInput("");
  };

  const onCansel = () => {
    setIsEdit(false);
    setTitleInput("");
    setDescriptionInput("");
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
            value={titleInput}
            placeholder="type title of task"
            type="text"
            onChange={(e) => setTitleInput(e.target.value)}
          ></input>
          <textarea
            placeholder="your description"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          ></textarea>
          <button onClick={onCansel}>cansel</button>
          <button onClick={onSave}>SAVE</button>
        </form>
      ) : (
        <button onClick={() => setIsEdit(true)}>ADD</button>
      )}
    </div>
  );
};

export default StartForm;
