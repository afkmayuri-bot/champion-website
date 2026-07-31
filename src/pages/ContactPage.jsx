import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import pb from '@/lib/pocketbaseClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    classLevel: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.classLevel) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await pb.collection('contact_submissions').create({
        name: formData.name,
        phone: formData.phone,
        class: formData.classLevel,
        message: formData.message || 'No message provided'
      }, { $autoCancel: false });

      toast.success('Form submitted successfully! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        classLevel: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again or use WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Champions Tutorials Pune</title>
        <meta name="description" content="Get in touch with Champions Tutorials. Book a free demo class. Located at Sinhgad Road, Pune. Call 9284707840 or 9823059233." />
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
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Get in touch with us to enroll or learn more about our courses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Submit an Inquiry</CardTitle>
                    <CardDescription className="font-medium">Fill in your details and our team will call you back</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-bold">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          className="text-foreground border-primary/20 focus-visible:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-bold">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          required
                          className="text-foreground border-primary/20 focus-visible:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="class" className="font-bold">Class *</Label>
                        <Select value={formData.classLevel} onValueChange={(value) => handleChange('classLevel', value)}>
                          <SelectTrigger id="class" className="text-foreground border-primary/20 focus-visible:ring-primary">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8-10">Classes VIII–X</SelectItem>
                            <SelectItem value="11-12">Classes XI–XII</SelectItem>
                            <SelectItem value="jee-neet-cet">JEE / NEET / CET</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-bold">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Any specific requirements or questions?"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={4}
                          className="text-foreground border-primary/20 focus-visible:ring-primary"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Request'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Card className="border-primary/20 shadow-md bg-primary text-primary-foreground overflow-hidden relative">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Instant Connect</CardTitle>
                    <CardDescription className="text-primary-foreground/80">Want a faster response? Chat with us directly on WhatsApp.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://wa.me/919284707840" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg" size="lg">
                        <MessageCircle className="w-5 h-5 mr-2" /> Book A Free Demo
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Phone className="h-5 w-5 text-accent" />
                      Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href="tel:9284707840" className="block text-lg text-muted-foreground hover:text-primary transition-colors font-bold">
                      +91 9284707840
                    </a>
                    <a href="tel:9823059233" className="block text-lg text-muted-foreground hover:text-primary transition-colors font-bold">
                      +91 9823059233
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <MapPin className="h-5 w-5 text-accent" />
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4 font-medium">
                      2nd Floor, Kudale Patil Prestige<br />
                      Sinhgad Road<br />
                      Pune – 411051
                    </p>
                    <a
                      href="https://maps.app.goo.gl/Qm8iLoGfsxiCV6qg9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold">
                        Get Directions
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Clock className="h-5 w-5 text-accent" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">Open until 9 PM</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Champions Tutorials Location"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;