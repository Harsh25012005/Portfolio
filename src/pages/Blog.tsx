import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Search, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['all', 'ux design', 'ui design', 'research', 'tools', 'trends'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of UX Design: Emerging Trends in 2024',
      excerpt: 'Exploring the latest trends shaping the UX design landscape, from AI-powered interfaces to immersive experiences.',
      category: 'trends',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      author: 'UX Designer',
      featured: true,
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfcc?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Conducting Effective User Research: A Complete Guide',
      excerpt: 'Learn how to plan, conduct, and analyze user research to make informed design decisions that truly serve your users.',
      category: 'research',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      author: 'UX Designer',
      featured: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Building Accessible Design Systems from Scratch',
      excerpt: 'A comprehensive guide to creating inclusive design systems that work for everyone, including accessibility best practices.',
      category: 'ux design',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      author: 'UX Designer',
      featured: false,
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Top 10 UI Design Tools Every Designer Should Know',
      excerpt: 'Discover the essential tools that can streamline your design workflow and improve collaboration with your team.',
      category: 'tools',
      readTime: '6 min read',
      publishDate: '2023-12-28',
      author: 'UX Designer',
      featured: false,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'The Psychology Behind Effective UI Design',
      excerpt: 'Understanding cognitive principles and psychological triggers that make interfaces more intuitive and engaging.',
      category: 'ui design',
      readTime: '9 min read',
      publishDate: '2023-12-20',
      author: 'UX Designer',
      featured: false,
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Exploring the importance of mobile-first approach in modern web design and its impact on user experience.',
      category: 'ux design',
      readTime: '7 min read',
      publishDate: '2023-12-15',
      author: 'UX Designer',
      featured: false,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Header */}
          <section className="text-center space-y-6">
            <h1 className="text-display font-bold">
              Design <span className="brand-accent">Blog</span>
            </h1>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              Insights, thoughts, and learnings about UX design, user research, 
              and creating meaningful digital experiences.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'all' && !searchQuery && (
            <section>
              <Card className="overflow-hidden surface-elevated">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <Badge className="bg-primary/10 text-primary">Featured</Badge>
                        <Badge variant="outline" className="capitalize">
                          {featuredPost.category}
                        </Badge>
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-body leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(featuredPost.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <Link to={`/blog/${featuredPost.id}`}>
                        <Button className="mt-4">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          )}

          {/* Blog Posts Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden surface-elevated hover:shadow-lg transition-smooth group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="capitalize text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-body text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <time className="text-xs text-muted-foreground">
                      {formatDate(post.publishDate)}
                    </time>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-smooth text-sm font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </section>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <section className="text-center py-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">No articles found</h3>
                <p className="text-body">
                  Try adjusting your search or filter criteria.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </section>
          )}

          {/* Newsletter CTA */}
          <section className="text-center py-12">
            <Card className="p-8 surface-elevated max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Stay Updated</h3>
                <p className="text-body">
                  Get the latest UX design insights and tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Blog;