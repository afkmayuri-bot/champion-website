import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CarouselComponent = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !isPlaying) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);

  return (
    <div 
      className="relative w-full shadow-2xl rounded-2xl border-4 border-primary/20 bg-white p-2 md:p-4"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="overflow-hidden rounded-xl bg-muted/30" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              {/* Increased height for better visibility, using object-contain to prevent cut-off */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center bg-gradient-to-b from-muted/50 to-muted">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-contain drop-shadow-md"
                />
                
                {slide.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent">
                    <p className="text-white text-lg md:text-xl font-bold text-balance text-center drop-shadow-md">
                      {slide.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-primary/20 shadow-lg h-10 w-10 md:h-12 md:w-12 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-primary/20 shadow-lg h-10 w-10 md:h-12 md:w-12 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 shadow-sm ${
              index === selectedIndex 
                ? 'bg-accent w-8 md:w-10' 
                : 'bg-white/80 hover:bg-white'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;