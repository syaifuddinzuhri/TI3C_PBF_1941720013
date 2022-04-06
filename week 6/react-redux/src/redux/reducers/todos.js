import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from "../actions/actionsTypes";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      const newTodos = {
        todos: [...state.todos, { id, text, completed: false }],
      };
      return newTodos;
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }

    case EDIT_TODO: {
      const { id, text } = action.payload;
      state.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
      });
      const todos = (state.todos = [...state.todos]);
      return { todos };
    }

    case REMOVE_TODO: {
      const numIndex = parseInt(action.payload.id);
      const todos = state.todos.filter((todo) => todo.id !== numIndex);
      return { todos };
    }

    default: {
      return state;
    }
  }
};

export default todos;
