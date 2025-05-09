import { getCurrencyByCountry, defaultCurrency } from "./currencyConverter";

// API endpoint to get user's location
const GEO_API_URL = "https://ipapi.co/json/";

interface GeoResponse {
  country_code: string;
  error?: boolean;
}

export const getUserCountry = async (): Promise<string> => {
  try {
    // First try to get from browser language
    const browserCountry = getBrowserCountry();
    if (browserCountry) {
      return browserCountry;
    }

    // If that fails, try to get from IP
    const response = await fetch(GEO_API_URL);
    const data = (await response.json()) as GeoResponse;

    if (data.error || !data.country_code) {
      return "US"; // Default to US if error
    }

    return data.country_code;
  } catch (error) {
    console.error("Error detecting user country:", error);
    return "US"; // Default to US if error
  }
};

export const getBrowserCountry = (): string | null => {
  try {
    // Try to extract country code from browser language
    const language = navigator.language || (navigator as any).userLanguage;
    if (language && language.includes("-")) {
      const countryCode = language.split("-")[1].toUpperCase();
      if (countryCode.length === 2) {
        return countryCode;
      }
    }
    return null;
  } catch (error) {
    console.error("Error getting browser country:", error);
    return null;
  }
};

export const getUserCurrencyFromLocation = async (): Promise<string> => {
  try {
    const countryCode = await getUserCountry();
    return getCurrencyByCountry(countryCode);
  } catch (error) {
    console.error("Error getting currency from location:", error);
    return defaultCurrency;
  }
};
