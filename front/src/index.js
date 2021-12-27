import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from './context/themeContext'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
       <ThemeContextProvider>
         <App />
        </ThemeContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
