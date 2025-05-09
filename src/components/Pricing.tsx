import React, { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { useCurrency } from "../hooks/useCurrency";
import CurrencySelector from "./CurrencySelector";

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const currencyHook = useCurrency();
  const { formatAmount, isLoading, selectedCurrency } = currencyHook;

  // Base prices in USD
  const monthlyPriceUSD = 25;
  const annualPriceUSD = 200;
  const savingsUSD = 100;

  // Payment URLs
  const getPaymentUrl = () => {
    const productId = isAnnual ? "1225" : "1224";
    return `https://atotech.dev/?currency=${selectedCurrency}&add-to-cart=${productId}`;
  };

  const features = [
    "Access to all courses (Frontend, Backend, Mobile)",
    "Community membership",
    "Weekly live coding sessions",
    "Project reviews & feedback",
    "Private Discord community",
    "Downloadable resources & code samples",
    "Course completion certificates",
  ];

  return (
    <section id="pricing" className="py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-end mb-4">
            {isLoading ? (
              <div className="flex items-center text-sm text-gray-600">
                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                <span>Detecting location...</span>
              </div>
            ) : (
              <CurrencySelector currencyHook={currencyHook} />
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to become a professional developer at an
            affordable price.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-lg ${
                !isAnnual
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <div className="relative">
              <div className="w-12 h-6 bg-gray-200 rounded-full"></div>
              <div
                className={`absolute top-0.5 w-5 h-5 bg-indigo-600 rounded-full transition-all ${
                  isAnnual ? "left-6" : "left-0.5"
                }`}
              ></div>
            </div>
            <button
              className={`px-4 py-2 rounded-lg ${
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

        <div className="max-w-lg mx-auto relative">
          {isAnnual && (
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
              Save {formatAmount(savingsUSD)} with annual plan
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-indigo-600 text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Complete Access</h3>
              <p className="text-indigo-100 mb-4">
                Everything you need to master development
              </p>

              <div className="flex items-center justify-center">
                {isLoading ? (
                  <div className="flex items-center">
                    <Loader2 className="h-6 w-6 mr-2 animate-spin text-white" />
                    <span className="text-xl">Loading...</span>
                  </div>
                ) : (
                  <>
                    <span className="text-4xl font-bold">
                      {formatAmount(
                        isAnnual ? annualPriceUSD : monthlyPriceUSD
                      )}
                    </span>
                    <span className="ml-2 text-indigo-100">
                      / {isAnnual ? "year" : "month"}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" size="lg" href={getPaymentUrl()}>
                JOIN NOW
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
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
