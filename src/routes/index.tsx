import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Meetup from 'pages/Meetup';
import NewEdit from 'pages/NewEdit';
import Profile from 'pages/Profile';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup/edit/:id" exact component={NewEdit} isPrivate />
      <Route path="/meetup/new" exact component={NewEdit} isPrivate />
      <Route path="/meetup/:id" exact component={Meetup} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
