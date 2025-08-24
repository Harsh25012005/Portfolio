import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock blog post data
  const post = {
    id: 1,
    title: 'The Future of UX Design: Emerging Trends in 2024',
    excerpt: 'Exploring the latest trends shaping the UX design landscape, from AI-powered interfaces to immersive experiences.',
    content: `
      <p>The world of UX design is constantly evolving, and 2024 promises to be a year of significant transformation. As we navigate through rapid technological advancements and changing user expectations, designers must adapt their approaches to stay relevant and effective.</p>

      <h2>AI-Powered Design Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we approach design. From automated layout suggestions to intelligent color palette generation, AI tools are becoming indispensable in the designer's toolkit. However, the key is learning how to collaborate with AI rather than being replaced by it.</p>

      <h2>Voice User Interfaces (VUI)</h2>
      <p>As smart speakers and voice assistants become more prevalent, designing for voice interactions is becoming crucial. VUI design requires a completely different mindset, focusing on conversational flows and audio feedback rather than visual elements.</p>

      <h2>Sustainable Design Practices</h2>
      <p>Environmental consciousness is influencing design decisions. Sustainable UX focuses on creating efficient, long-lasting digital products that minimize environmental impact through reduced server loads, optimized performance, and mindful resource usage.</p>

      <h2>Inclusive Design by Default</h2>
      <p>Accessibility is no longer an afterthought. Modern UX design incorporates inclusive design principles from the beginning, ensuring products are usable by people with diverse abilities, backgrounds, and contexts.</p>

      <h2>Micro-Interactions and Emotional Design</h2>
      <p>Small details make big differences. Thoughtful micro-interactions and emotional design elements create memorable experiences that connect with users on a deeper level, fostering brand loyalty and user engagement.</p>
    `,
    category: 'trends',
    readTime: '8 min read',
    publishDate: '2024-01-15',
    author: 'UX Designer',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfcc?w=1200&h=600&fit=crop',
    tags: ['UX Design', 'Trends', 'Future', 'AI', 'Accessibility']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Conducting Effective User Research',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Building Accessible Design Systems',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop',
      readTime: '10 min read'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!post) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <Link to="/blog">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className={`space-y-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto">
            <header className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="capitalize">{post.category}</Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-body leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video rounded-lg overflow-hidden bg-muted my-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-body prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <Card className="p-6 surface-elevated mt-12">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{post.author}</h3>
                  <p className="text-body text-sm leading-relaxed">
                    Passionate UX Designer with over 5+ years of experience creating 
                    meaningful digital experiences. Specializes in user research, 
                    interaction design, and design systems.
                  </p>
                  <div className="flex items-center space-x-4 pt-2">
                    <Link to="/about" className="text-primary hover:text-primary/80 transition-smooth text-sm font-medium">
                      View Profile
                    </Link>
                    <Link to="/contact" className="text-primary hover:text-primary/80 transition-smooth text-sm font-medium">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </article>

          {/* Related Posts */}
          <section className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Related Articles</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden surface-elevated hover:shadow-lg transition-smooth group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-semibold leading-tight group-hover:text-primary transition-smooth">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="text-primary hover:text-primary/80 transition-smooth text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="max-w-2xl mx-auto text-center py-12">
            <Card className="p-8 surface-elevated">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Stay Updated</h3>
                <p className="text-body">
                  Get the latest UX design insights and tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                  />
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

export default BlogDetail;