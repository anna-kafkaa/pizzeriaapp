import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import initialState from './initialState'; // Pamiętaj o poprawnej ścieżce
import tablesReducer from './tablesRedux'; // Importujemy reducer, który zaraz stworzymy

const subreducers = {
  tables: tablesReducer, // Tutaj dodamy nasz reducer dla 'tables'
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;





