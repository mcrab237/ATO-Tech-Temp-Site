import React from "react";
import { Code2, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-3 sm:mb-4">
              <Code2
                className="h-6 w-6 sm:h-7 sm:w-7 text-indigo-400"
                strokeWidth={2}
              />
              <span className="ml-2 text-lg sm:text-xl font-bold">
                ATO Tech
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Comprehensive developer education for the modern web.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
              Courses
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Frontend Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Backend Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Course Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
              Community
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Forums
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Student Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} ATO Tech. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <span className="mx-1.5 sm:mx-2 text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
