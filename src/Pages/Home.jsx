import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Link } from 'react-router-dom';

const skillsData = [
  { name: "HTML", level: 95 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git/GitHub", level: 85 },
];

const projects = [
  {
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
    image: "/Screenshot2025-04-23 095043.png"
  }
];

function Home() {
  return (
    <>
      <section
        id="top"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-balck to-gray-900 text-black-800 px-6"
      >
        <div className="max-w-3xl text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-blue-700  ">Ajai</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-medium mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A Passionate Full-Stack Web Developer
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            with a focus on building clean, responsive, and user-friendly applications. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js), and I love turning ideas into reality through code. Whether it’s developing sleek front-end interfaces or building efficient back-end systems, I strive to create digital experiences that are both functional and visually appealing. Explore my work below and feel free to reach out — I’m always open to exciting collaborations and new challenges.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Link to={"/projects"}
              
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition shadow-md"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="projects" className=" bg-gradient-to-br from-balck to-gray-900 text-black-800 min-h-screen py-40 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 style={{}} className="text-4xl font-bold mb-12 text-blue-900 ">My Projects</h2>
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
                    className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl h-full flex flex-col"
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

      <section id="skills" className="bg-gradient-to-br from-balck to-gray-900  text-black-800 py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">My Skills</h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            Here’s a quick look at my technical skills and how comfortable I am with each.
          </p>

          <div className="w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillsData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 50, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="level" fill="#2563eb" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gradient-to-br from-balck to-gray-900 text-black-800 py-50 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-8">About Me</h2>


          <p className="text-white text-lg leading-relaxed mb-10 ">
            Hello! I’m <span className="font-semibold text-blue-600">Ajai</span>, a passionate and creative full-stack web developer with a strong love for building modern, responsive, and user-friendly web applications.
            I enjoy turning complex problems into elegant solutions and continuously pushing my limits to learn and grow in the world of web development.
          </p>


          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              "HTML & CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "Git & GitHub",
              "REST APIs",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-800 py-3 px-6 rounded-full text-center font-medium shadow-sm hover:bg-blue-200 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;
