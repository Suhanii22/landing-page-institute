import React from 'react'

const Footer = () => {
    return (

        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">

                <div>
                    <h2 className="text-xl font-bold mb-2">IELTS Prep</h2>
                    <p className="text-gray-300">Helping you achieve your dream IELTS score with expert guidance and resources.</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#courses" className="hover:underline">Courses</a></li>
                        <li><a href="#features" className="hover:underline">Features</a></li>
                        <li><a href="#demo" className="hover:underline">Demo Class</a></li>
                        <li><a href="#blog" className="hover:underline">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li>Email: <a href="mailto:info@ieltsprep.com" className="hover:underline">info@ieltsprep.com</a></li>
                        <li>Phone: <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a></li>
                        <li>Address: 123 IELTS St, Mumbai, India</li>
                    </ul>
                </div>

            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
                © 2025 IELTS Prep. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer