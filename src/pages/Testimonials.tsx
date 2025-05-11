
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const parentTestimonials = [
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
    },
    {
      id: 5,
      name: "Jennifer Lee",
      role: "Parent of Daniel, 11 years old",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      content: "The structured program and regular assessments keep my son motivated. His school teachers have also noticed significant improvement in his math performance.",
      rating: 5
    }
  ];
  
  const teacherTestimonials = [
    {
      id: 6,
      name: "Mrs. Anderson",
      role: "Elementary School Math Teacher",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      content: "Students who attend Smart & Speed Abacus consistently show better number sense and calculation abilities in my classroom.",
      rating: 5
    },
    {
      id: 7,
      name: "Mr. Garcia",
      role: "Middle School Math Teacher",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      content: "I've noticed that children with abacus training demonstrate superior mental calculation skills and analytical thinking.",
      rating: 4
    },
    {
      id: 8,
      name: "Dr. Williams",
      role: "Educational Psychologist",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      content: "The cognitive benefits of abacus training extend well beyond mathematics. It enhances memory, focus, and problem-solving abilities.",
      rating: 5
    }
  ];
  
  const studentTestimonials = [
    {
      id: 9,
      name: "Alex Johnson",
      role: "Student, Age 9",
      content: "I love abacus classes! I can do big sums in my head now and it's like a superpower!",
      rating: 5
    },
    {
      id: 10,
      name: "Lily Chen",
      role: "Student, Age 7",
      content: "Abacus is fun! I like moving the beads and solving problems. I'm the fastest math solver in my class now.",
      rating: 5
    },
    {
      id: 11,
      name: "Raj Sharma",
      role: "Student, Age 10",
      content: "I used to be scared of math, but now I can do calculations super fast without a calculator. My friends think it's cool!",
      rating: 4
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "The Johnson Family",
      description: "How abacus training transformed Alex's approach to mathematics",
      thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id: 2,
      name: "Competition Winners 2023",
      description: "Hear from our students who won at the national abacus championship",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Testimonials</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Hear from our parents, students, and educators about their experiences with Smart & Speed Abacus.
            </p>
          </div>
        </section>
        
        {/* Featured Testimonials Carousel */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">What Parents Say</h2>
          <TestimonialCarousel testimonials={parentTestimonials} />
        </section>
        
        {/* Tabbed Testimonials */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">More Success Stories</h2>
            
            <Tabs defaultValue="parents" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="parents">Parents</TabsTrigger>
                <TabsTrigger value="teachers">Educators</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
              </TabsList>
              
              <TabsContent value="parents">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {parentTestimonials.slice(0, 3).map((testimonial) => (
                    <Card key={testimonial.id}>
                      <CardContent className="p-6">
                        <p className="italic text-gray-600 mb-4">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 mr-3">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="teachers">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teacherTestimonials.map((testimonial) => (
                    <Card key={testimonial.id}>
                      <CardContent className="p-6">
                        <p className="italic text-gray-600 mb-4">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 mr-3">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="students">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentTestimonials.map((testimonial) => (
                    <Card key={testimonial.id}>
                      <CardContent className="p-6">
                        <p className="italic text-gray-600 mb-4">"{testimonial.content}"</p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Video Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center pl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polygon points="6 3 20 12 6 21 6 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{video.name}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Child's Abacus Journey?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied parents and students who've transformed their mathematical abilities through our proven abacus training program.
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
    </div>
  );
};

export default Testimonials;
