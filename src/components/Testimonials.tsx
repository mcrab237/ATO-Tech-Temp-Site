import React from 'react';
import Container from './Container';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 inline-block">★</span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="font-medium text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "This platform completely changed my career trajectory. I went from knowing basic HTML to landing a full-stack developer job in just 6 months.",
      name: "Sarah Johnson",
      role: "Frontend Developer at TechCorp",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
    },
    {
      quote: "The community aspect is what sets this apart. Having access to mentors and other students made the learning process so much more engaging.",
      name: "Michael Chen",
      role: "Mobile App Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
    },
    {
      quote: "I tried several online courses before, but the structured curriculum and hands-on projects here finally helped me truly understand backend development.",
      name: "Jamie Rodriguez",
      role: "Backend Engineer",
      image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">Join hundreds of developers who have transformed their careers with our courses.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;