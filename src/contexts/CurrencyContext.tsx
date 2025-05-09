import React, { createContext, useContext, ReactNode } from "react";
import { useCurrency, CurrencyHook } from "../hooks/useCurrency";

// Create the context
const CurrencyContext = createContext<CurrencyHook | undefined>(undefined);

// Create a provider component
export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Use the currency hook to get currency data
  const currencyHook = useCurrency();

  return (
    <CurrencyContext.Provider value={currencyHook}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useCurrencyContext = (): CurrencyHook => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error(
      "useCurrencyContext must be used within a CurrencyProvider"
    );
  }
  return context;
};
