import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import { messages } from "./Redux/Reducers";


const reducers = {
  messages,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
