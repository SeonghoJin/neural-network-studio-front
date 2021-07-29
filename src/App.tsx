// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Pages/main';
import TestRouter from './Router/test/TestRouter';
import configs from './config';
import './App.css';
import ProjectRouter from './Router/ProjectRouter';

function App() {
  return (
      <BrowserRouter>
          {configs.NODE_ENV === 'development'
          && <Route path="/test/:test_component/:id" exact={true} component={TestRouter}/>
          }
          <Route path={"/project"} component={ProjectRouter}></Route>
      </BrowserRouter>
  );
}

export default App;
