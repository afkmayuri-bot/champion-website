import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';

const CourseCard = ({ title, boards, subjects, focus, highlights, icon: Icon }) => {
  return (
    <Card className="h-full border-primary/20 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl text-primary">{title}</CardTitle>
        <p className="text-sm font-bold text-accent">{boards}</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-sm text-muted-foreground font-medium mb-4">{subjects}</p>
        <p className="text-sm text-foreground/80 mb-6 flex-grow">{focus}</p>
        <div className="space-y-2 mb-6">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{highlight}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-primary/10">
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md">
            <Link to="/contact">Enroll Now</Link>
          </Button>
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 font-bold">
            <a href="https://wa.me/919284707840" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" /> Book A Free Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;