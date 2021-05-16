import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';


ReactDOM.render(
   <React.StrictMode>
      <Provider store={store.store}>
          <PersistGate loading={null} persistor={store.persistor}>
              <BrowserRouter>
                 <App />
              </BrowserRouter>
         </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
