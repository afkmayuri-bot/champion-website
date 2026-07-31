import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star, ExternalLink, Video, PlayCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToasterCard from '@/components/ToasterCard';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  const writtenReviews = [
    {
      name: 'Arnav Pradhan',
      score: '96%',
      board: 'CBSE Class X',
      review: 'Sunil Sir and Vikas Sir made learning enjoyable. Their teaching methods helped me score 96% in boards! The personalized attention and regular doubt-clearing sessions were invaluable.',
      rating: 5
    },
    {
      name: 'Rugved Hegde',
      score: 'IIT AIR 4437',
      board: 'JEE Advanced',
      review: 'The focused preparation and personalized attention at Champions Tutorials helped me crack IIT! The mock tests and problem-solving sessions were exactly what I needed.',
      rating: 5
    },
    {
      name: 'Prakhar Rathore',
      score: '94%',
      board: 'CBSE Class X',
      review: 'Best coaching in Pune! The teachers genuinely care about student success. Small batch sizes ensure everyone gets individual attention.',
      rating: 5
    },
    {
      name: 'Parishit Gawade',
      score: '92%',
      board: 'CBSE Class X',
      review: 'Excellent teaching quality and study material. The regular tests helped me track my progress and improve consistently.',
      rating: 5
    },
    {
      name: 'Akshaan Kaware',
      score: 'CET 97 Percentile',
      board: 'MHT-CET',
      review: 'Champions Tutorials provided the perfect balance of board and entrance exam preparation. Scored 98/100 in Maths!',
      rating: 5
    },
    {
      name: 'Chirag Baheti',
      score: '93%',
      board: 'SSC Class X',
      review: 'The faculty is extremely knowledgeable and supportive. They helped me build strong fundamentals and exam confidence.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Testimonials | Champions Tutorials Pune</title>
        <meta name="description" content="Read what our students say about Champions Tutorials. Real success stories, video testimonials, and Google reviews from our champions." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main>
        <section className="pt-16 pb-24 bg-gradient-to-b from-primary-light via-white to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="heading-display text-primary mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Student Testimonials
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Hear from our champions about their journey to success
              </p>
            </motion.div>

            {/* Video Testimonials Section - Portrait Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-32"
            >
              <div className="flex flex-col items-center justify-center gap-4 mb-16">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Video className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
                  See It For Yourself
                </h2>
                <p className="text-lg text-muted-foreground text-center max-w-2xl">
                  Take a look inside our classrooms and listen to real student experiences that make us Pune's most trusted institute.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl mx-auto px-2">
                {/* Video 1: Student Review */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="mb-6 flex items-center justify-center gap-3 w-full text-center">
                    <PlayCircle className="text-accent w-8 h-8 flex-shrink-0" />
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">Student Review</h3>
                  </div>
                  <div className="video-showcase-wrapper portrait">
                    <div className="p-0 bg-muted w-full">
                      <AspectRatio ratio={9 / 16}>
                        <iframe
                          src="https://drive.google.com/file/d/1awgyW1AW14p4XgOOk8xk-V0kr2OCtMJN/preview"
                          className="w-full h-full border-0"
                          allow="autoplay"
                          title="Student Review"
                          loading="lazy"
                        ></iframe>
                      </AspectRatio>
                    </div>
                  </div>
                </motion.div>

                {/* Video 2: Classroom Environment */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full flex flex-col items-center"
                >
                  <div className="mb-6 flex items-center justify-center gap-3 w-full text-center">
                    <PlayCircle className="text-accent w-8 h-8 flex-shrink-0" />
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">Classroom Teaching & Environment</h3>
                  </div>
                  <div className="video-showcase-wrapper portrait">
                    <div className="p-0 bg-muted w-full">
                      <AspectRatio ratio={9 / 16}>
                        <iframe
                          src="https://drive.google.com/file/d/1PKYIQGGbwnz0z__yCgZgmgHBoZE2csaw/preview"
                          className="w-full h-full border-0"
                          allow="autoplay"
                          title="Classroom Teaching & Environment"
                          loading="lazy"
                        ></iframe>
                      </AspectRatio>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Written Reviews Section */}
        <section className="section-padding bg-primary-light/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-section text-primary mb-10 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Written Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {writtenReviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ToasterCard {...review} />
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a
                  href="https://www.google.com/search?q=champions+tutorials+pune"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg px-8 py-6 text-lg rounded-xl font-bold transition-all duration-300 hover:-translate-y-1">
                    <Star className="h-6 w-6 mr-2 fill-accent text-accent" />
                    See All 107 Reviews on Google
                    <ExternalLink className="h-5 w-5 ml-2 opacity-70" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
                Join Our Success Stories
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-medium">
                Start your journey to academic excellence with Champions Tutorials
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Enroll Now
                  </Button>
                </Link>
                <a href="https://wa.me/919284707840" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Book A Free Demo
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TestimonialsPage;