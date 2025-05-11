
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import NewsMarquee from '@/components/NewsMarquee';
import ContactPopup from '@/components/ContactPopup';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { BookOpenIcon, UserIcon, CalendarDaysIcon, ImageIcon, MessageCircleIcon, HelpCircleIcon } from 'lucide-react';

const Home: React.FC = () => {
  // Sample image data - in a real app, this would come from your CMS or API
  const sliderImages = [
    { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", alt: "Abacus classroom" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", alt: "Mathematics concept" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", alt: "Student learning" },
  ];
  
  // Sample news items
  const newsItems = [
    "New batch starting on June 15th - Register Now!",
    "National Abacus Competition - Register by May 30th",
    "Summer Camp for kids aged 5-12 years",
    "Free demo class every Sunday",
  ];
  
  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent of Alex, 9 years old",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "My daughter's calculation speed has improved tremendously since joining Smart & Speed Abacus. The instructors are very patient and supportive.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent of Lily, 7 years old",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "The mental math abilities my son has developed are incredible. He can now solve complex calculations faster than I can with a calculator!",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Parent of Raj, 10 years old",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      content: "Beyond just math skills, my child has developed better focus and concentration in all subjects since joining the abacus program.",
      rating: 4
    },
    {
      id: 4,
      name: "Robert Wilson",
      role: "Parent of Emma, 8 years old",
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
      content: "The transformation in my daughter's confidence with numbers is remarkable. She now enjoys math and no longer fears it.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <NewsMarquee news={newsItems} />
      
      <main className="flex-grow">
        {/* Hero Section with Slider */}
        <section className="container mx-auto px-4 mt-6">
          <ImageSlider images={sliderImages} />
        </section>
        
        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Welcome to Smart & Speed Abacus</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhancing mental arithmetic skills through the ancient art of abacus calculation. Building a strong mathematical foundation for your child's future.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <UserIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">Learn from certified abacus trainers with years of experience teaching children of all ages.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Progressive learning system with regular assessments and certifications at each level.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CalendarDaysIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mental Development</h3>
                <p className="text-gray-600">Improve concentration, memory, and creative thinking while mastering mathematical skills.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link to="/courses">
              <Button size="lg" className="px-8">Explore Our Courses</Button>
            </Link>
          </div>
        </section>
        
        {/* Courses Preview Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Abacus Programs</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Structured learning programs designed for different age groups and skill levels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                    alt="Beginner Abacus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Beginner Abacus</h3>
                  <p className="text-gray-600 mb-4">Perfect introduction for children aged 5-7 years with no prior experience.</p>
                  <Link to="/courses">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                    alt="Advanced Abacus" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">Advanced Abacus</h3>
                  <p className="text-gray-600 mb-4">Master complex calculations and mental arithmetic techniques.</p>
                  <Link to="/courses">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/courses">
                <Button>View All Courses</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Parents Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from parents whose children have benefited from our abacus programs
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline">View All Testimonials</Button>
            </Link>
          </div>
        </section>
        
        {/* Quick Links Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore More</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover other resources and sections of our website
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/about">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <UserIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <p className="text-gray-600">Learn more about our story, mission, and teaching philosophy.</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/gallery">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <ImageIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Gallery</h3>
                    <p className="text-gray-600">Browse photos from our classes, events, and competitions.</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/blog">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <BookOpenIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Blog</h3>
                    <p className="text-gray-600">Read articles about abacus benefits, tips, and learning strategies.</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/faq">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <HelpCircleIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">FAQs</h3>
                    <p className="text-gray-600">Find answers to commonly asked questions about our programs.</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/contact">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <MessageCircleIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                    <p className="text-gray-600">Get in touch with us for any inquiries or to schedule a demo class.</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/register">
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <UserIcon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Register</h3>
                    <p className="text-gray-600">Enroll your child in our abacus programs to start their journey.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Registration CTA */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Enroll Your Child?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Give your child the gift of mental arithmetic skills that will benefit them throughout their life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" variant="secondary">Register Now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Sticky Contact Popup */}
      <ContactPopup />
    </div>
  );
};

export default Home;
