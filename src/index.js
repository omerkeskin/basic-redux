import {createStore}  from '../node_modules/redux/es/redux.mjs';

 const reducer = (state = [], action) => {
  console.log('reducer', state, action);
  return state;
};


const store = createStore(reducer);

// module 1
store.subscribe(() => {
  console.log('module 1 subscribe', store.getState());
});

// module 2
store.dispatch({ type: 'ADD_USER'});