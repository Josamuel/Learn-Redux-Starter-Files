import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';
//going to take these reducers and combine using the combinereducers method.
import posts from './posts';
import comments from './comments';


// need the router to document the change of the urls.  We want to log url changes to redux. 
const rootReducer = combineReducers({
  posts, comments, routing:routerReducer
});

export default rootReducer