import React from 'react'

function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-balck to-gray-900 text-black-800 py-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className=' py-2 px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className=' mt-9 sm:text-6xl text-4xl font-bold  mb-10 text-black ' style={{ fontWeight: '600' }}>ABOUT <span className='text-blue-700'>ME</span> </h1>
          <p style={{ fontSize: '20px' }} class="text-sm sm:text-base text-gray-200 max-w-7xl mx-auto text-justify mt-15" >I’m a passionate Frontend Web Developer with a strong foundation in HTML, CSS, Bootstrap, and JavaScript. I’ve also expanded my skills into React and Node.js, allowing me to build dynamic, responsive, and user-friendly web applications. Through hands-on projects, I’ve gained practical experience in creating interactive UIs, implementing animations, and working on full-stack features. I enjoy bringing ideas to life in the browser and continuously strive to learn new technologies to improve both the functionality and design of the websites I create. I’ve worked on several projects that reflect my ability to combine creativity with coding logic. Each project has helped me grow as a developer and sharpen my problem-solving skills.</p>
          <a href="/AjaiKrishna_Resume.pdf" download className="inline-block px-6 py-2 text-white bg-gray-800 hover:bg-gray-700 rounded-md font-medium mt-19">
            Download CV <i class="fa-solid fa-download ms-2"></i>
          </a>

        </div>


      </div>
    </section>
  )
}

export default About