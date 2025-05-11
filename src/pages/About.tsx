
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { UserIcon, BookOpenIcon, CalendarIcon } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Head Instructor",
      bio: "With over 15 years of experience teaching abacus to children, Sarah founded Smart & Speed Abacus with a vision to make mental arithmetic accessible to all children.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Michael Chen",
      role: "Senior Instructor",
      bio: "A mathematics graduate and certified abacus trainer, Michael specializes in teaching advanced levels and preparing students for competitions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Priya Sharma",
      role: "Junior Instructor",
      bio: "Priya brings fresh teaching approaches to our beginner classes. Her patience and creativity make learning abacus fun for young learners.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">About Us</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Discover the story behind Smart & Speed Abacus and our passion for teaching mental arithmetic skills.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Smart & Speed Abacus was founded in 2010 with a simple mission: to enhance children's mental arithmetic abilities through the ancient art of abacus calculation.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small classroom with just five students has now grown into a premier institution with multiple branches, teaching hundreds of students annually.
              </p>
              <p className="text-gray-600">
                We believe that every child can master mental arithmetic with the right guidance. Our teaching methodology combines traditional abacus techniques with modern learning approaches to make the learning process engaging and effective.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Our classroom" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <UserIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                  <p className="text-gray-600">All our instructors are certified abacus trainers with years of teaching experience.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BookOpenIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Proven Curriculum</h3>
                  <p className="text-gray-600">Our structured learning program ensures systematic development of mental arithmetic skills.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
                  <p className="text-gray-600">We offer multiple batches throughout the week to accommodate your child's schedule.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
