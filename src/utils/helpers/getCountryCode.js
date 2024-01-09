import { GET_OPENCAGE_API_URL } from "../constants";

const getCurrentPosition = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  }).then((position) => position.coords);
};

const getCountryCode = async () => {
  try {
    const { latitude, longitude } = await getCurrentPosition();
    const OPENCAGE_URL = GET_OPENCAGE_API_URL(latitude, longitude);

    const response = await fetch(OPENCAGE_URL);
    const data = await response.json();

    const countryComponent =
      data.results && data.results.length > 0
        ? data.results[0].components.country_code.toUpperCase()
        : null;

    return countryComponent;
  } catch (error) {
    console.error("Error fetching geo location:", error);
    // Handle the error gracefully, maybe throw a custom error or return a specific value.
    return null;
  }
};

export default getCountryCode;
