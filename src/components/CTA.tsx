import React from "react";
import Container from "./Container";
import Button from "./Button";

const CTA: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-indigo-600 py-16 px-8 shadow-xl">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 transform opacity-20 blur-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
              className="text-indigo-300"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="392"
                  x2="392"
                  y1="0"
                  y2="404"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="392" cy="202" r="202" fill="url(#paint0_linear)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Your Development Journey Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-indigo-100">
              Join hundreds of successful developers who have transformed their
              careers with our comprehensive courses and supportive community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50"
                onClick={scrollToPricing}
              >
                Join for $25/mo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-indigo-500"
              >
                View Curriculum
              </Button>
            </div>
            <p className="mt-6 text-indigo-100 text-sm">
              No commitment required. 14-day money-back guarantee.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
