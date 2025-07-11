
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", window.location.pathname);
  }, []);

  const popularPages = [
    { name: "Home", href: "/", description: "Return to our homepage" },
    { name: "Services", href: "/services", description: "Explore our team building programs" },
    { name: "Gallery", href: "/gallery", description: "View our event photos" },
    { name: "Contact", href: "/contact", description: "Get in touch with us" },
  ];

  return (
    <>
      <SEO 
        title="Page Not Found - VMA Events | 404 Error"
        description="The page you're looking for doesn't exist. Explore VMA Events' team building services, gallery, and contact information instead."
        url="/404"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-brand-orange/5 to-brand-yellow/5 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-bold text-gradient mb-4">
              404
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-orange to-brand-yellow mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have gone on an adventure of its own. 
              Don't worry though, we'll help you find your way back to building amazing teams!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/">
                <Home className="mr-2" size={20} />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="javascript:history.back()">
                <ArrowLeft className="mr-2" size={20} />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="mb-12">
            <h2 className="text-xl font-heading font-semibold text-gray-900 mb-6">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border-2 border-transparent hover:border-brand-orange/20"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{page.name}</h3>
                  <p className="text-sm text-gray-600">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center">
                <Search size={24} className="text-white" />
              </div>
            </div>
            <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
              Looking for something specific?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you discover 
              the perfect team building solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  <Search className="mr-2" size={20} />
                  Browse Services
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              Fun fact: Like a great team building exercise, sometimes getting lost 
              leads to discovering something even better! 🎯
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
