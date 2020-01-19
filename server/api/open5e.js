import { Meteor } from 'meteor/meteor';

import Open5eApi from '/server/lib/open5e-api';

const open5eapi = new Open5eApi();

Meteor.methods({

    /**
     * Get all backgrounds from open5e api.
     * 
     */
    async getBackgrounds() {

        try {
            const backgrounds = await open5eapi.request('backgrounds');
            return backgrounds.results;

        } catch (error) {
            console.error(error);
        }
    },

});