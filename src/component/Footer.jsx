import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-6 mt-0">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Left side - Name or Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Ajai. All rights reserved.
      </p>

      {/* Middle - Social links (optional) */}
      <div className="flex space-x-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">LinkedIn</a>
        <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
      </div>

      {/* Right side - Back to top */}
      <a href="#top" className="text-sm hover:text-gray-300 transition">
        Back to Top ↑
      </a>
    </div>
  </footer>
  )
}

export default Footer