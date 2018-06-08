import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import App from '../App';

export default () => (
  <Switch>
    <Route path="/page2" render={()=>(
    <div>
      <h4>It's a page 2</h4>
      <Link to="/">Go Back</Link>
    </div>)} />
    <Route path="/page" render={()=>(
    <div>
      <h4>It's a page</h4>
      <Link to="/">Go Back</Link>
    </div>)} />
    <Route path="/" render={()=> (
    <div>
      <h1>Welcome to this boilerplate!</h1>
      <Link to="/page">Page 1</Link>
      <br />
      <Link to="/page2">Page 2</Link>
    </div>)} />
  </Switch>
);
