
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Beginner Abacus",
      level: "Level 1",
      description: "Introduction to abacus calculation. Perfect for children aged 5-7 years with no prior experience.",
      duration: "3 months",
      classes: "Weekly, 2 sessions of 1 hour each",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      id: 2,
      title: "Intermediate Abacus",
      level: "Level 2",
      description: "Build on basic skills with more complex calculations. For children who have completed Level 1.",
      duration: "4 months",
      classes: "Weekly, 2 sessions of 1 hour each",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: 3,
      title: "Advanced Abacus",
      level: "Level 3",
      description: "Master complex calculations and mental arithmetic. Develop speed and accuracy.",
      duration: "6 months",
      classes: "Weekly, 2 sessions of 1.5 hours each",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 4,
      title: "Competition Preparation",
      level: "Special",
      description: "Intensive training for students preparing for abacus competitions at regional and national levels.",
      duration: "3 months",
      classes: "Twice weekly, 2-hour sessions",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Our Abacus Courses</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Discover our structured learning programs designed to develop mental arithmetic skills through the ancient art of abacus.
            </p>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        
        {/* Registration CTA */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Enroll Your Child?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Give your child the gift of mental arithmetic skills that will benefit them throughout their life.
            </p>
            <Button size="lg" className="px-8">Register Now</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
