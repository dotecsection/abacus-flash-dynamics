
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is abacus training?",
      answer: "Abacus training is a method of teaching arithmetic using the abacus, a calculating tool that uses beads that slide on rods. It helps develop mental calculation abilities by visualizing numbers and operations."
    },
    {
      question: "At what age can my child start learning abacus?",
      answer: "Children as young as 5 years old can start learning abacus. The ideal age range is between 5-14 years when children's brains are most receptive to developing these skills."
    },
    {
      question: "How long does it take to complete an abacus course?",
      answer: "Our complete abacus program consists of multiple levels, with each level taking approximately 3-6 months to complete. The entire program typically takes 2-3 years, depending on the child's age, aptitude, and practice consistency."
    },
    {
      question: "How often are the classes conducted?",
      answer: "Most of our classes are conducted twice a week, with each session lasting 1-1.5 hours. We offer flexible scheduling options including weekday and weekend batches."
    },
    {
      question: "Do I need to purchase an abacus?",
      answer: "Yes, students need their own abacus for practice at home. We provide high-quality abacus tools at our center, or you can purchase one from us or any educational store."
    },
    {
      question: "How much practice is required at home?",
      answer: "We recommend 15-20 minutes of daily practice for optimal results. Consistent practice is key to developing mental calculation skills."
    },
    {
      question: "Will abacus training help with school mathematics?",
      answer: "Absolutely! Abacus training enhances calculation speed, accuracy, and number sense, which directly benefits school mathematics. It also improves concentration, memory, and problem-solving skills."
    },
    {
      question: "Are there any examinations or certifications?",
      answer: "Yes, we conduct regular assessments and level-based certifications. We also prepare students for national and international abacus competitions."
    },
    {
      question: "Can I attend a demo class before enrolling?",
      answer: "Yes, we offer free demo classes every Sunday. This gives both parents and children an opportunity to understand the teaching methodology and benefits of the program."
    },
    {
      question: "What is the fee structure?",
      answer: "Our fee structure varies based on the level and duration of the course. Please contact our admissions office for detailed information about current fees and available discounts."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our abacus programs and teaching methods.
            </p>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="container mx-auto px-4 py-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        {/* Still Have Questions */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Can't find the answer you're looking for? Please contact us directly for more information about our abacus programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg">Register for Demo Class</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
