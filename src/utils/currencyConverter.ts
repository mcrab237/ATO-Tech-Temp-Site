interface CurrencyData {
  code: string;
  symbol: string;
  rate: number;
  name: string;
}

// Currency exchange rates based on 1 USD
export const currencies: Record<string, CurrencyData> = {
  USD: { code: "USD", symbol: "$", rate: 1, name: "US Dollar" },
  XAF: {
    code: "XAF",
    symbol: "FCFA",
    rate: 630,
    name: "Central African CFA Franc",
  },
  GHS: { code: "GHS", symbol: "₵", rate: 14.75, name: "Ghanaian Cedi" },
  NGN: { code: "NGN", symbol: "₦", rate: 1580, name: "Nigerian Naira" },
  KES: { code: "KES", symbol: "KSh", rate: 129.1, name: "Kenyan Shilling" },
};

// Default fallback currency
export const defaultCurrency = "USD";

// Get currency based on country code (common two-letter country codes)
export const getCurrencyByCountry = (countryCode: string): string => {
  const countryToCurrency: Record<string, string> = {
    // Central African CFA franc countries
    CM: "XAF", // Cameroon
    CF: "XAF", // Central African Republic
    TD: "XAF", // Chad
    CG: "XAF", // Republic of the Congo
    GQ: "XAF", // Equatorial Guinea
    GA: "XAF", // Gabon

    // Other African countries
    GH: "GHS", // Ghana
    NG: "NGN", // Nigeria
    KE: "KES", // Kenya

    // Default for other countries
    US: "USD", // United States
  };

  return countryToCurrency[countryCode] || defaultCurrency;
};

// Convert USD to target currency
export const convertAmount = (
  amountUSD: number,
  targetCurrency: string
): number => {
  const currency = currencies[targetCurrency] || currencies[defaultCurrency];
  return parseFloat((amountUSD * currency.rate).toFixed(2));
};

// Format amount with currency symbol (doesn't convert, just formats)
export const formatCurrency = (
  amount: number,
  currencyCode: string
): string => {
  const currency = currencies[currencyCode] || currencies[defaultCurrency];

  return `${currency.symbol}${amount.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
};

// Get user's currency based on browser's locale information
export const getUserCurrency = (): string => {
  try {
    // Try to get country from browser's language settings
    const countryCode = navigator.language.split("-")[1];
    if (countryCode) {
      const currencyCode = getCurrencyByCountry(countryCode);
      if (currencies[currencyCode]) {
        return currencyCode;
      }
    }

    // Fallback to geolocation API if available and allowed
    // This is just a placeholder - actual implementation would need a proper
    // geolocation to country code service

    return defaultCurrency;
  } catch (error) {
    console.error("Error detecting currency:", error);
    return defaultCurrency;
  }
};
