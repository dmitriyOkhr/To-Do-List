import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./types";

const initialState = {
  data: [],
  searchText: "",
};

export default function todosReducer(state = initialState, action: any) {
  switch (action.type) {
    case "todos/addItem": {
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: uuidv4(),
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };
    }
    case "todos/deleteItem": {
      return {
        ...state,
        data: state.data.filter((el: TodoItem) => el.id !== action.payload),
      };
    }
    case "todos/updateItem": {
      return {
        ...state,
        data: state.data.map((item: TodoItem) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
              description: action.payload.description,
            };
          } else {
            return item;
          }
        }),
      };
    }
    case "todos/moveItemUp": {
      const tmp = state.data[action.payload];
      state.data[action.payload] = state.data[action.payload - 1];
      state.data[action.payload - 1] = tmp;
      return { ...state, data: [...state.data] };
    }
    case "todos/moveItemDown": {
      const tmp = state.data[action.payload];
      state.data[action.payload] = state.data[action.payload + 1];
      state.data[action.payload + 1] = tmp;
      return { ...state, data: [...state.data] };
    }
    case "todos/changeCondition": {
      return {
        ...state,
        data: state.data.map((item: TodoItem) => {
          if (item.id !== action.payload.id) {
            return item;
          } else {
            return { ...item, completed: action.payload.completed };
          }
        }),
      };
    }
    case "todos/changeSearchText": {
      return {
        ...state,
        searchText: action.payload,
      };
    }
    default:
      return state;
  }
}
