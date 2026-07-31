import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ToasterCard = ({ name, score, board, review, rating = 5, isPlaceholder = false }) => {
  if (isPlaceholder) {
    return (
      <Card className="h-full border-dashed border-2 border-muted bg-muted/30">
        <CardContent className="flex items-center justify-center h-full min-h-[200px] p-6">
          <p className="text-muted-foreground text-center italic">Review coming soon...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/20">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
            />
          ))}
        </div>
        {review && (
          <p className="text-muted-foreground leading-relaxed italic">"{review}"</p>
        )}
        <div className="pt-4 border-t border-border">
          <p className="font-semibold text-foreground">{name}</p>
          {score && board && (
            <p className="text-sm text-muted-foreground">{score} — {board}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToasterCard;