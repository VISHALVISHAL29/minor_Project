const axios = require("axios");
const key = process.env.API_KEY;

const getCordsForAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${key}`
    );

    const data = response.data;

    if (!data || data.status === "ZERO_RESULTS") {
      throw new Error("Could not find location for the specified address");
    }

    const location = data.results[0].geometry.location;
    return { lat: location.lat, lon: location.lng };
  } catch (error) {
    console.error("Geocoding Error:", error);
    return null;
  }
};

module.exports = { getCordsForAddress };
