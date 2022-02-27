const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const initialState = {
  todos: {
    items: [{ id: "a4f5beaa-a7d6-493b-ad30-2e123e7", text: "Initial state", completed: false }],
    fiters: [
      {
        id: "a4f5beaa-a7d6-493b-ad30-2e123e7",
        text: "Initial state filters",
        completed: false,
      },
    ],
  },
  counter: {
    count: 0,
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: {
          items: [...state.todos.items, todo(undefined, action)],
        },
      };
    case "TOGGLE_TODO":
      state.todos.map((t) => todo(t, action));
    default:
      return state;
  }
};

export default todos;
