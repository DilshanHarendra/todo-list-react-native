const init = {
  todos: [],
};

function reducer(state = init, action) {
  switch (action.type) {
    case 'add': {
      console.log(action);
      let arr = [action.todo, ...state.todos].filter((t) => {
        return t != undefined;
      });
      return {...state, todos: arr};
    }
    case 'remove': {
      let index = state.todos.findIndex((todo) => todo.id == action.todo.id);
      state.todos.splice(index, 1);
      return state;
    }
    default: {
      return state;
    }
  }
}
export default reducer;
