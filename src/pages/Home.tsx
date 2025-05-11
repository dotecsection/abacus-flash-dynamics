
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import NewsMarquee from '@/components/NewsMarquee';
import ContactPopup from '@/components/ContactPopup';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">Learn from certified abacus trainers with years of experience teaching children of all ages.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Progressive learning system with regular assessments and certifications at each level.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
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
        
        {/* Testimonials Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Parents Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">"My daughter's calculation speed has improved tremendously since joining Smart & Speed Abacus. The instructors are very patient and supportive."</p>
                  <p className="font-semibold">- Sarah Johnson, Parent</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">"The mental math abilities my son has developed are incredible. He can now solve complex calculations faster than I can with a calculator!"</p>
                  <p className="font-semibold">- Michael Chen, Parent</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <p className="italic text-gray-600 mb-4">"Beyond just math skills, my child has developed better focus and concentration in all subjects since joining the abacus program."</p>
                  <p className="font-semibold">- Priya Sharma, Parent</p>
                </CardContent>
              </Card>
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
