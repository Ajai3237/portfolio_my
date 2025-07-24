import React from "react";

const Skills = () => {
  return (
    <>
      <div className=' bg-gradient-to-br from-balck to-gray-900 py-8 px-4 sm:px-6 lg:px-8 text-center mt-20'>
        <h1 className='mt-4 text-2xl sm:text-3xl font-bold text-black'>
          MY <span className='text-blue-700'>SKILLS</span>
        </h1>

        <div className="space-y-12 mt-10 items-center">
          {[
            {
              title: "Programming Languages",
              items: [
                { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
                { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" }
              ]
            },
            {
              title: "Frontend Development",
              items: [
                { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
                { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
                {name : "Angular", logo: "https://icon.icepanel.io/Technology/svg/Angular.svg"},
                { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
                { name: "Tailwind", logo: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
                { name: "Bootstrap", logo: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg" },
                
              ]
            },
            {
              title: "Backend & Database",
              items: [
                { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
                { name: "Express", logo: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png" },
                { name: "MongoDB", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" }
              ]
            },
            {
              title: "Dev Tools & Libraries",
              items: [
                { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
                { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
                { name: "Redux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
                { name: "Axios", logo: "https://cdn.worldvectorlogo.com/logos/axios.svg" }
              ]
            },
            {
              title: "Cloud & Deployment",
              items: [
                { name: "Netlify", logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
                { name: "Vercel", logo: "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png" },
                { name: "Render", logo: "https://avatars.githubusercontent.com/u/40663471?s=200&v=4" }
              ]
            },
            {
              title: "Design Tools",
              items: [
                { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
                { name: "Photoshop", logo: "https://icon.icepanel.io/Technology/svg/Adobe-Photoshop.svg" }
              ]
            }
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-white mb-3 mt-6 decoration-yellow-100">
                {section.title}
              </h2>
              <hr className="h-[2px] w-[200px] sm:w-[300px] mx-auto mt-3 mb-6 bg-gray-700 opacity-100" />

              <div className="flex flex-wrap justify-center gap-8 pb-2">
                {section.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="min-w-[120px] flex-shrink-0 bg-black border  hover:bg-yellow-800 hover:text-white transition-all duration-400 transform hover:scale-105 rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
                  >
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-5" />
                    <p className="text-sm font-medium text-white">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
