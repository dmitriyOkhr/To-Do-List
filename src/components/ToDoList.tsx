import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { Store } from "../features/todos/types";
import { FC } from "react";

const ToDoList: FC<{}> = () => {
  const data = useSelector((state: Store) => state.todos.data);
  const inputText = useSelector((state: Store) => state.todos.searchText);

  const renderItem = data
    .filter((el) => {
      if (!el.completed) {
        return el;
      }
    })
    .filter((el) => {
      if (inputText === "") {
        return el;
      } else {
        return el.title.toLowerCase().includes(inputText.toLowerCase());
      }
    })
    .map((item, index) => {
      return (
        <TodoListItem
          key={item.id}
          data={item}
          index={index}
          id={item.id}
          lastButton={index == data.length - 1}
        />
      );
    });

  return <div>{renderItem}</div>;
};

export default ToDoList;
