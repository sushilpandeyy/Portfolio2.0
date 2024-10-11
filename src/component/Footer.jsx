import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <Link to="https://twitter.com/contactsushill" className="hover:text-gray-400">
            <img className="w-6 h-6" src="https://seeklogo.com/images/T/twitter-new-logo-8A0C4E0C58-seeklogo.com.png?v=638258088440000000" alt="Twitter" />
          </Link>
          <Link to="https://instagram.com/contactsushil" className="hover:text-gray-400">
            <img className="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png?20200512141346" alt="Instagram" />
          </Link>
          <Link to="https://github.com/sushilpandeyy" className="hover:text-gray-400">
            <img className="w-6 h-6" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" />
          </Link>
          <Link to="https://linkedin.com/in/contactsushil" className="hover:text-gray-400">
            <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </Link>
        </div>

        {/* Copyright Info */}
        <div className="text-sm">
          <p>&copy; 2024 Sushil Pandey. All rights reserved.</p>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-4">
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;
