import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk"

import createSagaMiddleware from "redux-saga"
import rootSaga from './saga'

import { counter } from "./modules/counter"

const Reducer =  combineReducers({
  counter
});

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    Reducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        sagaMiddleware
      )
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore()