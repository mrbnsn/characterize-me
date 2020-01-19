import axios from 'axios';

export default class Open5eApi {

    base_url;

    constructor() {
        this.base_url = "https://api.open5e.com/";
    }

    /**
     * Basic request method for open5e api.
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