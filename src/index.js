import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { App } from './scenes/App/App';
import { store } from './store/Store';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
);
