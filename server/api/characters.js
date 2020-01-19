import { Meteor } from 'meteor/meteor';
import Characters from '/imports/api/characters';

Meteor.methods({

    /**
     * Create a new character and associate with a user.
     * 
     * @param {*} param0 
     */
    createCharacter({ fullName, nickname, characterClass, race, background }) {

        const user = Meteor.user();
        if( user ) {

            // Insert new character.
            const character_id = Characters.insert({
                user_id: user._id,
                fullName,
                nickname,
                characterClass,
                race,
                background,
                createdAt: new Date(),
            });

            if( !character_id ) {
                return {
                    success: false,
                    message: 'Failed to create character.',
                }
            }

            // Update characters list for user.
            let characters = user.characters || [];
            characters.push(character_id);

            Meteor.users.update( { _id: user._id }, { $set: { characters } } );

            return {
                success: true,
                message: 'Character created!',
                character_id,
            }

        } else {
            return {
                success: false,
                message: 'Must be logged in to create a character',
            }
        }
    }, 

    /**
     * Fetch all characters belonging to the current user.
     * 
     * @return object
     */
    fetchUserCharacters() {

        const user = Meteor.user();
        let characters = [];

        if( user ) {

            characters = Characters.find({ user_id: user._id }).fetch();
            if( characters.length ) {
                return {
                    success: true,
                    message: 'User characters successfully retrieved',
                    characters,
                }
            } else {
                return {
                    success: false,
                    message: 'Unable to fetch user characters',
                    characters,
                }
            }

        } else {
            return {
                success: false,
                message: 'Must be logged in to fetch characters',
                characters,
            }
        }
    }

});