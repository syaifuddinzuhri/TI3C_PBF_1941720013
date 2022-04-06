import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  EDIT_TODO,
} from "./actionsTypes";

let TodoId = 2;

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: TodoId++,
    text,
  },
});

export const deleteTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id: id,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id: id,
  },
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: {
    id: id,
    text: text,
  },
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});
