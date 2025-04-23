import React from 'react'

function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-balck to-gray-900 text-black-800 py-50 px-6">
    <div className="max-w-5xl mx-auto text-center">
      
      <h2 className="text-4xl font-bold text-blue-700 mb-8">About Me</h2>

   
      <p className="text-gray-700 text-lg leading-relaxed mb-10">
        Hello! I’m <span className="font-semibold text-blue-600">Ajai</span>, a passionate and creative full-stack web developer with a strong love for building modern, responsive, and user-friendly web applications.
        I enjoy turning complex problems into elegant solutions and continuously pushing my limits to learn and grow in the world of web development.
      </p>

  
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {[
          "HTML & CSS 🧱",
          "JavaScript ✨",
          "React ⚛️",
          "Tailwind CSS 🌬️",
          "Node.js 🌿",
          "MongoDB 🍃",
          "Git & GitHub 🐙",
          "REST APIs 🔗",
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
  )
}

export default About