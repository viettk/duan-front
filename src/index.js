import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListDanhmuc from './Danhmuc/DanhmucQl/ListDanhmuc';
import PrivateRoutes from './Auth/PrivateRoutes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path={["/danh-muc","/danh-muc/page"]} component={ListDanhmuc} />
        {/* <PrivateRoutes component={ListDanhmuc} authed={false} path='/admin'  /> */}
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
