
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { CalendarDaysIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The History of Abacus and Its Educational Benefits",
      excerpt: "Explore the fascinating history of the abacus from ancient civilizations to its modern educational applications.",
      date: "May 10, 2023",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 2,
      title: "How Abacus Training Improves Concentration in Children",
      excerpt: "Discover why abacus training is one of the most effective methods to enhance focus and concentration in young learners.",
      date: "April 22, 2023",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: 3,
      title: "The Connection Between Abacus Skills and Academic Performance",
      excerpt: "Research shows that students with abacus training often outperform their peers in mathematics and other subjects.",
      date: "March 15, 2023",
      author: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 4,
      title: "Tips for Practicing Abacus at Home",
      excerpt: "Simple and effective ways to help your child practice abacus calculation outside the classroom.",
      date: "February 28, 2023",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: 5,
      title: "Abacus vs. Calculator: Why Mental Math Still Matters",
      excerpt: "In the age of digital calculators, we explore why developing mental math skills through abacus remains essential.",
      date: "January 17, 2023",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Blog & News</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and updates from the world of abacus learning
            </p>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="container mx-auto px-4 py-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDaysIcon className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                <p className="text-gray-500 mb-6">By {blogPosts[0].author}</p>
                <Button>Read More</Button>
              </div>
            </div>
          </Card>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <Card key={post.id} className="flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <CalendarDaysIcon className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
