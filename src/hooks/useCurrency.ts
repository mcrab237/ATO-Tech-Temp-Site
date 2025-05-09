import { useState, useEffect } from "react";
import {
  currencies,
  defaultCurrency,
  getUserCurrency,
  convertAmount,
  formatCurrency,
} from "../utils/currencyConverter";
import { getUserCurrencyFromLocation } from "../utils/geolocation";

export interface CurrencyHook {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  availableCurrencies: string[];
  convertFromUSD: (amountUSD: number) => number;
  formatAmount: (amount: number) => string;
  getCurrencySymbol: (code?: string) => string;
  isLoading: boolean;
}

export const useCurrency = (): CurrencyHook => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<string>(defaultCurrency);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const availableCurrencies = Object.keys(currencies);

  useEffect(() => {
    // Set initial currency based on user's location
    const detectUserCurrency = async () => {
      try {
        setIsLoading(true);
        const userCurrency = await getUserCurrencyFromLocation();
        setSelectedCurrency(userCurrency);
      } catch (error) {
        console.error("Failed to detect user currency:", error);
        // Fall back to default currency
        setSelectedCurrency(defaultCurrency);
      } finally {
        setIsLoading(false);
      }
    };

    detectUserCurrency();
  }, []);

  const convertFromUSD = (amountUSD: number): number => {
    return convertAmount(amountUSD, selectedCurrency);
  };

  const formatAmount = (amountUSD: number): string => {
    // First convert the USD amount to the selected currency
    const convertedAmount = convertFromUSD(amountUSD);
    // Then format it with the currency symbol
    return formatCurrency(convertedAmount, selectedCurrency);
  };

  const getCurrencySymbol = (code?: string): string => {
    const currencyCode = code || selectedCurrency;
    return currencies[currencyCode]?.symbol || "$";
  };

  return {
    selectedCurrency,
    setSelectedCurrency,
    availableCurrencies,
    convertFromUSD,
    formatAmount,
    getCurrencySymbol,
    isLoading,
  };
};
