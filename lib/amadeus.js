// Amadeus API interaction logic

const axios = require('axios');

const AMADEUS_API_URL = 'https://api.amadeus.com/v1';

const Amadeus = {
    getFlightOffers: async function (params) {
        const response = await axios.get(`${AMADEUS_API_URL}/shopping/flight-offers`, { params });
        return response.data;
    },
    getAirportData: async function (airportCode) {
        const response = await axios.get(`${AMADEUS_API_URL}/locations/airports/${airportCode}`);
        return response.data;
    }
};

module.exports = Amadeus;