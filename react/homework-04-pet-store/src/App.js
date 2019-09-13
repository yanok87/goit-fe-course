import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage/AboutPage';
import PetsPage from './components/PetsPage/PetsPage';
import PetPage from './components/PetPage/PetPage';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
