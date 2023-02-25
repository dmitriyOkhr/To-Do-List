import { useSelector } from "react-redux";
import { Store } from "../features/todos/types";
import { TodoItem } from "../features/todos/types";
import { useDispatch } from "react-redux";
import changeCondition from "../actions/changeCondition";

const CompletedItems = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: Store) => state.todos.data);

  return (
    <div>
      {data
        .filter((el: TodoItem) => {
          if (el.completed) {
            return el;
          }
        })
        .map((el: TodoItem) => (
          <div key={el.id}>
            <input
              checked={el.completed}
              type="checkbox"
              onChange={(e) =>
                dispatch(changeCondition(e.target.checked, el.id))
              }
            ></input>
            <div className="textLineThrough">{el.title}</div>
            <div className="textLineThrough">{el.description}</div>
          </div>
        ))}
    </div>
  );
};

export default CompletedItems;
