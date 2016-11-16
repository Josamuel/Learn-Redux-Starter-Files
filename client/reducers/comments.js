function postComments(state = [], action){
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
      // initially slice from the start to the value we want to delete.
        ...state.slice(0, action.i),
      // then slice from the value after the one we want to delete to the end.
        ...state.slice(action.i + 1)
        // no need for a concat here, the state.slices are two smaller arrays
        // being placed into a larger array.
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action){
  if(typeof action.postId !== 'undefined'){
    return{
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}



export default comments;