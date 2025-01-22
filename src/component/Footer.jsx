import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentMode = useSelector((state) => state.mode.current);
  const isDark = currentMode !== 'Light';

  const socialLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/contactsushill',
      icon: <Twitter className="w-5 h-5" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/contactsushil',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/sushilpandeyy',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/contactsushil',
      icon: <Linkedin className="w-5 h-5" />
    }
  ];

  return (
    <footer className={`w-full py-8 px-6 transition-colors duration-300
      ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300
                  ${isDark 
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className={`text-sm font-medium
            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>© {new Date().getFullYear()} Sushil Pandey. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-300
                ${isDark 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300
                ${isDark 
                  ? 'text-gray-400 hover:text-gray-200' 
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;