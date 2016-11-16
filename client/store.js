import {createStore, compose} from  'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

// ES6 syntax, same as saying posts: posts, comments: comments
const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const store = createStore(rootReducer, defaultState, enhancers);

//browserHistory keeps track of where you go with reactRouter.  
export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot){
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}
export default store;