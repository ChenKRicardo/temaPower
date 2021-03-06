import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DevTools,loadServer} from 'jira-dev-tool'
//放在jira-dev-tool后面这样可以覆盖里面的样式
import 'antd/dist/antd.less'
import { AppProviders } from 'context';
import { BrowserRouter } from 'react-router-dom';
loadServer(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools/>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
      </AppProviders>
    </React.StrictMode>, 
  document.getElementById('root')
  );
})


reportWebVitals();
