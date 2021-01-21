import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Header } from './components';
import { GlobalProvider } from './context/GlobalState';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { GlobalStyles, theme } from './styles';

const App = () => (
  <GlobalProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </ThemeProvider>
  </GlobalProvider>
);

export default App;
