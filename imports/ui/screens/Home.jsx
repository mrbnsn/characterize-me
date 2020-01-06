import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

import { useHistory } from "react-router-dom";
import { Button } from 'semantic-ui-react';

import NewCharacterCard from '/imports/ui/components/cards/NewCharacter';

const Home = (props) => {

  console.log(Meteor.user());
  console.log(Meteor.userId());

  let history = useHistory();

  // TODO: use semantic ui grid layout for this.

  return (
    <div>
        <div>
            <p>Show a list of created character cards here, with a "+" card to create a new one.</p>
            <NewCharacterCard handleClick={handleCreateCharacter} />
            <Button color='red' fluid size='small' onClick={handleLogout}>Logout</Button>
        </div>
    </div>
  );

  function handleCreateCharacter() {
    console.log('create character');
    history.push("/create-character");
  }

  function handleLogout() {
    Meteor.logout((err) => {
      if( !err ) {
        history.push("/");
      } else {
        console.log(err);
      }
      
    });
  }
}

export default Home;
