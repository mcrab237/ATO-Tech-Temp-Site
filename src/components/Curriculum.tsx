import React from "react";
import Container from "./Container";

type CurriculumItemProps = {
  number: string;
  title: string;
  description: string;
  modules: string[];
  color: string;
};

const CurriculumItem: React.FC<CurriculumItemProps> = ({
  number,
  title,
  description,
  modules,
  color,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className={`w-full p-6 rounded-t-xl ${color} text-white`}>
        <div className="text-3xl font-bold mb-2">{number}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
      <div className="flex-grow bg-white p-6 rounded-b-xl border border-gray-100 shadow-sm">
        <h4 className="font-semibold text-gray-900 mb-4">Modules Include:</h4>
        <ul className="space-y-2">
          {modules.map((module, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-5 h-5 bg-indigo-100 rounded-full text-indigo-600 flex items-center justify-center text-xs font-medium mr-2 mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-700">{module}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Curriculum: React.FC = () => {
  const tracks = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Master the technologies that power modern web interfaces.",
      color: "bg-indigo-600",
      modules: [
        "HTML5, CSS3 & JavaScript Fundamentals",
        "Responsive Design & CSS Frameworks",
        "React & State Management",
        "Building SPAs & Performance Optimization",
        "TypeScript & Advanced Patterns",
      ],
    },
    {
      number: "02",
      title: "Backend Development",
      description: "Build robust, scalable server-side applications and APIs.",
      color: "bg-indigo-700",
      modules: [
        "Node.js & Express Fundamentals",
        "Database Design & SQL/NoSQL",
        "RESTful API Development",
        "Authentication & Security",
        "Testing, Deployment & CI/CD",
      ],
    },
    {
      number: "03",
      title: "Mobile Development",
      description: "Create native-quality mobile apps for iOS and Android.",
      color: "bg-indigo-800",
      modules: [
        "React Native Fundamentals",
        "iOS & Android Platform Specifics",
        "Navigation & State Management",
        "Native Modules & Device Features",
        "App Store Deployment & Optimization",
      ],
    },
  ];

  return (
    <section id="courses" className="py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Present and Future Courses Access
          </h2>
          <p className="text-xl text-gray-600">
            Three complete tracks to take you from beginner to professional
            developer. All courses are updated with the latest technologies and
            best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <CurriculumItem
              key={index}
              number={track.number}
              title={track.title}
              description={track.description}
              modules={track.modules}
              color={track.color}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Curriculum;
