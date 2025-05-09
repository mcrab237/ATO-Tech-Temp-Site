import React from "react";
import { Code, Database, Smartphone, Loader2 } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { useCurrencyContext } from "../contexts/CurrencyContext";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Base prices in USD
  const monthlyPriceUSD = 25;
  const savingsUSD = 100;

  // Use the currency context
  const { formatAmount, isLoading } = useCurrencyContext();

  // Profile images from randomuser.me
  const profileImages = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/86.jpg",
    "https://randomuser.me/api/portraits/women/63.jpg",
  ];

  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-xs md:text-sm mb-4 md:mb-6 animate-fadeIn">
              Launch Promo: Save {isLoading ? "..." : formatAmount(savingsUSD)}{" "}
              with yearly plan
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Master Modern Development{" "}
              <span className="text-indigo-600">Skills</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Join my comprehensive coding courses and vibrant community to
              learn frontend, backend, and mobile app development from industry
              experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
              <Button size="lg" className="w-full sm:w-auto" href="#pricing">
                {isLoading ? (
                  <div className="flex items-center">
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span>Loading...</span>
                  </div>
                ) : (
                  <>Join Now for {formatAmount(monthlyPriceUSD)}/mo</>
                )}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => scrollToSection("courses")}
              >
                View Courses
              </Button>
            </div>
            <div className="mt-6 md:mt-8 text-gray-500 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {profileImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Student ${i + 1}`}
                    className="inline-block h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="ml-3 md:ml-4 text-sm md:text-base">
                <span className="font-medium">10+</span> developers already
                enrolled
              </div>
            </div>
          </div>

          {/* Mobile card view */}
          <div className="block lg:hidden mt-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-5">
                <div className="sm:col-span-2 bg-indigo-600 text-white p-3 md:p-4 rounded-lg">
                  <div className="flex items-center mb-1 md:mb-2">
                    <Code className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <h3 className="font-medium text-sm md:text-base">
                      Complete Curriculum
                    </h3>
                  </div>
                  <p className="text-indigo-100 text-xs md:text-sm">
                    Learn all three paths with structured courses
                  </p>
                </div>
                <div className="bg-gray-100 p-3 md:p-4 rounded-lg">
                  <div className="flex items-center mb-1 md:mb-2">
                    <Database className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-600" />
                    <h3 className="font-medium text-sm md:text-base">
                      Backend
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    APIs, databases, and servers
                  </p>
                </div>
                <div className="bg-gray-100 p-3 md:p-4 rounded-lg">
                  <div className="flex items-center mb-1 md:mb-2">
                    <Smartphone className="w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-600" />
                    <h3 className="font-medium text-sm md:text-base">Mobile</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    iOS and Android apps
                  </p>
                </div>
                <div className="sm:col-span-2 bg-gray-100 p-3 md:p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-sm md:text-base">
                      Community Access
                    </div>
                    <div className="text-indigo-600 font-bold text-sm md:text-base">
                      Included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop card view */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="col-span-2 bg-indigo-600 text-white p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 mr-2" />
                    <h3 className="font-medium">Complete Curriculum</h3>
                  </div>
                  <p className="text-indigo-100 text-sm">
                    Learn all three paths with structured courses
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Database className="w-5 h-5 mr-2 text-indigo-600" />
                    <h3 className="font-medium">Backend</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    APIs, databases, and servers
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Smartphone className="w-5 h-5 mr-2 text-indigo-600" />
                    <h3 className="font-medium">Mobile</h3>
                  </div>
                  <p className="text-gray-600 text-sm">iOS and Android apps</p>
                </div>
                <div className="col-span-2 bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">Community Access</div>
                    <div className="text-indigo-600 font-bold">Included</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
