import React from 'react';
import { MessagesSquare, Users, Headphones, Award } from 'lucide-react';
import Container from './Container';

type CommunityFeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const CommunityFeature: React.FC<CommunityFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Community: React.FC = () => {
  const features = [
    {
      icon: <MessagesSquare className="w-6 h-6" />,
      title: "Active Discussion Forums",
      description: "Engage in topic-based discussions, ask questions, and share your knowledge with peers."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Weekly Group Sessions",
      description: "Join live coding sessions, workshops, and project reviews with instructors and fellow students."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "1-on-1 Mentorship",
      description: "Schedule personalized sessions with experienced developers to get tailored guidance."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Project Showcases",
      description: "Present your work, get feedback, and celebrate achievements with the community."
    }
  ];

  return (
    <section id="community" className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Thriving Developer Community</h2>
            <p className="text-xl text-gray-600 mb-8">
              Learning to code is better together. Connect with fellow developers, get help when you're stuck, and accelerate your growth through collaboration.
            </p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <CommunityFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-2xl transform -rotate-2"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl">Community Chat</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">24 online</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Alex", text: "Has anyone deployed a React app to Vercel recently?", time: "2m ago" },
                    { name: "Sarah", text: "Yes! I just did that yesterday. What issues are you having?", time: "1m ago" },
                    { name: "Carlos", text: "Their CI/CD pipeline is super smooth. What's the problem?", time: "Just now" }
                  ].map((message, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium flex-shrink-0">
                        {message.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-900">{message.name}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-gray-700">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 relative">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Type your message..."
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-600 px-2 py-1">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;