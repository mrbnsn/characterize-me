import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';
import { Accounts } from 'meteor/accounts-base';

import Characters from '/imports/api/characters';
import '/server/api/users';
import '/server/api/characters';

import DnDApi from '/server/api/dnd-api';

class ServerApp {
    dnd;

    constructor() {
        this.dnd = new DnDApi();
    }

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
    // server.dnd.request('spells');
  
});
