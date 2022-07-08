import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';


const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* <Counter
          counter={getState().value}
          inc={inc}
          dec={dec}
          rnd={() => {
            const value = Math.floor(Math.random() * 10);
            rnd(value);
          }}
        /> */}
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </React.StrictMode>
);




