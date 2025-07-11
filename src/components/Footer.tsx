
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  Twitter,
  ArrowRight,
  Award,
  Users,
  Calendar
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Adventure Team Building',
    'Corporate Workshops',
    'Leadership Development',
    'Problem Solving Activities',
    'Communication Exercises',
    'Trust Building Games'
  ];

  const locations = [
    'Johannesburg',
    'Cape Town',
    'Durban',
    'Pretoria',
    'Port Elizabeth',
    'Bloemfontein'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-xl">VMA Events</div>
                  <div className="text-sm text-gray-400">Est. 2017</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                South Africa's premier team building company, creating unforgettable experiences 
                that strengthen teams and drive business success since 2017.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/vmaevents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="https://instagram.com/vmaevents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="https://linkedin.com/company/vmaevents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com/vmaevents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-brand-orange transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <MapPin size={14} className="mr-2 text-brand-orange" />
                  {location}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Coverage:</strong> Nationwide team building services 
                across all 9 provinces of South Africa.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-orange mt-1" />
                <div className="text-gray-300">
                  <p className="font-medium text-white">Head Office</p>
                  <p className="text-sm">Johannesburg, Gauteng<br />South Africa</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-orange" />
                <div>
                  <p className="text-white font-medium">+27 11 555 0123</p>
                  <p className="text-sm text-gray-400">Mon-Fri 8AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-orange" />
                <div>
                  <p className="text-white font-medium">info@vmaevents.co.za</p>
                  <p className="text-sm text-gray-400">24/7 Response</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-brand-orange rounded-lg mx-auto mb-2">
                  <Award size={16} />
                </div>
                <div className="text-brand-orange font-bold">7+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-brand-green rounded-lg mx-auto mb-2">
                  <Users size={16} />
                </div>
                <div className="text-brand-green font-bold">500+</div>
                <div className="text-xs text-gray-400">Companies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-brand-blue rounded-lg mx-auto mb-2">
                  <Calendar size={16} />
                </div>
                <div className="text-brand-blue font-bold">2K+</div>
                <div className="text-xs text-gray-400">Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} VMA Events. All rights reserved. | 
              <Link to="/privacy" className="hover:text-brand-orange ml-1">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-brand-orange ml-1">Terms of Service</Link>
            </div>
            <div className="text-sm text-gray-400">
              Designed & Developed with ❤️ in South Africa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
