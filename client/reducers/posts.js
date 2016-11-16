// a reducer takes in two things: 
  // 1. the action (info about what happened)
  // 2. copy of current state
// want to return an updated copy of the store.

// the first time this runs state is set to an empty array.

// all  reducers run for every single action.  If the action doesn't align,
// it will just return the default state.  
function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
    const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating.
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
}

export default posts;