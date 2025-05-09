import React from "react";
import Container from "./Container";
import { Github, Twitter, Youtube, Coffee } from "lucide-react";
import image from "../../dist/assets/adaa.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-primary-50 to-white"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={image}
              alt="ATO Tech Founder"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hey, I'm ATO 👋
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With half a decade of experience in software development, I've
              built numerous applications for clients ranging from startups to
              established businesses. My expertise spans the entire development
              lifecycle, from conceptualization to deployment.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              I founded ATO Tech to share my knowledge and create the learning
              community I wished existed when I started my journey. Here, you'll
              find comprehensive, hands-on learning experiences designed to
              transform you into a skilled developer with real-world
              capabilities.
            </p>

            <div className="flex gap-6 mb-8">
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Coffee className="w-6 h-6" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  150+
                </div>
                <div className="text-gray-600">Students Taught</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  100+
                </div>
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
