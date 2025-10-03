import React from 'react'
import { useState } from 'react';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>





            <nav className="bg-blue-100 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">

                        <div className="flex-shrink-0 flex items-center text-blue-800 font-bold text-xl">
                            IELTS Prep
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:space-x-6">
                            <a href="#home" className="text-blue-700 hover:text-blue-900 font-medium">Home</a>
                            <a href="#courses" className="text-blue-700 hover:text-blue-900 font-medium">Courses</a>
                            <a href="#features" className="text-blue-700 hover:text-blue-900 font-medium">Features</a>
                            <a href="#testimonials" className="text-blue-700 hover:text-blue-900 font-medium">Testimonials</a>
                            <a href="#contact" className="text-blue-700 hover:text-blue-900 font-medium">Contact</a>
                        </div>

                        <div className="sm:hidden flex items-center">
                            <button type="button" className="text-blue-700 hover:text-blue-900 focus:outline-none" onClick={() => setOpen(!open)}>
                                {open ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {open && (
                    <div className="sm:hidden bg-blue-100 px-2 pt-2 pb-4 space-y-1">
                        <a href="#home" className="block text-blue-700 hover:text-blue-900">Home</a>
                        <a href="#courses" className="block text-blue-700 hover:text-blue-900">Courses</a>
                        <a href="#features" className="block text-blue-700 hover:text-blue-900">Features</a>
                        <a href="#testimonials" className="block text-blue-700 hover:text-blue-900">Testimonials</a>
                        <a href="#contact" className="block text-blue-700 hover:text-blue-900">Contact</a>
                    </div>
                )}
            </nav>

        </>
    )
}

export default Navbar