import React from 'react';
import Container from './Container';
import { Github, Twitter, Youtube, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
              alt="ATO Tech Founder" 
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hey, I'm Alex 👋</h2>
            <p className="text-lg text-gray-700 mb-6">
              With over a decade of experience in software development, I've worked with companies 
              ranging from startups to Fortune 500s. My passion is making complex technical concepts 
              accessible and helping others grow in their development journey.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              I created ATO Tech to provide the kind of education and community I wish I had when 
              I was starting out. Here, you'll find practical, project-based learning with direct 
              mentorship and a supportive community.
            </p>
            
            <div className="flex gap-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                <Coffee className="w-6 h-6" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-gray-600">Students Taught</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-gray-600">Video Tutorials</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;