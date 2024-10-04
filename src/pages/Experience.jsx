import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Senior Front-End Developer",
    company: "Midwest Sterilization Corporation",
    duration: "Jul 2022 - Feb 2024",
    location: "Murphysboro, Illinois, USA",
    description: [
      "Developing dynamic web pages using HTML/HTML5, CSS/CSS3, Bootstrap, jQuery, Angular13, ReactJS, NodeJS",
      "Implemented client-side Interface using React.js and worked using React.js components, Forms, Events, Keys, Router, Animations and Redux concept.",
      "Involved in React.js for Data patterns which improves readability and maintainability.",
      "Created Typescript reusable components and services.",
      "Worked with version control systems (GIT, Bitbucket, GitLab, Docker)."
    ]
  },
  {
    role: "Senior Front-End Developer",
    company: "Midwest Sterilization Corporation",
    duration: "Jul 2022 - Feb 2024",
    location: "Murphysboro, Illinois, USA",
    description: [
      "Developing dynamic web pages using HTML/HTML5, CSS/CSS3, Bootstrap, jQuery, Angular13, ReactJS, NodeJS",
      "Implemented client-side Interface using React.js and worked using React.js components, Forms, Events, Keys, Router, Animations and Redux concept.",
      "Involved in React.js for Data patterns which improves readability and maintainability.",
      "Created Typescript reusable components and services.",
      "Worked with version control systems (GIT, Bitbucket, GitLab, Docker)."
    ]
  },
  {
    role: "Senior Front-End Developer",
    company: "Midwest Sterilization Corporation",
    duration: "Jul 2022 - Feb 2024",
    location: "Murphysboro, Illinois, USA",
    description: [
      "Developing dynamic web pages using HTML/HTML5, CSS/CSS3, Bootstrap, jQuery, Angular13, ReactJS, NodeJS",
      "Implemented client-side Interface using React.js and worked using React.js components, Forms, Events, Keys, Router, Animations and Redux concept.",
      "Involved in React.js for Data patterns which improves readability and maintainability.",
      "Created Typescript reusable components and services.",
      "Worked with version control systems (GIT, Bitbucket, GitLab, Docker)."
    ]
  },
  {
    role: "Senior Front-End Developer",
    company: "Midwest Sterilization Corporation",
    duration: "Jul 2022 - Feb 2024",
    location: "Murphysboro, Illinois, USA",
    description: [
      "Developing dynamic web pages using HTML/HTML5, CSS/CSS3, Bootstrap, jQuery, Angular13, ReactJS, NodeJS",
      "Implemented client-side Interface using React.js and worked using React.js components, Forms, Events, Keys, Router, Animations and Redux concept.",
      "Involved in React.js for Data patterns which improves readability and maintainability.",
      "Created Typescript reusable components and services.",
      "Worked with version control systems (GIT, Bitbucket, GitLab, Docker)."
    ]
  },
  // Add more experience objects if needed
];

const Experience = () => {
  return (
    <section className="px-8 py-16 bg-gray-100" >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="relative">
          <div className="absolute w-1 h-full bg-gray-300 left-1/2 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              className={`mb-16 flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} relative`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`bg-white shadow-lg p-6 rounded-lg max-w-lg ${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
                <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                <p className="text-lg font-light text-gray-600 mb-4">{exp.company}</p>
                <p className="text-sm font-medium mb-2">{exp.duration} | {exp.location}</p>
                <ul className="list-disc ml-5 text-left">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="mb-2 text-gray-700">{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
