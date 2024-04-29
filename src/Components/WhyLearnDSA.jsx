import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const WhyLearnDsa = () => {
  const features = [
    {
      title: 'Problem-Solving Skills',
      description:
        'Develop critical thinking and problem-solving abilities by mastering data structures and algorithms.',
    },
    {
      title: 'Coding Efficiency',
      description:
        'Write efficient and optimized code for better performance and scalability.',
    },
    {
      title: 'Technical Interviews',
      description:
        'Better prepare for software engineering interviews with DSA knowledge.',
    },
    {
      title: 'Strong Foundation',
      description:
        'Master fundamental principles essential for a successful career in computer science.',
    },
    {
      title: 'Software Design Skills',
      description:
        'Design elegant and scalable software solutions using DSA principles.',
    },
    {
      title: 'Team Collaboration',
      description:
        'Collaborate effectively with team members on complex projects.',
    },
  ];

  return (
    <div className="container mx-auto font-overpass">
      <h2 className="text-4xl font-bold text-center mb-6">
        Why Learn{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7186ff] to-[#fe7587]">
          DSA?
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyLearnDsa;
