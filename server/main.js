import { Meteor } from 'meteor/meteor';

import Characters from '/imports/api/characters';
import '/server/api/users';
import '/server/api/characters';
import '/server/api/dnd5e';

class ServerApp {

    constructor() {}

    createDefaultCharacters() {
        const characters = Characters.find({});
    
        if( !characters.length ) {
            Characters.insert({
                user_id: "eHxaCdrGXs2Bq2yDj",
                fullname: "Harry Barry",
                domain: "Lost Mines of Phandelver",
                createdAt: new Date(),
                attributes: [
                    {
                        type: 'text',
                        title: 'Spells',
                        description: 'Currently learned spells.',
                        attributes: [
                            {
                                type: 'text',
                                title: 'Level 1',
                                description: 'Level 1 spells',
                                attributes: [
                                    {
                                        type: 'text',
                                        title: 'Magic Missiles',
                                        description: 'Target 3 random enemies',
                                        attributes: [],
                                    },
                                    {
                                        type: 'text',
                                        title: 'Freeze',
                                        description: 'Freeze an enemy',
                                        attributes: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        }
    }
}

const server = new ServerApp();

Meteor.startup(() => {

    // server.createDefaultCharacters();
  
});


export default server