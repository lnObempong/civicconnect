// src/utils/geocode.js
import axios from "axios";

const API_KEY = "92d4004f3de24b20bdf2c29678ba53c4";
const BASE_URL = "https://api.opencagedata.com/geocode/v1/json";

export const reverseGeocode = async (lat, lng) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: `${lat},${lng}`,
      },
    });
    if (response.data.results.length > 0) {
      return response.data.results[0].formatted;
    }
    return "Address not found";
  } catch (error) {
    console.error("Reverse geocoding failed:", error);
    return null;
  }
};
