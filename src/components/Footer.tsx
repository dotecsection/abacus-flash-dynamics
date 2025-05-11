
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Smart & Speed Abacus</h3>
            <p className="text-sm text-blue-100">
              Empowering children with mental arithmetic skills through the ancient art of abacus.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-200 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-200 transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="text-sm not-italic text-blue-100 space-y-2">
              <p>123 Education Street, Learning City</p>
              <p>Email: info@smartspeedabacus.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Smart & Speed Abacus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
