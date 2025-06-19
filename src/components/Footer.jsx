import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              PixelCraft
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating exceptional digital experiences that inspire and engage audiences worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, color: 'hover:text-blue-400' },
                { icon: <Twitter className="h-5 w-5" />, color: 'hover:text-sky-400' },
                { icon: <Instagram className="h-5 w-5" />, color: 'hover:text-pink-400' },
                { icon: <Linkedin className="h-5 w-5" />, color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 PixelCraft. All rights reserved. Crafted with ❤️ for the digital world.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;