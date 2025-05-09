import React from 'react';
import { Code, Database, Smartphone } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium text-sm mb-6 animate-fadeIn">
              Launch Promo: Save $100 with yearly plan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Modern Development <span className="text-indigo-600">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join our comprehensive coding courses and vibrant community to learn frontend, backend, and mobile app development from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg">
                Get Started for $25/mo
              </Button>
              <Button variant="outline" size="lg">
                View Curriculum
              </Button>
            </div>
            <div className="mt-8 text-gray-500 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <span className="font-medium">500+</span> developers already enrolled
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="col-span-2 bg-indigo-600 text-white p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 mr-2" />
                    <h3 className="font-medium">Complete Curriculum</h3>
                  </div>
                  <p className="text-indigo-100 text-sm">Learn all three paths with structured courses</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Database className="w-5 h-5 mr-2 text-indigo-600" />
                    <h3 className="font-medium">Backend</h3>
                  </div>
                  <p className="text-gray-600 text-sm">APIs, databases, and servers</p>
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