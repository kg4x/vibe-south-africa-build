
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock,
  Tag,
  Share2,
  BookmarkPlus,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPost = {
    slug: 'ultimate-guide-team-building-south-africa-2024',
    title: 'The Ultimate Guide to Team Building in South Africa 2024',
    excerpt: 'Discover the latest trends, best practices, and innovative approaches to team building that are transforming South African workplaces.',
    content: `
      <p>Team building has evolved significantly in South Africa over the past few years. With the rise of remote work, changing workplace dynamics, and a greater focus on employee wellbeing, organizations are seeking more innovative and impactful team building solutions.</p>

      <p>In this comprehensive guide, we explore the current landscape of team building in South Africa, emerging trends, and how companies can maximize their investment in team development programs.</p>

      <h2>The Current State of Team Building in South Africa</h2>

      <p>South African businesses are increasingly recognizing the value of team building as a strategic investment rather than just a fun day out. Companies across industries are seeing measurable improvements in:</p>

      <ul>
        <li>Employee engagement and retention rates</li>
        <li>Cross-departmental collaboration</li>
        <li>Leadership development and succession planning</li>
        <li>Communication and conflict resolution</li>
        <li>Innovation and creative problem-solving</li>
      </ul>

      <h2>Emerging Trends in 2024</h2>

      <h3>1. Hybrid Team Building Experiences</h3>
      <p>With many organizations adopting hybrid work models, team building programs now combine in-person and virtual elements. This approach ensures all team members can participate regardless of their location.</p>

      <h3>2. Purpose-Driven Activities</h3>
      <p>Modern team building goes beyond traditional trust falls and icebreakers. Companies are seeking activities that align with their values and contribute to meaningful causes, such as community service projects or environmental conservation efforts.</p>

      <h3>3. Data-Driven Approach</h3>
      <p>Organizations are demanding measurable ROI from their team building investments. This has led to the development of assessment tools and metrics that track improvements in team performance, communication, and productivity.</p>

      <h3>4. Cultural Celebration and Inclusion</h3>
      <p>South Africa's rich cultural diversity is being celebrated through team building activities that promote understanding, inclusion, and cultural appreciation among team members.</p>

      <h2>Best Practices for Successful Team Building</h2>

      <p>To ensure your team building initiative delivers maximum impact, consider these proven strategies:</p>

      <h3>Define Clear Objectives</h3>
      <p>Before planning any team building activity, clearly define what you want to achieve. Whether it's improving communication, developing leadership skills, or boosting morale, having specific goals will guide your program design.</p>

      <h3>Know Your Team</h3>
      <p>Consider your team's demographics, interests, physical abilities, and cultural backgrounds when selecting activities. Inclusive programs ensure everyone can participate meaningfully.</p>

      <h3>Follow Up and Reinforce</h3>
      <p>The real value of team building comes from applying lessons learned back in the workplace. Plan follow-up sessions and create opportunities for teams to practice new skills and behaviors.</p>

      <h2>The VMA Events Difference</h2>

      <p>At VMA Events, we've been at the forefront of South Africa's team building evolution since 2017. Our approach combines adventure-based learning with proven corporate training methodologies to create experiences that deliver lasting results.</p>

      <p>We work closely with each client to understand their unique challenges and objectives, then design custom programs that address specific needs while ensuring maximum engagement and fun.</p>

      <h2>Conclusion</h2>

      <p>Team building in South Africa continues to evolve, becoming more strategic, inclusive, and results-focused. Organizations that invest in well-designed team building programs see significant returns in employee engagement, productivity, and overall business performance.</p>

      <p>Ready to transform your team? Contact VMA Events today to discuss how we can create a custom team building experience that delivers real results for your organization.</p>
    `,
    author: 'Vusi Mthembu',
    authorBio: 'Founder and CEO of VMA Events with over 15 years of experience in corporate training and team development across South Africa.',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Trends',
    tags: ['Team Building', 'South Africa', 'Corporate Training', 'Employee Engagement', 'Business Trends'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop'
  };

  const relatedPosts = [
    {
      slug: 'virtual-team-building-best-practices',
      title: 'Virtual Team Building Best Practices for South African Companies',
      excerpt: 'Learn how to create engaging virtual team building experiences that connect remote teams.',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=300&fit=crop',
      readTime: '6 min read'
    },
    {
      slug: 'measuring-team-building-roi',
      title: 'How to Measure the ROI of Your Team Building Investment',
      excerpt: 'Discover practical methods to measure the return on investment of your team building programs.',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      readTime: '7 min read'
    },
    {
      slug: 'leadership-development-trends-2024',
      title: 'Leadership Development Trends Shaping South African Businesses',
      excerpt: 'Stay ahead with insights into the latest leadership development trends.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      readTime: '9 min read'
    }
  ];

  return (
    <>
      <SEO 
        title={`${blogPost.title} - VMA Events Blog`}
        description={blogPost.excerpt}
        url={`/blog/${slug}`}
        keywords={blogPost.tags.join(', ')}
        type="article"
        author={blogPost.author}
        publishedTime={blogPost.date}
        image={blogPost.image}
      />

      {/* Breadcrumb Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand-orange transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Current Article</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
              <Link to="/blog">
                <ArrowLeft className="mr-2" size={16} />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-8">
              <Badge className="bg-brand-orange text-white mb-4">
                {blogPost.category}
              </Badge>
              <h1 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                {blogPost.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {blogPost.excerpt}
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-200 mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src={blogPost.authorImage} 
                    alt={blogPost.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{blogPost.author}</div>
                    <div className="text-sm text-gray-500">Author</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-brand-orange" />
                    <span>{new Date(blogPost.date).toLocaleDateString('en-ZA', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-brand-orange" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus size={16} className="mr-2" />
                  Save
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video relative overflow-hidden rounded-2xl mb-12">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                className="
                  prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-gray-600 prose-li:mb-2
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline
                "
              />
            </article>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-gray-600">
                  <Tag size={12} className="mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Bio */}
            <Card className="mt-12 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <img 
                    src={blogPost.authorImage} 
                    alt={blogPost.author}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      About {blogPost.author}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {blogPost.authorBio}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/about">
                        Learn More About Our Team
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-semibold mb-3 text-gray-900 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight size={14} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/blog">
                  View All Articles
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
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
            Let VMA Events create a custom team building experience that delivers the results 
            discussed in this article and more.
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

export default BlogPost;
