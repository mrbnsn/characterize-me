import { Meteor } from 'meteor/meteor';

import Characters from '/imports/api/characters';
import '/server/api/users';
import '/server/api/characters';
import '/server/api/dnd5e';
import '/server/api/open5e';

class ServerApp {

    constructor() {}
}

const server = new ServerApp();

Meteor.startup(() => {

    // server.createDefaultCharacters();
  
});


export default server