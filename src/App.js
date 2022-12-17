import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;
