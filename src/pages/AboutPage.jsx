import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Target, Heart, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import TeamMemberCard from '@/components/TeamMemberCard';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sunil Kumar Sir',
      designation: 'Founder & Director',
      description: 'With over a decade of teaching experience, Sunil Sir has mentored thousands of students to academic excellence. Known for his patience, dedication, and innovative teaching methods.',
      imageUrl: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/c2150e4e842554071b12d53cac625589.jpg'
    },
    {
      name: 'Vikas Sir',
      designation: 'Director',
      description: 'Brings a wealth of experience in coaching students for both board exams and competitive entrance tests. His structured approach focuses on deep concept clarity and exam strategy.',
      imageUrl: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/558fd3a927ff2f5d0a0651854ee4c162.jpg'
    },
    {
      name: "Sonali Shinde Ma'am",
      designation: 'Principal',
      description: 'An exceptional educator dedicated to building strong foundations for students. Her engaging teaching style makes learning enjoyable and helps students achieve remarkable results.',
      imageUrl: 'https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/8597f853104e4339e188dc653405783f.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Champions Tutorials Pune</title>
        <meta name="description" content="Learn about Champions Tutorials - Pune's most trusted coaching institute. Meet our founders and discover our vision for student success." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main>
        <section className="section-padding bg-gradient-to-br from-primary-light via-white to-primary-light/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-8">
                <img 
                  src="https://horizons-cdn.hostinger.com/c697388f-bdaf-4334-b8f0-581a7d11a8d9/b60aaa8ab323f5ff5e438d24f6dc233a.jpg" 
                  alt="Champions Tutorials Official Logo" 
                  className="h-24 md:h-32 w-auto object-contain rounded-xl shadow-sm border border-primary/10 bg-white p-2"
                />
              </div>
              <h1 className="heading-display text-primary mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                About Champions Tutorials
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Building champions through quality education and personalized mentorship
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary/20 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-accent leading-relaxed mb-4 font-bold italic">
                      "Coaching Right तो Future Bright!"
                    </p>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      At Champions Tutorials, we believe that every student has the potential to excel. Our mission is to provide the right guidance, support, and environment to help students achieve their academic goals and build a bright future.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full border-primary/20 shadow-md">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-primary">We Believe in Greatness</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      Champions are not born, they are made. Through dedicated teaching, personalized attention, and a nurturing environment, we help students discover their true potential. Our proven track record of 100% board results and IIT rankers speaks to our commitment to excellence.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-section text-primary mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Story
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                  Champions Tutorials was founded with a simple yet powerful vision: to provide quality education that transforms students into champions. Located in the heart of Pune on Sinhgad Road, we have been serving the educational needs of students from Classes VIII to XII, along with specialized coaching for JEE, NEET, and CET entrance exams.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                  What started as a small coaching center has grown into Pune's most trusted educational institution, with over 500 students coached and a consistent track record of 100% board results. Our success is built on the foundation of experienced faculty, personalized attention, and a genuine commitment to student success.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-base font-bold">
                    <Star className="h-4 w-4 mr-2 fill-accent text-accent" />
                    5.0 Google Rating
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-base font-bold">
                    <Award className="h-4 w-4 mr-2" />
                    100% Board Results
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-base font-bold">
                    107 Happy Reviews
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-primary-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="heading-section text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                The visionaries and educators behind Champions Tutorials
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TeamMemberCard {...member} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Join the Champions Family
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium">
                Experience the difference that quality coaching can make in your academic journey
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

export default AboutPage;