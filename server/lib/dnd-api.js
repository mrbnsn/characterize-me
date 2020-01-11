import axios from 'axios';

export default class DnDApi {

    base_url;

    constructor() {
        this.base_url = "http://www.dnd5eapi.co/api/";
    }

    /**
     * Basic request method for dnd5e api.
     * 
     * @param {string} endpoint 
     * @param {object} params 
     */
    async request( endpoint, params={} ) {
        try {
            const response = await axios.get(this.base_url + endpoint, params);
            return response.data;
            
        } catch (error) {
            console.error(error);
        }
    }



}