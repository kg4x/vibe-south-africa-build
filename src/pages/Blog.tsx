
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock,
  Tag,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

const Blog = () => {
  const featuredPost = {
    slug: 'ultimate-guide-team-building-south-africa-2024',
    title: 'The Ultimate Guide to Team Building in South Africa 2024',
    excerpt: 'Discover the latest trends, best practices, and innovative approaches to team building that are transforming South African workplaces. From adventure-based activities to virtual solutions.',
    content: `Team building has evolved significantly in South Africa over the past few years. With the rise of remote work, changing workplace dynamics, and a greater focus on employee wellbeing, organizations are seeking more innovative and impactful team building solutions.

    In this comprehensive guide, we explore the current landscape of team building in South Africa, emerging trends, and how companies can maximize their investment in team development programs.`,
    author: 'Vusi Mthembu',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Trends',
    tags: ['Team Building', 'South Africa', 'Corporate Training', 'Employee Engagement'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    featured: true
  };

  const blogPosts = [
    {
      slug: 'virtual-team-building-best-practices',
      title: 'Virtual Team Building Best Practices for South African Companies',
      excerpt: 'Learn how to create engaging virtual team building experiences that connect remote teams across South Africa\'s diverse workforce.',
      author: 'Michelle Adams',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Virtual Events',
      tags: ['Virtual Team Building', 'Remote Work', 'Digital Collaboration'],
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=400&fit=crop'
    },
    {
      slug: 'adventure-team-building-drakensberg',
      title: 'Why the Drakensberg is Perfect for Adventure Team Building',
      excerpt: 'Explore how South Africa\'s majestic Drakensberg mountains provide the ideal backdrop for transformative team building experiences.',
      author: 'Themba Nkomo',
      date: '2024-03-05',
      readTime: '5 min read',
      category: 'Adventure',
      tags: ['Adventure Team Building', 'Drakensberg', 'Outdoor Activities'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
    },
    {
      slug: 'measuring-team-building-roi',
      title: 'How to Measure the ROI of Your Team Building Investment',
      excerpt: 'Discover practical methods to measure the return on investment of your team building programs and demonstrate their business impact.',
      author: 'Sarah Johnson',
      date: '2024-02-28',
      readTime: '7 min read',
      category: 'Business',
      tags: ['ROI', 'Business Impact', 'Team Performance', 'Metrics'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop'
    },
    {
      slug: 'leadership-development-trends-2024',
      title: 'Leadership Development Trends Shaping South African Businesses',
      excerpt: 'Stay ahead of the curve with insights into the latest leadership development trends that are transforming how companies develop their leaders.',
      author: 'Vusi Mthembu',
      date: '2024-02-20',
      readTime: '9 min read',
      category: 'Leadership',
      tags: ['Leadership Development', 'Business Trends', 'Executive Training'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    },
    {
      slug: 'team-building-small-vs-large-groups',
      title: 'Team Building for Small vs Large Groups: What Works Best?',
      excerpt: 'Understanding the different approaches and activities that work best for small intimate teams versus large corporate groups.',
      author: 'Michelle Adams',
      date: '2024-02-15',
      readTime: '4 min read',
      category: 'Strategy',
      tags: ['Group Dynamics', 'Team Size', 'Activity Planning'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
    },
    {
      slug: 'cultural-sensitivity-team-building-south-africa',
      title: 'Cultural Sensitivity in South African Team Building',
      excerpt: 'How to design inclusive team building experiences that celebrate South Africa\'s diverse cultures and bring teams together.',
      author: 'Nomsa Mbeki',
      date: '2024-02-10',
      readTime: '6 min read',
      category: 'Culture',
      tags: ['Cultural Diversity', 'Inclusion', 'South African Culture'],
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
    }
  ];

  const categories = [
    { name: 'All Posts', count: blogPosts.length + 1, slug: 'all' },
    { name: 'Trends', count: 1, slug: 'trends' },
    { name: 'Virtual Events', count: 1, slug: 'virtual-events' },
    { name: 'Adventure', count: 1, slug: 'adventure' },
    { name: 'Business', count: 1, slug: 'business' },
    { name: 'Leadership', count: 1, slug: 'leadership' },
    { name: 'Strategy', count: 1, slug: 'strategy' },
    { name: 'Culture', count: 1, slug: 'culture' }
  ];

  return (
    <>
      <SEO 
        title="Team Building Blog - Expert Insights & Tips | VMA Events South Africa"
        description="Read the latest team building insights, trends, and best practices from VMA Events. Expert advice on corporate training, leadership development, and team performance in South Africa."
        url="/blog"
        keywords="team building blog, corporate training insights, leadership development tips, team building trends South Africa, business team building advice"
      />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-yellow opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68e2c4d4d3?w=1920&h=1080&fit=crop')"
          }}
        ></div>
        
        <div className="relative container-custom text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Team Building <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Expert insights, trends, and best practices to help you maximize the impact of your team building initiatives. 
            Stay ahead with the latest in corporate training and team development.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <BookOpen className="text-brand-orange" size={20} />
              <span className="font-medium">Expert Articles</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="text-brand-orange" size={20} />
              <span className="font-medium">Industry Trends</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="text-brand-orange" size={20} />
              <span className="font-medium">Professional Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="bg-brand-orange text-white mb-4">Featured Article</Badge>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900">
              Must Read
            </h2>
          </div>

          <Card className="card-hover border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-brand-orange text-white">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-brand-orange" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-brand-orange" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-ZA', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-brand-orange" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button asChild size="lg" className="btn-primary self-start">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.slice(0, 6).map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="border-gray-300 hover:border-brand-orange hover:text-brand-orange"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-gray-100">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and best practices in team building and corporate development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-orange text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} className="text-brand-orange" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} className="text-brand-orange" />
                      <span>{new Date(post.date).toLocaleDateString('en-ZA', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} className="text-brand-orange" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs text-gray-500">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Want to stay updated with our latest insights?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Subscribe to Newsletter
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-brand-orange to-brand-yellow text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get the latest team building insights, trends, and best practices delivered to your inbox. 
            Join over 1,000 business leaders who trust our expertise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
