import { Mongo } from 'meteor/mongo';

const Characters = new Mongo.Collection('characters');

Characters.allow({

    insert( userId, character ) {
        if( !userId ) {
            return false;
        }

        return character.user_id === userId;
    },

    update: function( userId, character, fields, modifier ) {
        if( !userId ) {
            return false;
        }
        
        return character.user_id === userId;
    }

});

export default Characters;
