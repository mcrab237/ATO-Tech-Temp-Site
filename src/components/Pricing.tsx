import React, { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { useCurrencyContext } from "../contexts/CurrencyContext";
import CurrencySelector from "./CurrencySelector";

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const currencyHook = useCurrencyContext();
  const { formatAmount, isLoading, selectedCurrency } = currencyHook;

  // Base prices in USD
  const monthlyPriceUSD = 25;
  const annualPriceUSD = 200;
  const savingsUSD = 100;

  // Payment URLs
  const getPaymentUrl = () => {
    const productId = isAnnual ? "1225" : "1224";
    return `https://community.atotech.dev/?currency=${selectedCurrency}&add-to-cart=${productId}`;
  };

  const features = [
    "Access to all present and future courses (Frontend, Backend, Mobile)",
    "Community membership",
    "Project reviews & feedback",
    "Private community",
    "Downloadable resources & code samples",
    "Course completion certificates",
    "Priority support",
    "Early access to new content",
  ];

  return (
    <section id="pricing" className="py-10 md:py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="flex justify-center md:justify-end mb-4">
            {isLoading ? (
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 animate-spin" />
                <span>Detecting location...</span>
              </div>
            ) : (
              <CurrencySelector />
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4 sm:px-0">
            Everything you need to become a professional developer at an
            affordable price.
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 md:mb-8">
            <button
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base ${
                !isAnnual
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <div className="relative">
              <div className="w-10 sm:w-12 h-5 sm:h-6 bg-gray-200 rounded-full"></div>
              <div
                className={`absolute top-0.5 w-4 sm:w-5 h-4 sm:h-5 bg-indigo-600 rounded-full transition-all ${
                  isAnnual ? "left-5 sm:left-6" : "left-0.5"
                }`}
              ></div>
            </div>
            <button
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base ${
                isAnnual
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Yearly{" "}
              <span className="text-xs py-0.5 px-1.5 bg-green-100 text-green-700 rounded">
                Save {formatAmount(savingsUSD)}
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto relative">
          {isAnnual && (
            <div className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-md">
              Save {formatAmount(savingsUSD)} with annual plan
            </div>
          )}

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-indigo-600 text-white p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                Complete Access
              </h3>
              <p className="text-indigo-100 text-sm sm:text-base mb-3 sm:mb-4">
                Everything you need to master development
              </p>

              <div className="flex items-center justify-center">
                {isLoading ? (
                  <div className="flex items-center">
                    <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 mr-2 animate-spin text-white" />
                    <span className="text-lg sm:text-xl">Loading...</span>
                  </div>
                ) : (
                  <>
                    <span className="text-3xl sm:text-4xl font-bold">
                      {formatAmount(
                        isAnnual ? annualPriceUSD : monthlyPriceUSD
                      )}
                    </span>
                    <span className="ml-2 text-indigo-100 text-sm sm:text-base">
                      / {isAnnual ? "year" : "month"}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg" href={getPaymentUrl()}>
                JOIN NOW
              </Button>

              <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                No commitments. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
