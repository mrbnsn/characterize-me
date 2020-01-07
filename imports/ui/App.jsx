import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

import Login from '/imports/ui/screens/Login';
import Home from '/imports/ui/screens/Home';

import { client } from '/client/main';

const App = () => {

  return (
    <div>
      <div>
        { Meteor.userId() ? (
          <Home />
          ) : (
          <Login /> 
          )}
      </div>
    </div>
  );

}

export default App;
