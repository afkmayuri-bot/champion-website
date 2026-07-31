import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: '👨‍🏫',
    title: 'Experienced & Dedicated Faculty',
    description: 'Learn from passionate educators with years of proven success in guiding students to top ranks.'
  },
  {
    icon: '🎯',
    title: 'Personalized Attention',
    description: 'Individual focus to ensure every student understands core concepts and reaches their full potential.'
  },
  {
    icon: '📝',
    title: 'Regular Tests & Assessments',
    description: 'Continuous evaluation through weekly tests to track progress and build exam confidence.'
  },
  {
    icon: '💻',
    title: 'Online Exam Portal Access',
    description: 'State-of-the-art digital platform for mock tests, previous papers, and detailed performance analytics.'
  },
  {
    icon: '❓',
    title: 'Doubt Solving Sessions',
    description: 'Dedicated one-on-one time to clear complex concepts and strengthen foundational understanding.'
  },
  {
    icon: '🏆',
    title: 'Result-Oriented Teaching',
    description: 'Strategic, exam-focused approach designed to maximize scores in boards and entrance exams.'
  },
  {
    icon: '👥',
    title: 'Small Batch Sizes',
    description: 'Limited students per batch to ensure better teacher-student interaction and effective mentoring.'
  },
  {
    icon: '😊',
    title: 'Student-Friendly Environment',
    description: 'A positive, encouraging, and stress-free space that makes the learning process enjoyable.'
  },
  {
    icon: '⭐',
    title: 'Academic Excellence',
    description: 'A consistent track record of producing top scorers, IIT rankers, and 100% board results.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wide uppercase">
            Why Choose Champions Tutorials
          </span>
          <h2 className="heading-section text-primary mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Building Strong Foundations for a Bright Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            We don't just teach; we mentor, guide, and inspire students to achieve their highest academic potential.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full border-border/50 bg-card feature-card-hover group overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 feature-icon-wrapper border border-primary/10 shadow-sm">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </CardContent>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;