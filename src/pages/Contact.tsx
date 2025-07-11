
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Users,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SEO } from '@/components/SEO';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    serviceType: '',
    preferredDate: '',
    budget: '',
    message: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours with your custom quote.",
      duration: 5000,
    });

    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      teamSize: '',
      serviceType: '',
      preferredDate: '',
      budget: '',
      message: '',
      location: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+27 11 555 0123",
      description: "Mon-Fri 8AM-6PM, Sat 9AM-2PM",
      action: "tel:+27115550123"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@vmaevents.co.za",
      description: "24/7 email support",
      action: "mailto:info@vmaevents.co.za"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Johannesburg, Gauteng",
      description: "Head Office - By Appointment",
      action: "#"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      content: "+27 82 555 0123",
      description: "Quick responses 8AM-8PM",
      action: "https://wa.me/27825550123"
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 weeks in advance, especially during peak seasons (April-May, September-October). However, we can accommodate shorter notice depending on availability."
    },
    {
      question: "What's included in the pricing?",
      answer: "Our pricing includes professional facilitation, all equipment and materials, venue coordination (if needed), and post-event feedback report. Travel costs may apply for venues outside major cities."
    },
    {
      question: "Do you offer virtual team building?",
      answer: "Yes! We offer comprehensive virtual and hybrid team building solutions perfect for remote teams or organizations with multiple locations across South Africa."
    },
    {
      question: "What if the weather doesn't cooperate?",
      answer: "All our outdoor programs include backup indoor alternatives. We monitor weather conditions closely and will communicate any necessary changes 24-48 hours in advance."
    }
  ];

  const serviceAreas = [
    "Johannesburg & Gauteng",
    "Cape Town & Western Cape", 
    "Durban & KwaZulu-Natal",
    "Pretoria & Tshwane",
    "Port Elizabeth & Eastern Cape",
    "Bloemfontein & Free State",
    "Other locations nationwide"
  ];

  return (
    <>
      <SEO 
        title="Contact VMA Events - Get Your Team Building Quote | South Africa"
        description="Contact VMA Events for your custom team building quote. Call +27 11 555 0123 or email info@vmaevents.co.za. Nationwide service across South Africa since 2017."
        url="/contact"
        keywords="contact VMA Events, team building quote South Africa, corporate team building contact, team development consultation"
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your team? Get in touch for a free consultation and 
            discover how VMA Events can create the perfect team building experience for your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="font-medium">Custom Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="font-medium">Nationwide Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading text-gray-900">
                    Get Your Custom Quote
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a detailed quote 
                    tailored to your team's specific needs.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+27 11 123 4567"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="teamSize">Team Size *</Label>
                        <Select value={formData.teamSize} onValueChange={(value) => handleInputChange('teamSize', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8-15">8-15 people</SelectItem>
                            <SelectItem value="16-30">16-30 people</SelectItem>
                            <SelectItem value="31-50">31-50 people</SelectItem>
                            <SelectItem value="51-100">51-100 people</SelectItem>
                            <SelectItem value="100+">100+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adventure">Adventure Team Building</SelectItem>
                            <SelectItem value="corporate">Corporate Workshops</SelectItem>
                            <SelectItem value="leadership">Leadership Development</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                            <SelectItem value="consultation">Free Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location">Preferred Location</Label>
                        <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceAreas.map((area, index) => (
                              <SelectItem key={index} value={area.toLowerCase()}>{area}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under R10,000</SelectItem>
                            <SelectItem value="10k-25k">R10,000 - R25,000</SelectItem>
                            <SelectItem value="25k-50k">R25,000 - R50,000</SelectItem>
                            <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                            <SelectItem value="100k+">R100,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date(s)</Label>
                      <Input
                        id="preferredDate"
                        type="text"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        placeholder="e.g., Last week of March 2024, or specific dates"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your team's specific needs, challenges, or objectives..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full btn-primary" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner mr-2"></div>
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Get My Free Quote
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-md card-hover">
                      <CardContent className="p-4">
                        <a 
                          href={info.action}
                          className="flex items-start space-x-4 group"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-yellow rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                            <info.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-gray-900 font-medium">{info.content}</p>
                            <p className="text-sm text-gray-500">{info.description}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="text-brand-orange" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        Emergency support available 24/7 for active events
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="text-brand-orange" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
                  </div>
                  <ul className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle size={14} className="text-green-500" />
                        <span className="text-gray-600">{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to the most common questions about our team building services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have a different question? We're here to help!
            </p>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:info@vmaevents.co.za">
                <Mail className="mr-2" size={20} />
                Email Your Question
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
