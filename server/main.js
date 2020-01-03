import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';
import { Accounts } from 'meteor/accounts-base';

import Characters from '/imports/api/characters'; // store with other collections in /imports/api/collections.js
// import '/server/api/users';

function insertCharacter(name, characterClass, race, backstory) {
  Characters.insert({ name, characterClass, race, backstory, createdAt: new Date() });
}

Meteor.startup(() => {
  
  if (Characters.find().count() === 0) {

    insertCharacter(
      'Domnhall Sinclair',
      'Cleric',
      'Dwarf',
      'Just a really pious dwarf guy.',
    );

  }
});
