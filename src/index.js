import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import GlobalStyle from './globalStyle'


ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);

