import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { configureStore } from "./Store";
import { Provider } from "react-redux";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: roboto;
    }

    *::-webkit-scrollbar{
      width: 6px;
      height: 6px;
      background: transparent;
    }

    *::-webkit-scrollbar-thumb{
      background: #6424FF;
      border-radius: 20px;
    }
`;

const store = configureStore();
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate
        loading={<div>Loading...</div>}
        persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
