export interface TodoItem {
  id: string | number;
  title: string;
  description: string;
  completed: boolean;
}

export interface Store {
  todos: {
    data: TodoItem[];
    searchText: string;
  };
  filters: {
    data: string;
  };
}


export interface objTargetValue {
  target: {
    value: string;
  };
}

