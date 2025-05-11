
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import GalleryGrid from '@/components/GalleryGrid';

const Gallery: React.FC = () => {
  // Sample image data - in a real app, this would come from your CMS or API
  const classroomImages = [
    { src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", alt: "Classroom session", caption: "Weekly abacus class in progress" },
    { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", alt: "Students practicing", caption: "Students practicing addition exercises" },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", alt: "Group study", caption: "Group learning session" },
    { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", alt: "Individual attention", caption: "One-on-one training" },
    { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", alt: "Teaching session", caption: "Instructor demonstrating techniques" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", alt: "Digital lesson", caption: "Modern teaching methods" },
  ];
  
  const competitionImages = [
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", alt: "Regional competition", caption: "Students at the regional championship" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", alt: "Award ceremony", caption: "Annual awards distribution" },
    { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", alt: "National finals", caption: "Our students at the national finals" },
    { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", alt: "Winners", caption: "Competition winners 2023" },
  ];
  
  const eventsImages = [
    { src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", alt: "Annual day", caption: "Annual day celebrations" },
    { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", alt: "Parents meeting", caption: "Parent-teacher interaction session" },
    { src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", alt: "Workshop", caption: "Special workshop for beginners" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Gallery</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Browse through moments captured at our classes, competitions, and special events.
            </p>
          </div>
        </section>
        
        {/* Gallery Tabs */}
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="classroom" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="classroom">Classroom</TabsTrigger>
              <TabsTrigger value="competitions">Competitions</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="classroom">
              <GalleryGrid images={classroomImages} />
            </TabsContent>
            
            <TabsContent value="competitions">
              <GalleryGrid images={competitionImages} />
            </TabsContent>
            
            <TabsContent value="events">
              <GalleryGrid images={eventsImages} />
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
