
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Award, 
  MapPin, 
  Star,
  Play,
  CheckCircle,
  Calendar,
  Phone,
  Target,
  Zap,
  Heart,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';

const Index = () => {
  const services = [
    {
      title: "Adventure Team Building",
      description: "Outdoor adventures that challenge teams and build trust through shared experiences in South Africa's beautiful landscapes.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
    },
    {
      title: "Corporate Workshops",
      description: "Interactive indoor activities designed to improve communication, leadership, and problem-solving skills.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
    },
    {
      title: "Leadership Development",
      description: "Specialized programs that identify and develop leadership potential within your organization.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Custom Events",
      description: "Tailored team building experiences designed specifically for your company's unique needs and objectives.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Standard Bank",
      text: "VMA Events transformed our team dynamics. The adventure-based activities broke down silos and created lasting bonds. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Discovery Health",
      text: "Professional, creative, and incredibly effective. Our productivity increased by 40% after their leadership development program.",
      rating: 5
    },
    {
      name: "Nomsa Mbeki",
      company: "Sasol",
      text: "The custom corporate workshop exceeded our expectations. VMA Events truly understands South African business culture.",
      rating: 5
    }
  ];

  const stats = [
    { number: "7+", label: "Years Experience", icon: Calendar },
    { number: "500+", label: "Companies Served", icon: Users },
    { number: "2000+", label: "Events Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star }
  ];

  const benefits = [
    {
      title: "Improved Communication",
      description: "Break down barriers and enhance team communication through engaging activities.",
      icon: Users
    },
    {
      title: "Enhanced Leadership",
      description: "Develop natural leaders and improve decision-making capabilities.",
      icon: Award
    },
    {
      title: "Increased Trust",
      description: "Build stronger relationships and trust between team members.",
      icon: Heart
    },
    {
      title: "Better Problem Solving",
      description: "Enhance creative thinking and collaborative problem-solving skills.",
      icon: Target
    },
    {
      title: "Boosted Morale",
      description: "Increase employee engagement and workplace satisfaction.",
      icon: Zap
    },
    {
      title: "Stronger Culture",
      description: "Develop a positive, cohesive company culture that drives success.",
      icon: Shield
    }
  ];

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative container-custom text-center text-white z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Build Stronger Teams,
              <br />
              <span className="text-gradient">Drive Success</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              South Africa's premier team building company since 2017. 
              We create unforgettable experiences that transform teams and boost performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>500+ Companies Trust Us</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>7+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>98% Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Team Building Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From adventure-based outdoor activities to strategic corporate workshops, 
              we offer comprehensive team building solutions across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to="/services">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Team Building?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the transformative power of professional team building and 
              how it can revolutionize your workplace dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what leading South African companies 
              say about their VMA Events experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/about">
                Read More Reviews
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-brand-yellow text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join 500+ companies who have already experienced the VMA Events difference. 
            Get your free consultation and custom quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-orange border-white hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">
                <Phone className="mr-2" size={20} />
                Call Now: +27 11 555 0123
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
