import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className="bg-gradient-to-br from-gray-800 to-gray-900  shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <img className='w-20 ' src="/82d31647-4b92-48e8-b992-44b517ab5673-removebg-preview.png" alt="" />


                <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
                    <Link to="/" className="hover:text-blue-500 transition text-xl">Home</Link>
                    <Link to="/projects" className="hover:text-blue-500 transition text-xl">Projects</Link>
                    <Link to="/skills" className="hover:text-blue-500 transition text-xl ">Skills</Link>
                    <Link to="/about" className="hover:text-blue-500 transition text-xl">About</Link>
                    <Link to="/contact" className="hover:text-blue-500 transition text-xl">Contact</Link>
                </nav>


                <div className="md:hidden">
                    <button className="text-gray-600 hover:text-blue-600 focus:outline-none">

                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header