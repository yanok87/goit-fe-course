/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/reader" render={props => <Reader {...props} />} />
        <Redirect to={{ pathname: '/reader', search: '?item=1' }} />
      </Switch>
    </>
  );
};

export default App;
