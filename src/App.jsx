import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  </Router>
);

export default App;
