import React from 'react';
import { Code, Database, Smartphone, Users, MessageSquare, BookOpen, Sparkles, Award } from 'lucide-react';
import Container from './Container';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-100 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript, React, and modern frontend frameworks to build beautiful, responsive interfaces."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Learn Node.js, databases, API design, authentication, and server architecture to power your applications."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Build native iOS and Android apps or cross-platform solutions with React Native and Flutter."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Vibrant Community",
      description: "Connect with fellow developers, participate in discussions, and collaborate on projects together."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Get guidance, code reviews, and personalized advice from experienced industry professionals."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Resources",
      description: "Access course materials, tutorials, code samples, and documentation to support your learning."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Hands-On Projects",
      description: "Apply your skills to real-world projects that build your portfolio and demonstrate your abilities."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificates & Recognition",
      description: "Earn certificates upon completion of courses and showcase your achievements to potential employers."
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-600">A complete learning experience with courses, community, and ongoing support.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;