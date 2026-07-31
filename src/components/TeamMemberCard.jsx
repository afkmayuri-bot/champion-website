import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamMemberCard = ({ name, designation, description, imageUrl }) => {
  return (
    <Card className="h-full border-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary/10 rounded-full transform scale-110 group-hover:scale-125 transition-transform duration-500" />
          
          {/* Circular Photo Container */}
          <div className="w-[200px] h-[200px] rounded-full border-4 border-primary shadow-md overflow-hidden relative z-10 bg-muted">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full border-4 border-white z-20 shadow-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded-full" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {name}
        </h3>
        <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
          {designation}
        </p>
        
        <div className="w-16 h-1 bg-primary/20 rounded-full mb-4" />
        
        <p className="text-muted-foreground leading-relaxed font-medium">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;