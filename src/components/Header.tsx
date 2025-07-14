import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Services',
    href: '/services'
  }, {
    name: 'Gallery',
    href: '/gallery'
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Contact',
    href: '/contact'
  }];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+27 65 995 0113</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>vmaevents1@gmail.com</span>
              </div>
            </div>
            <div className="text-brand-orange font-medium">
              Established 2017 • Premium Team Building South Africa
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-gray-900">
                  VMA Events
                </div>
                <div className="text-xs text-gray-500 hidden sm:block">
                  Est. 2017
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`font-medium transition-colors duration-200 ${isActiveLink(item.href) ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange'}`}>
                  {item.name}
                </Link>)}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button asChild className="hidden lg:flex btn-primary">
                <Link to="/contact">Get Quote</Link>
              </Button>
              
              {/* Mobile menu button */}
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map(item => <Link key={item.name} to={item.href} className={`font-medium py-2 transition-colors duration-200 ${isActiveLink(item.href) ? 'text-brand-orange' : 'text-gray-700'}`}>
                    {item.name}
                  </Link>)}
                <Button asChild className="btn-primary mt-4 w-full">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </nav>
            </div>
          </div>}
      </header>
    </>
  );
};
