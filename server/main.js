import { Meteor } from 'meteor/meteor';
import Characters from '/imports/api/characters';

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
