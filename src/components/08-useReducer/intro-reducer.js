/**************************************************
  INITIAL STATE
**************************************************/
const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

/**************************************************
  CREATING REDUCER
**************************************************/
const todoReducer = (state = initialState, action) => {
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state;
};


/**************************************************
  FIRST INITIALIZATION
**************************************************/
let todos = todoReducer();



/**************************************************
  CREATING NEW ACTION
**************************************************/
const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
};
const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}

todos = todoReducer(initialState, agregarTodoAction);



console.log(todos);
