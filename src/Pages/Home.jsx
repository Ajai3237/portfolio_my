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
              
              className="border border-gray-600 text-white hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

     

    </>
  );
}

export default Home;
