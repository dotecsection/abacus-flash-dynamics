
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseProps {
  course: {
    id: number;
    title: string;
    level: string;
    description: string;
    duration: string;
    classes: string;
    image: string;
  };
}

const CourseCard: React.FC<CourseProps> = ({ course }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-primary">{course.title}</h3>
          <Badge variant="secondary" className="bg-secondary text-primary">{course.level}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold text-primary">Duration:</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-primary">Classes:</span>
            <span>{course.classes}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
