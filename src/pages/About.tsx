
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  MapPin, 
  Calendar,
  Target,
  Heart,
  Shield,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SEO } from '@/components/SEO';

const About = () => {
  const milestones = [
    {
      year: "2017",
      title: "VMA Events Founded",
      description: "Started with a vision to transform South African workplaces through innovative team building."
    },
    {
      year: "2018",
      title: "100+ Companies Served",
      description: "Reached our first major milestone, serving over 100 companies across Gauteng."
    },
    {
      year: "2019",
      title: "National Expansion",
      description: "Expanded operations to Cape Town, Durban, and other major South African cities."
    },
    {
      year: "2020",
      title: "Virtual Solutions",
      description: "Adapted to remote work with innovative virtual team building solutions during COVID-19."
    },
    {
      year: "2021",
      title: "500+ Companies",
      description: "Celebrated serving over 500 companies with 98% client satisfaction rate."
    },
    {
      year: "2024",
      title: "Industry Leaders",
      description: "Recognized as South Africa's premier team building company with 2000+ events delivered."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery, from initial consultation to post-event follow-up.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We continuously develop new and creative approaches to team building that engage and inspire participants.",
      icon: Target
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust with our clients and partners.",
      icon: Shield
    },
    {
      title: "Impact",
      description: "We focus on creating lasting positive change in team dynamics and organizational culture.",
      icon: Heart
    }
  ];

  const team = [
    {
      name: "Vusi Mthembu",
      role: "Founder & CEO",
      description: "With over 15 years in corporate training and development, Vusi founded VMA Events to bridge the gap between team building theory and practical results.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
    },
    {
      name: "Michelle Adams",
      role: "Head of Operations",
      description: "Michelle ensures flawless execution of every event, bringing 12 years of event management experience to the team.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b1b2c2?w=300&h=300&fit=crop"
    },
    {
      name: "Themba Nkomo",
      role: "Lead Facilitator",
      description: "Themba's dynamic facilitation style and expertise in group dynamics makes every VMA Events experience memorable and impactful.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      items: [
        "Top Team Building Company - SA Business Awards 2023",
        "Excellence in Corporate Training - Training Awards 2022",
        "Innovation in Team Development - HR Excellence Awards 2021"
      ]
    },
    {
      title: "Client Success",
      items: [
        "98% Client Satisfaction Rate",
        "95% Client Retention Rate",
        "500+ Corporate Clients Served",
        "2000+ Successful Events Delivered"
      ]
    },
    {
      title: "Community Impact",
      items: [
        "R2M+ Economic Impact in Local Communities",
        "50+ Local Suppliers and Partners",
        "Environmental Sustainability Program",
        "Corporate Social Responsibility Initiatives"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="About VMA Events - South Africa's Premier Team Building Company | Est. 2017"
        description="Learn about VMA Events' journey from 2017 to becoming South Africa's leading team building company. Discover our values, team, and commitment to transforming workplaces."
        url="/about"
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
              About <span className="text-gradient">VMA Events</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Since 2017, we've been transforming South African workplaces through 
              innovative team building experiences that create lasting impact.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="text-brand-orange" size={20} />
                <span className="font-medium">Established 2017</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-brand-orange" size={20} />
                <span className="font-medium">500+ Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="text-brand-orange" size={20} />
                <span className="font-medium">Nationwide Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-brand-orange" size={20} />
                <span className="font-medium">98% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  VMA Events was born from a simple observation: many South African companies 
                  were struggling with team cohesion, communication barriers, and low employee 
                  engagement. Traditional team building approaches weren't delivering lasting results.
                </p>
                <p>
                  Founded in 2017 by Vusi Mthembu, a seasoned corporate trainer and development 
                  specialist, VMA Events set out to revolutionize team building in South Africa. 
                  We combined adventure-based learning with proven corporate training methodologies 
                  to create experiences that truly transform teams.
                </p>
                <p>
                  Today, we're proud to be South Africa's premier team building company, having 
                  served over 500 companies and delivered more than 2000 successful events. 
                  Our approach goes beyond fun activities – we create meaningful experiences 
                  that drive measurable improvements in team performance.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" 
                alt="VMA Events team building activity"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">7+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership – here's how VMA Events has grown 
              to become South Africa's most trusted team building partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-orange"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="card-hover border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-brand-orange mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-brand-orange rounded-full relative z-10 border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind VMA Events' success, dedicated to 
              transforming teams across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <div className="text-brand-orange font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders 
              and celebrated by the clients we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6 text-gray-900 text-center">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-brand-yellow text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Experience the VMA Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the 500+ companies who trust VMA Events to deliver exceptional 
            team building experiences that create lasting positive change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-orange border-white hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              <Link to="/contact">
                Get Your Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
