import { useDispatch, useSelector } from "react-redux";
import { Store } from "../features/todos/types";
import changeSearchText from "../actions/changeSearchText";
import {objTargetValue} from '../features/todos/types';


const SearchBox = () => {
  const dispatch = useDispatch();
  const inputText = useSelector((state: Store) => state.todos.searchText);

  const onChangeSearchText = (e: objTargetValue) => {
    dispatch(changeSearchText(e.target.value));
  };
  return (
    <div>
      <input
        value={inputText}
        placeholder="enter a task name..."
        type="text"
        onChange={onChangeSearchText}
      ></input>
    </div>
  );
};

export default SearchBox;
