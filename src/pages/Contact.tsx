
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import { MessageCircleIcon, PhoneIcon, MapIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    toast.success("Thank you for your message! We'll get back to you soon.");
    reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Contact Us</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out with any questions about our abacus programs.
            </p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our programs or want to register your child? Contact us using the form or through the information below.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <PhoneIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                      <p className="text-gray-600">+1 (987) 654-3210</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MessageCircleIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@smartspeedabacus.com</p>
                      <p className="text-gray-600">admissions@smartspeedabacus.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-600">123 Education Street</p>
                      <p className="text-gray-600">Learning City, ST 12345</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-600">
                  <p>Monday - Friday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                  <p>Saturday:</p>
                  <p>9:00 AM - 3:00 PM</p>
                  <p>Sunday:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name</label>
                      <Input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address</label>
                      <Input
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="Your Email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <Input
                        {...register("phone")}
                        placeholder="Your Phone (Optional)"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Subject</label>
                      <Input
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Message Subject"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject.message as string}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        {...register("message", { required: "Message is required" })}
                        placeholder="Your Message"
                        rows={5}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message as string}
                        </p>
                      )}
                    </div>
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map embed */}
            <div className="w-full h-full flex items-center justify-center">
              <p>Map will be embedded here</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
