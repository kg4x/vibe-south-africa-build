
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Award, 
  Zap,
  Mountain,
  Building,
  Lightbulb,
  Heart,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SEO } from '@/components/SEO';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('adventure');

  const serviceCategories = {
    adventure: {
      title: "Adventure Team Building",
      description: "Outdoor activities that challenge teams while building trust and communication in South Africa's stunning natural environments.",
      icon: Mountain,
      color: "from-green-500 to-blue-500"
    },
    corporate: {
      title: "Corporate Workshops",
      description: "Professional indoor activities designed to enhance workplace skills, communication, and leadership capabilities.",
      icon: Building,
      color: "from-blue-500 to-purple-500"
    },
    leadership: {
      title: "Leadership Development",
      description: "Specialized programs that identify, develop, and strengthen leadership potential within your organization.",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    custom: {
      title: "Custom Solutions",
      description: "Tailored team building experiences designed specifically for your company's unique objectives and challenges.",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500"
    }
  };

  const services = {
    adventure: [
      {
        title: "Outdoor Challenge Courses",
        description: "High and low rope courses, obstacle challenges, and problem-solving activities in natural settings.",
        duration: "Half Day (4 hours)",
        groupSize: "8-50 participants",
        location: "Various outdoor venues",
        features: ["Trust building", "Communication", "Problem solving", "Physical challenges"],
        price: "From R850 per person",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
      },
      {
        title: "Adventure Racing",
        description: "Multi-activity races combining navigation, problem-solving, and physical challenges across diverse terrains.",
        duration: "Full Day (8 hours)",
        groupSize: "12-100 participants",
        location: "Outdoor adventure parks",
        features: ["Team strategy", "Time management", "Leadership rotation", "Competitive element"],
        price: "From R1,200 per person",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
      },
      {
        title: "Survival Skills Training",
        description: "Learn essential outdoor survival skills while working together to overcome challenges and build resilience.",
        duration: "Full Day (8 hours)",
        groupSize: "8-30 participants",
        location: "Wilderness areas",
        features: ["Resilience building", "Resource management", "Decision making", "Team reliance"],
        price: "From R1,500 per person",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
      }
    ],
    corporate: [
      {
        title: "Communication Workshops",
        description: "Interactive sessions focused on improving verbal, non-verbal, and digital communication within teams.",
        duration: "Half Day (4 hours)",
        groupSize: "10-40 participants",
        location: "Your office or conference venue",
        features: ["Active listening", "Conflict resolution", "Presentation skills", "Digital communication"],
        price: "From R650 per person",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
      },
      {
        title: "Problem-Solving Challenges",
        description: "Strategic thinking exercises and collaborative problem-solving activities designed for business environments.",
        duration: "Half Day (4 hours)",
        groupSize: "8-35 participants",
        location: "Indoor conference facilities",
        features: ["Critical thinking", "Creative solutions", "Team collaboration", "Decision making"],
        price: "From R750 per person",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
      },
      {
        title: "Innovation Workshops",
        description: "Creative thinking sessions that encourage innovation, idea generation, and collaborative solution development.",
        duration: "Full Day (8 hours)",
        groupSize: "12-50 participants",
        location: "Creative workshop spaces",
        features: ["Design thinking", "Brainstorming techniques", "Prototype development", "Innovation culture"],
        price: "From R950 per person",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
      }
    ],
    leadership: [
      {
        title: "Emerging Leaders Program",
        description: "Comprehensive development program for high-potential employees ready to take on leadership roles.",
        duration: "2 Days",
        groupSize: "8-20 participants",
        location: "Leadership retreat venues",
        features: ["Leadership styles", "Team motivation", "Performance management", "Strategic thinking"],
        price: "From R2,500 per person",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
      },
      {
        title: "Executive Leadership Retreat",
        description: "Intensive leadership development for senior executives focusing on strategic leadership and organizational change.",
        duration: "3 Days",
        groupSize: "6-15 participants",
        location: "Premium retreat facilities",
        features: ["Strategic leadership", "Change management", "Executive presence", "Stakeholder engagement"],
        price: "From R4,500 per person",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop"
      },
      {
        title: "Leadership Coaching Program",
        description: "One-on-one and group coaching sessions to develop specific leadership competencies and skills.",
        duration: "Ongoing (3-6 months)",
        groupSize: "Individual or small groups",
        location: "Flexible locations",
        features: ["Personal development", "Goal setting", "Feedback coaching", "Performance improvement"],
        price: "From R1,800 per session",
        image: "https://images.unsplash.com/photo-1494790108755-2616b9b1b2c2?w=400&h=300&fit=crop"
      }
    ],
    custom: [
      {
        title: "Company Culture Building",
        description: "Comprehensive programs designed to strengthen and align organizational culture with business objectives.",
        duration: "Customizable",
        groupSize: "Entire organizations",
        location: "Various venues",
        features: ["Culture assessment", "Values alignment", "Behavior change", "Engagement improvement"],
        price: "Custom pricing",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
      },
      {
        title: "Department Integration",
        description: "Specialized activities to break down silos and improve collaboration between different departments.",
        duration: "1-2 Days",
        groupSize: "20-100 participants",
        location: "Neutral venues",
        features: ["Cross-functional collaboration", "Process improvement", "Communication bridges", "Shared objectives"],
        price: "From R1,100 per person",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
      },
      {
        title: "Remote Team Building",
        description: "Virtual and hybrid team building solutions for distributed teams working across different locations.",
        duration: "2-4 hours virtual sessions",
        groupSize: "8-50 participants",
        location: "Virtual platforms",
        features: ["Virtual collaboration", "Digital team building", "Remote engagement", "Online facilitation"],
        price: "From R450 per person",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop"
      }
    ]
  };

  const benefits = [
    {
      title: "Improved Team Cohesion",
      description: "Strengthen relationships and build trust among team members.",
      icon: Heart
    },
    {
      title: "Enhanced Communication",
      description: "Develop better listening skills and clearer communication patterns.",
      icon: Users
    },
    {
      title: "Increased Productivity",
      description: "See measurable improvements in team performance and output.",
      icon: Target
    },
    {
      title: "Better Problem Solving",
      description: "Enhance creative thinking and collaborative solution finding.",
      icon: Lightbulb
    },
    {
      title: "Leadership Development",
      description: "Identify and develop natural leaders within your organization.",
      icon: Award
    },
    {
      title: "Higher Employee Engagement",
      description: "Boost morale, satisfaction, and retention rates.",
      icon: Zap
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your team's specific needs, challenges, and objectives to understand your unique requirements."
    },
    {
      step: "2",
      title: "Custom Program Design",
      description: "Our experts design a tailored program that addresses your goals and fits your budget and schedule."
    },
    {
      step: "3",
      title: "Pre-Event Planning",
      description: "We handle all logistics, from venue selection to equipment preparation, ensuring everything runs smoothly."
    },
    {
      step: "4",
      title: "Event Delivery",
      description: "Our professional facilitators guide your team through engaging activities with expert support throughout."
    },
    {
      step: "5",
      title: "Follow-Up & Assessment",
      description: "We provide detailed feedback and recommendations to help sustain the positive changes achieved."
    }
  ];

  return (
    <>
      <SEO 
        title="Team Building Services South Africa - VMA Events | Adventure, Corporate & Leadership Programs"
        description="Discover VMA Events' comprehensive team building services: Adventure activities, Corporate workshops, Leadership development, and Custom solutions across South Africa."
        url="/services"
        keywords="team building services South Africa, corporate workshops, adventure team building, leadership development, custom team building programs"
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-green opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Our Team Building <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            From adventure-based outdoor activities to strategic corporate workshops, 
            we offer comprehensive team building solutions designed to transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-secondary">
              <Link to="#services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Choose Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our comprehensive range of team building programs designed 
              to meet your specific objectives and team dynamics.
            </p>
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {Object.entries(serviceCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key} className="flex items-center space-x-2 p-4">
                  <category.icon size={18} />
                  <span className="hidden sm:inline font-medium">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(serviceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services[key as keyof typeof services].map((service, index) => (
                    <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 right-4 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {service.price}
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-heading font-semibold mb-3 text-gray-900">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Clock size={16} />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Users size={16} />
                            <span>{service.groupSize}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <MapPin size={16} />
                            <span>{service.location}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <span 
                                key={featureIndex}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <Button asChild className="w-full btn-primary">
                          <Link to="/contact">
                            Book This Service
                            <ArrowRight size={16} className="ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              The VMA Events Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team building programs deliver measurable results that extend far beyond the event day, 
              creating lasting positive change in your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your team building experience 
              delivers maximum impact and lasting results.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-brand-yellow transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-white shadow-lg">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed italic">
                  "VMA Events completely transformed our team dynamics. The adventure-based program 
                  not only improved our communication but also increased our overall productivity by 35%. 
                  The results have been sustained for over a year now."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b9b1b2c2?w=80&h=80&fit=crop" 
                    alt="Client testimonial"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                    <div className="text-gray-600">HR Director, Absa Bank</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            Choose from our comprehensive range of team building services and start your journey 
            towards a more cohesive, productive, and engaged team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-orange border-white hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              <Link to="/gallery">
                View Our Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
