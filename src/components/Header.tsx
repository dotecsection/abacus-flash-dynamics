
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/placeholder.svg" 
                alt="Smart & Speed Abacus Logo" 
                className="h-10 w-10" 
              />
              <span className="font-bold text-xl md:text-2xl">Smart & Speed Abacus</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors">Courses</Link>
            <Link to="/testimonials" className="hover:text-blue-200 transition-colors">Testimonials</Link>
            <Link to="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link>
            <Link to="/blog" className="hover:text-blue-200 transition-colors">Blog</Link>
            <Link to="/faq" className="hover:text-blue-200 transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            <Link to="/register" className="hover:text-blue-200 transition-colors">Register</Link>
            <Link to="/login">
              <Button variant="secondary" size="sm">Admin Login</Button>
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/courses" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Courses</Link>
              <Link to="/testimonials" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
              <Link to="/gallery" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/blog" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link to="/faq" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/register" className="hover:text-blue-200 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Register</Link>
              <Link to="/login" className="py-2" onClick={() => setIsMenuOpen(false)}>
                <Button variant="secondary" size="sm">Admin Login</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
