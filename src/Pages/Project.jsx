import React from "react";
import { motion } from "framer-motion";

const projects = [
  
  {
    title: "Cookpedia web site",
    description: " Cookpedia is a responsive Angular web app for exploring and managing recipes with role-based access, JWT security, admin CRUD, PDF export, feedback, and activity charts using Highcharts",
    link: "https://cookpedia-fe-puce.vercel.app",
    image: "/cook.png"
  },{
    title: "University Web site",
    description: " Website using HTML, CSS, and Media Queries. This project shows modern web design elements, including responsive navigation, engaging layouts, and accessibility across devices.",
    link: "https://ajai3237.github.io/Luminar-project/",
    image: "/Screenshot2025-04-21205339.png"
  },
  {
    title: "Real Estate Web site",
    description: "My First Bootstrap Project! 🏡✨Here’s my latest creation: a Real Estate Website built using Bootstrap",

    link: "https://ajai3237.github.io/Real-estate-/",
    image: "/Screenshot2025-04-22095529.png"
  },
  {
    title: "Travel Web site",
    description: "A travel website using React, Tailwind CSS, and Firebase. This project showcases modern web design elements, including responsive navigation, engaging layouts, and accessibility across devices.",

    link: "https://ajai3237.github.io/Travel-site/",
    image: "/Screenshot2025-04-22100005.png"
  },
  {
    title: "Photo Gallery",
    description: "Photo Gallery project using creative hover effects to enhance the user experience. This project allowed me to deepen my understanding of:CSS transitions and hover effectsResponsive design techniquesEffective layout planning",

    link: "https://ajai3237.github.io/photo_gallery/",
    image: "/Screenshot2025-04-22100211.png"
  },
  {
    title: "CSS animation",
    description: ", I delved into CSS animations, creative web design, and the importance of delivering an engaging user experience. It was an incredible learning journey that pushed me to explore new concepts and refine my skills.",
    link: "https://ajai3237.github.io/Animation_site/",
    image: "/Screenshot2025-04-22100812.png"
  },
  {
    title: "calculator",
    description: "A simple calculator using HTML, CSS, and JavaScript. This project showcases modern web design elements, including responsive navigation, engaging layouts, and accessibility across devices.",

    link: " https://lnkd.in/grwVizux",
    image: "/Screenshot2025-04-22103602.png"
  },
  {
    title: "Random Quote Generator ",
    description: "A React Project I’m excited to share my latest React.js project – a Random Quote Generator! 🎉 This interactive web page displays motivational quotes along with their respective authors. With each click of the  button, a new quote is fetched dynamically, and display there images. ",
    link: "https://lnkd.in/gR2ncaYZ",
    image: "/Screenshot2025-04-22102943.png"
  },
  {
    title: " Parallax Project",
    description: "A Parallax Project using HTML, CSS, and JavaScript. This project showcases modern web design elements, including responsive navigation, engaging layouts, and accessibility across devices.",

    link: "https://lnkd.in/g8cib5YF",
    image: "/Screenshot2025-04-22103931.png"
  },
  {
    title: "Tip Calculator",
    description: "A Tip Calculator project using HTML, CSS, and JavaScript. This project showcases modern web design elements, including responsive navigation, engaging layouts, and accessibility across devices.",

    link: " https://lnkd.in/gUftfwB9",
    image: "/Screenshot2025-04-23095043.png"
  }
];

const Project = () => {
  return (
    <section id="projects" className=" bg-gradient-to-br from-balck to-gray-900 text-black-800 min-h-screen py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-900">MY PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}

              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-[2px] rounded-xl hover:shadow-xl transition-shadow duration-500 h-full">

                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotate: 1,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900  p-6 rounded-xl h-full flex flex-col"
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
