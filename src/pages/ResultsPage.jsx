import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Award, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { motion } from 'framer-motion';

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState('cbse10');

  const cbse10Results = [
    { name: 'Arnav Pradhan', score: '96%' },
    { name: 'Prakhar Rathore', score: '94%' },
    { name: 'Parth Naik', score: '93%' },
    { name: 'Yash Saraf', score: '92.4%' },
    { name: 'Parishit Gawade', score: '92%' },
    { name: 'Shreyansh Rane', score: '91%' },
    { name: 'Vineet Khadepurkar', score: '91%' },
    { name: 'Rudra Khairnar', score: '90%' },
    { name: 'Keya Desai', score: '90%' },
    { name: 'Prathmesh Patil', score: '89%' },
    { name: 'Archit Deshpande', score: '88%' },
    { name: 'Mauli Dere', score: '88%' },
    { name: 'Suhani Kale', score: '87.2%' },
    { name: 'Ruturaj Pawar', score: '85.2%' },
    { name: 'Manas Surwadkar', score: '85%' },
    { name: 'Satyam More', score: '85%' },
    { name: 'Aditya Pawar', score: '84%' },
    { name: 'Siddharth Ghodke', score: '82%' },
    { name: 'Aryan Jadhav', score: '82%' },
    { name: 'Neil Potdar', score: '81.5%' },
    { name: 'Vishnu Kulkarni', score: '81%' },
    { name: 'Arjun Rajkule', score: '81%' },
    { name: 'Anvita Upadhye', score: '80.2%' },
    { name: 'Varad Choudhat', score: '80%' }
  ];

  const ssc10Results = [
    { name: 'Chirag Baheti', score: '93%' },
    { name: 'Aayush Darekar', score: '93%' },
    { name: 'Sai Dalvi', score: '93%' },
    { name: 'Dhruv Shede', score: '93%' },
    { name: 'Yash Kolte', score: '93%' },
    { name: 'Mrunali Chalke', score: '91%' },
    { name: 'Yuvraj Zingade', score: '91%' },
    { name: 'Shresay Kamble', score: '89%' },
    { name: 'Sanjana', score: '86%' }
  ];

  const commerce12Results = [
    { name: 'Dev Manke', score: '86%', board: 'Commerce' },
    { name: 'Jayesh Bobade', score: '82%', board: 'Commerce' },
    { name: 'Aakash Joshi', score: '80%', board: 'Commerce' },
    { name: 'Arya Manke', score: '80%', board: 'Commerce' },
    { name: 'Sayujya Shinde', score: '83% (ICSE)', board: 'ICSE', subject: 'Economics 92/100' }
  ];

  const entranceResults = [
    { name: 'Rugved Hegde', achievement: 'IIT AIR 4437', exam: 'JEE Advanced' },
    { name: 'Akshaan Kaware', achievement: 'CET 97 Percentile', exam: 'MHT-CET', subject: 'Maths 98/100' },
    { name: 'Mihir Yadav', achievement: 'CET 95 Percentile', exam: 'MHT-CET' },
    { name: 'Ishwari Shkade', achievement: 'MHT-CET 97 Percentile', exam: 'MHT-CET' },
    { name: 'Arush Padekar', achievement: 'MHT-CET 80 Percentile', exam: 'MHT-CET' }
  ];

  const renderStudentCard = (result, index, type) => {
    let isTopScorer = false;
    let numericScore = parseFloat(result.score || result.achievement);
    
    if (type === 'entrance' && (result.achievement.includes('IIT') || numericScore >= 95)) {
      isTopScorer = true;
    } else if (numericScore >= 96) {
      isTopScorer = true;
    }

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % 12) * 0.05 }}
      >
        <Card className="h-full border-none bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center text-center">
            {isTopScorer && (
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-none font-bold shadow-sm z-10">
                <Star className="w-3 h-3 mr-1 fill-accent-foreground" />
                Top
              </Badge>
            )}
            
            <div className="w-24 h-24 rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors p-1 mb-4 relative bg-white flex-shrink-0">
              <div className="w-full h-full rounded-full bg-primary-light flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-primary/40" />
              </div>
            </div>
            
            <h3 className="font-bold text-primary text-lg mb-1 leading-tight">{result.name}</h3>
            
            <div className="mt-auto">
              <span className={`inline-block px-3 py-1 rounded-full font-bold text-lg mb-2 ${
                isTopScorer ? 'text-primary bg-accent/20' : 'text-primary bg-primary/10'
              }`}>
                {result.score || result.achievement}
              </span>
              
              {(result.board || result.exam || type !== 'regular') && (
                <p className="text-sm font-bold text-muted-foreground">
                  {result.board || result.exam || (type === 'cbse10' ? 'CBSE Class X' : 'SSC Class X')}
                </p>
              )}
              {result.subject && (
                <p className="text-xs font-bold text-primary/70 mt-1">{result.subject}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Outstanding Results | Champions Tutorials Pune</title>
        <meta name="description" content="View our outstanding results - 100% board results, IIT rankers, and top scores in CBSE, ICSE, SSC, and competitive exams." />
      </Helmet>

      <Header />
      <FloatingWhatsAppButton />

      <main className="bg-primary-light min-h-screen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 lg:w-64 h-48 lg:h-64 bg-accent pattern-triangle-top-right opacity-80 pointer-events-none" />
        <div className="absolute top-0 left-0 w-32 lg:w-48 h-32 lg:h-48 bg-primary pattern-triangle-top-left opacity-10 pointer-events-none" />
        
        <section className="pt-24 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6 shadow-lg">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 uppercase tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Celebrating Excellence
              </h1>
              <p className="motivational-text text-xl md:text-2xl text-primary/90 max-w-3xl mx-auto mb-12 border-l-4 border-accent pl-6 py-2 text-left bg-white/60 rounded-r-xl shadow-sm backdrop-blur-sm font-medium">
                "We are extremely proud of our students and congratulate them for their success. They have displayed an incredible execution of diligence and scholarly energy with 100% results in the board exam."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
                <div className="flex justify-center mb-10">
                  <TabsList className="bg-white/80 backdrop-blur p-1.5 rounded-xl shadow-md border border-primary/10 flex flex-wrap h-auto">
                    <TabsTrigger 
                      value="cbse10" 
                      className="px-6 py-3 rounded-lg text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                    >
                      CBSE 10th
                    </TabsTrigger>
                    <TabsTrigger 
                      value="ssc10" 
                      className="px-6 py-3 rounded-lg text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                    >
                      SSC 10th
                    </TabsTrigger>
                    <TabsTrigger 
                      value="commerce12" 
                      className="px-6 py-3 rounded-lg text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                    >
                      12th Commerce
                    </TabsTrigger>
                    <TabsTrigger 
                      value="entrance" 
                      className="px-6 py-3 rounded-lg text-sm md:text-base font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                    >
                      JEE-NEET-CET
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border border-white">
                  <TabsContent value="cbse10" className="mt-0 outline-none">
                    <div className="text-center mb-8 ribbon-banner py-3 px-8 inline-block mx-auto rounded-sm shadow-md">
                      <h2 className="text-xl font-bold uppercase tracking-wider text-white">CBSE Class X Toppers</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                      {cbse10Results.map((result, index) => renderStudentCard(result, index, 'cbse10'))}
                    </div>
                  </TabsContent>

                  <TabsContent value="ssc10" className="mt-0 outline-none">
                    <div className="text-center mb-8 ribbon-banner py-3 px-8 inline-block mx-auto rounded-sm shadow-md">
                      <h2 className="text-xl font-bold uppercase tracking-wider text-white">SSC Class X Toppers</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                      {ssc10Results.map((result, index) => renderStudentCard(result, index, 'ssc10'))}
                    </div>
                  </TabsContent>

                  <TabsContent value="commerce12" className="mt-0 outline-none">
                    <div className="text-center mb-8 ribbon-banner py-3 px-8 inline-block mx-auto rounded-sm shadow-md">
                      <h2 className="text-xl font-bold uppercase tracking-wider text-white">Class XII Commerce Results</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                      {commerce12Results.map((result, index) => renderStudentCard(result, index, 'regular'))}
                    </div>
                  </TabsContent>

                  <TabsContent value="entrance" className="mt-0 outline-none">
                    <div className="text-center mb-8 ribbon-banner py-3 px-8 inline-block mx-auto rounded-sm shadow-md">
                      <h2 className="text-xl font-bold uppercase tracking-wider text-white">JEE / NEET / CET Results</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                      {entranceResults.map((result, index) => renderStudentCard(result, index, 'entrance'))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          </div>
        </section>

        <section className="py-16 relative bg-primary">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent pattern-triangle-bottom-left opacity-80 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary-light p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-accent inline-block mx-auto max-w-4xl w-full"
            >
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-8 tracking-wide">
                Coaching Right <span className="text-accent block sm:inline mt-2 sm:mt-0 drop-shadow-sm">तो Future Bright!</span>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Enroll Now
                  </Button>
                </Link>
                <a href="https://wa.me/919284707840" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-xl font-bold text-lg shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
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

export default ResultsPage;