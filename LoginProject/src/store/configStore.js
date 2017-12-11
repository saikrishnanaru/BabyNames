// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// //import reducers from '../reducers/reducers';

// let middleware = [thunk];
//   middleware = [...middleware];

// export default function configureStore() {
//   return createStore(
//     reducers,
//     applyMiddleware(thunk)
//   );
// }

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/reducers';
import thunk from 'redux-thunk'

let middleware = [thunk];
  middleware = [...middleware];

export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}