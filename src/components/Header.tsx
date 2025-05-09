import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

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
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                (window.location.href =
                  "https://atotech.dev/portal/?fcom_action=auth")
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
          <div className="md:hidden pt-2 pb-4">
            <div className="flex flex-col space-y-3">
              <button
                className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 text-left"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("about");
                }}
              >
                About
              </button>
              <button
                className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 text-left"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("courses");
                }}
              >
                Courses
              </button>
              <a
                href="#community"
                className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
              <a
                href="#pricing"
                className="text-base font-medium text-gray-700 hover:text-primary-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mb-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href =
                      "https://atotech.dev/portal/?fcom_action=auth";
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
