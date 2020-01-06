import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from '/imports/api/characters';

import App from '/imports/ui/App';
import Register from '/imports/ui/screens/Register';
import CreateCharacter from '/imports/ui/screens/CreateCharacter';

import AppBar from '/imports/ui/components/AppBar';

class ClientApp {

  userData;
  characters;

  constructor() {

    this.userData = Meteor.subscribe('userData');
    this.characters = Meteor.subscribe('characters');

  }

  /**
   * Render routes with React Router.
   *  @return React.Component
   */
  renderRoutes = () => (
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/create-character" component={CreateCharacter} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )


}

const client = new ClientApp();

Meteor.startup(() => {
  render(client.renderRoutes(), document.getElementById('react-target'));
});

export { client }
