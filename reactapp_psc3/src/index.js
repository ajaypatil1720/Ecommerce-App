import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/dist';
import ContextProvide from './component/Context';

import { Provider } from 'react-redux';
import  store  from '../src/pages/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store=store.
store.subscribe(()=>console.log(store.getState()));

root.render(
  <Provider store={store}>
  <ContextProvide>

    <BrowserRouter>
    
      <App /> 
      
    </BrowserRouter>
  </ContextProvide>
  </Provider>

  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
