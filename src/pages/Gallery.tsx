
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Eye, 
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  MapPin,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      alt: 'Adventure team building activity',
      title: 'Mountain Adventure Challenge',
      category: 'adventure',
      location: 'Drakensberg, KZN',
      participants: 45,
      date: 'March 2024',
      description: 'Multi-day adventure program combining hiking, problem-solving, and leadership challenges.'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      alt: 'Corporate workshop session',
      title: 'Leadership Workshop Series',
      category: 'corporate',
      location: 'Sandton, Johannesburg',
      participants: 28,
      date: 'February 2024',
      description: 'Intensive leadership development program for emerging leaders at a top financial institution.'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      alt: 'Team collaboration exercise',
      title: 'Innovation Challenge Day',
      category: 'corporate',
      location: 'Cape Town Waterfront',
      participants: 65,
      date: 'January 2024',
      description: 'Creative problem-solving and innovation workshop designed to break down departmental silos.'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
      alt: 'Outdoor team building',
      title: 'Coastal Adventure Experience',
      category: 'adventure',
      location: 'Garden Route, Western Cape',
      participants: 32,
      date: 'December 2023',
      description: 'Beach-based team building combining water sports, treasure hunts, and trust exercises.'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      alt: 'Team celebration',
      title: 'Executive Retreat Success',
      category: 'leadership',
      location: 'Pilanesberg, North West',
      participants: 18,
      date: 'November 2023',
      description: 'Strategic planning and leadership alignment retreat for C-suite executives.'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Adventure racing team',
      title: 'Corporate Adventure Race',
      category: 'adventure',
      location: 'Magaliesberg, Gauteng',
      participants: 85,
      date: 'October 2023',
      description: 'Multi-discipline adventure race featuring navigation, cycling, and team challenges.'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop',
      alt: 'Problem solving session',
      title: 'Strategic Planning Workshop',
      category: 'corporate',
      location: 'Durban, KZN',
      participants: 22,
      date: 'September 2023',
      description: 'Collaborative strategic planning session focusing on team alignment and goal setting.'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      alt: 'Team building games',
      title: 'Department Integration Day',
      category: 'custom',
      location: 'Pretoria, Gauteng',
      participants: 120,
      date: 'August 2023',
      description: 'Large-scale integration event bringing together multiple departments for better collaboration.'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop',
      alt: 'Virtual team building',
      title: 'Virtual Team Connection',
      category: 'virtual',
      location: 'Online Platform',
      participants: 75,
      date: 'July 2023',
      description: 'Interactive virtual team building session for remote teams across South Africa.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Events', count: galleryItems.length },
    { key: 'adventure', label: 'Adventure', count: galleryItems.filter(item => item.category === 'adventure').length },
    { key: 'corporate', label: 'Corporate', count: galleryItems.filter(item => item.category === 'corporate').length },
    { key: 'leadership', label: 'Leadership', count: galleryItems.filter(item => item.category === 'leadership').length },
    { key: 'custom', label: 'Custom', count: galleryItems.filter(item => item.category === 'custom').length },
    { key: 'virtual', label: 'Virtual', count: galleryItems.filter(item => item.category === 'virtual').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      <SEO 
        title="VMA Events Gallery - Team Building Photos & Success Stories | South Africa"
        description="Explore VMA Events' gallery showcasing successful team building events across South Africa. View photos from adventure activities, corporate workshops, and leadership programs."
        url="/gallery"
        keywords="VMA Events gallery, team building photos South Africa, corporate events gallery, adventure team building images, team building success stories"
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-blue opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Our Success <span className="text-gradient">Stories</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the transformative power of team building through our gallery of successful events. 
            From adventure challenges to corporate workshops, see how we've helped teams across South Africa achieve greatness.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-orange">500+</div>
              <div className="text-gray-600">Events Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-green">2000+</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-blue">50K+</div>
              <div className="text-gray-600">Participants</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeFilter === category.key ? "default" : "outline"}
                onClick={() => setActiveFilter(category.key)}
                className={`${
                  activeFilter === category.key 
                    ? 'bg-brand-orange hover:bg-brand-orange/90' 
                    : 'border-gray-300 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    activeFilter === category.key 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100'
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="card-hover border-0 shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Eye size={32} className="mx-auto mb-2" />
                      <span className="text-sm font-medium">View Details</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <Badge 
                    className="absolute top-4 left-4 bg-brand-orange hover:bg-brand-orange text-white"
                  >
                    {categories.find(cat => cat.key === item.category)?.label}
                  </Badge>

                  {/* Play Button for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} className="text-brand-orange" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users size={14} className="text-brand-orange" />
                        <span>{item.participants} participants</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} className="text-brand-orange" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">
                No events found in this category.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setActiveFilter('all')}
              >
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:text-gray-300 hover:bg-white/10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 hover:bg-white/10"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 hover:bg-white/10"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </Button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              
              {/* Image Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <Badge className="bg-brand-orange text-white">
                    {categories.find(cat => cat.key === filteredItems[selectedImage].category)?.label}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {filteredItems[selectedImage].description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-brand-orange" />
                    <span>{filteredItems[selectedImage].location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-brand-orange" />
                    <span>{filteredItems[selectedImage].participants} participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-brand-orange" />
                    <span>{filteredItems[selectedImage].date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} of {filteredItems.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-brand-yellow text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the hundreds of companies who have transformed their teams with VMA Events. 
            Let's create memorable experiences that drive real results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-orange border-white hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-4">
              <Link to="/contact">
                Plan Your Event
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
