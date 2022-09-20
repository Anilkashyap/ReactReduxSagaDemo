import React from 'react';
import { Provider } from 'react-redux';
import Home from './Home';
import { testSaga } from './sagas';


import { createStore, combineReducers,applyMiddleware} from 'redux';
import AppReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    user: AppReducer,
  });
  const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(testSaga);
export default function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}