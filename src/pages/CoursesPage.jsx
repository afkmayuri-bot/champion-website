import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { motion } from 'framer-motion';

const CoursesPage = () => {
  const courses = [
    {
      title: 'Classes VIII–X',
      boards: 'ICSE, CBSE, State Board/SSC',
      subjects: 'Maths, Science, English, Social Studies',
      focus: 'Board exam excellence + strong foundation for future success. We focus on concept clarity, regular practice, and exam-oriented preparation to ensure students not only score well but also build a solid foundation for higher studies.',
      highlights: ['100% Results', 'Expert Faculty', 'Small Batches', 'Regular Tests', 'Doubt Clearing'],
      icon: GraduationCap
    },
    {
      title: 'Classes XI–XII',
      boards: 'Science & Commerce Streams',
      subjects: 'Physics, Chemistry, Maths, Biology, Accounts, Economics',
      focus: 'Board preparation + entrance exam foundation. Our comprehensive curriculum covers both board syllabus and entrance exam requirements, ensuring students are well-prepared for their future academic pursuits.',
      highlights: ['Board + Entrance', 'Concept Clarity', 'Regular Tests', 'Study Material', 'Mock Exams'],
      icon: Target
    },
    {
      title: 'JEE / NEET / CET',
      boards: 'Engineering & Medical Entrance Preparation',
      subjects: 'Physics, Chemistry, Maths, Biology',
      focus: 'Proven results: IIT AIR 4437, CET 97 Percentile. Our specialized coaching focuses on concept clarity, problem-solving techniques, and exam strategy. We provide comprehensive study material, regular mock tests, and personalized mentorship to help students crack these competitive exams.',
      highlights: ['IIT Rankers', 'Expert Mentors', 'Mock Tests', 'Study Material', 'Doubt Sessions'],
      icon: Award
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Courses | Champions Tutorials Pune</title>
        <meta name="description" content="Explore our comprehensive coaching programs for Classes 8-12, JEE, NEET, and CET. Expert faculty, proven results, and personalized attention." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main>
        <section className="py-20 bg-gradient-to-br from-background via-primary-light to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
                Our Courses
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Comprehensive coaching programs designed for academic excellence and competitive exam success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-primary/20 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-primary mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Why Choose Champions Tutorials?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Expert Faculty:</span> Experienced teachers with proven track records in board and competitive exam coaching
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Small Batch Size:</span> Limited students per batch ensuring personalized attention to every student
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Comprehensive Study Material:</span> Well-researched notes, practice papers, and reference materials
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Regular Assessments:</span> Weekly tests and monthly exams to track progress and identify areas for improvement
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Doubt Clearing Sessions:</span> Dedicated time for one-on-one doubt resolution
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Parent-Teacher Meetings:</span> Regular updates on student progress and performance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Proven Results:</span> 100% board results and consistent success in competitive exams
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      <span className="font-bold text-foreground">Strategic Location:</span> Easily accessible location on Sinhgad Road, Pune
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-medium">
                Book a free demo class and experience the Champions Tutorials difference
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

export default CoursesPage;