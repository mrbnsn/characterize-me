import { Meteor } from 'meteor/meteor';

import DnDApi from '/server/lib/dnd-api';

const dndapi = new DnDApi();

Meteor.methods({

    /**
     * Get all races from dnd5e api.
     * 
     */
    async getRaces() {

        try {
            const races = await dndapi.request('races');
            return races.results;

        } catch (error) {
            console.error(error);
        }
    },

    /**
     * Get all classes from dnd5e api.
     * 
     */
    async getClasses() {

        try {
            const classes = await dndapi.request('classes');
            return classes.results;

        } catch (error) {
            console.error(error);
        }
    }

});