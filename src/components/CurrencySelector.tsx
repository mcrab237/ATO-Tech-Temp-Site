import React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { currencies } from "../utils/currencyConverter";
import type { CurrencyHook } from "../hooks/useCurrency";
import { useCurrencyContext } from "../contexts/CurrencyContext";

interface CurrencySelectorProps {
  currencyHook?: CurrencyHook;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currencyHook: propsCurrencyHook,
}) => {
  // Use either the props-provided hook or the context
  const contextCurrencyHook = useCurrencyContext();
  const currencyHook = propsCurrencyHook || contextCurrencyHook;

  const { selectedCurrency, setSelectedCurrency, availableCurrencies } =
    currencyHook;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {currencies[selectedCurrency].symbol} {selectedCurrency}
        </span>
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 rounded-md bg-white shadow-lg z-10 py-1 border border-gray-100">
          {availableCurrencies.map((currency) => (
            <button
              key={currency}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currency === selectedCurrency
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => {
                setSelectedCurrency(currency);
                setIsOpen(false);
              }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium">{currency}</span>
                  <span className="ml-1 text-xs text-gray-500">
                    {currencies[currency].name}
                  </span>
                </div>
                <span className="text-sm">{currencies[currency].symbol}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
