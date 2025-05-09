import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import CurrencySelector from "./CurrencySelector";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-primary-600" strokeWidth={2} />
            <span className="ml-2 text-xl font-bold text-gray-900">
              ATO Tech
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Courses
            </button>
            <a
              href="#community"
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Community
            </a>
            <a
              href="#pricing"
              className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              Pricing
            </a>
            <CurrencySelector />
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                (window.location.href =
                  "https://community.atotech.dev/portal/?fcom_action=auth")
              }
            >
              Login
            </Button>
            <Button variant="primary" size="sm" onClick={scrollToPricing}>
              Join Now
            </Button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white h-full w-3/4 max-w-xs p-5 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <Code2 className="h-7 w-7 text-primary-600" strokeWidth={2} />
                  <span className="ml-2 text-lg font-bold text-gray-900">
                    ATO Tech
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToSection("about");
                  }}
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToSection("courses");
                  }}
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Courses
                </button>
                <a
                  href="#community"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Community
                </a>
                <a
                  href="#pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors"
                >
                  Pricing
                </a>
              </div>

              <div className="pt-2 mt-4 border-t border-gray-100">
                <div className="mb-4">
                  <CurrencySelector />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mb-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href =
                      "https://community.atotech.dev/portal/?fcom_action=auth";
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToPricing();
                  }}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
