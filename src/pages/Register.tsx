
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useForm, Controller } from 'react-hook-form';
import { toast } from "sonner";
import { CheckCircle, FileInput } from "lucide-react";

const Register: React.FC = () => {
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onSubmit = (data: any) => {
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    
    // Add all form fields to formData
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    
    // Add the file if one was selected
    if (selectedFile) {
      formData.append('studentDocument', selectedFile);
    }
    
    console.log("Registration form submitted:", data);
    console.log("File uploaded:", selectedFile);
    
    // In a real implementation, you would send this formData to your backend
    // For example:
    // fetch('/api/register', {
    //   method: 'POST',
    //   body: formData
    // });
    
    toast.success("Registration successful! We'll contact you soon.");
    setIsSubmitted(true);
    reset();
    setSelectedFile(null);
    
    // The form data would be available in the admin dashboard
    // Store in localStorage for demo purposes (in real app, send to backend)
    const registrations = JSON.parse(localStorage.getItem('studentRegistrations') || '[]');
    registrations.push({
      ...data,
      fileUploaded: selectedFile ? selectedFile.name : 'No file uploaded',
      submissionDate: new Date().toISOString()
    });
    localStorage.setItem('studentRegistrations', JSON.stringify(registrations));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Student Registration</h1>
            <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Complete the form below to register your child for our abacus programs.
            </p>
          </div>
        </section>
        
        {/* Success Message */}
        {isSubmitted && (
          <section className="container mx-auto px-4 py-6">
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800">Registration Submitted Successfully!</AlertTitle>
              <AlertDescription className="text-green-700">
                Thank you for registering with Smart & Speed Abacus. Our staff will contact you soon to confirm enrollment details.
              </AlertDescription>
            </Alert>
          </section>
        )}
        
        {/* Registration Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="border-b pb-4">
                <h2 className="text-2xl font-bold">Student Information</h2>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Student Details */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName"
                          {...register("firstName", { required: "First name is required" })}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName.message as string}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName"
                          {...register("lastName", { required: "Last name is required" })}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName.message as string}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input 
                          id="age"
                          type="number"
                          {...register("age", { 
                            required: "Age is required",
                            min: { value: 4, message: "Minimum age is 4" },
                            max: { value: 16, message: "Maximum age is 16" }
                          })}
                        />
                        {errors.age && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.age.message as string}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label>Gender</Label>
                        <Controller
                          control={control}
                          name="gender"
                          rules={{ required: "Please select gender" }}
                          render={({ field }) => (
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-4 pt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="male" id="male" />
                                <Label htmlFor="male">Male</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="female" id="female" />
                                <Label htmlFor="female">Female</Label>
                              </div>
                            </RadioGroup>
                          )}
                        />
                        {errors.gender && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.gender.message as string}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="grade">School Grade</Label>
                        <Input 
                          id="grade"
                          {...register("grade", { required: "School grade is required" })}
                        />
                        {errors.grade && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.grade.message as string}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="school">School Name</Label>
                      <Input 
                        id="school"
                        {...register("school", { required: "School name is required" })}
                      />
                      {errors.school && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.school.message as string}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Parent/Guardian Details */}
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Parent/Guardian Information</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="parentName">Full Name</Label>
                          <Input 
                            id="parentName"
                            {...register("parentName", { required: "Parent name is required" })}
                          />
                          {errors.parentName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.parentName.message as string}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="relationship">Relationship to Student</Label>
                          <Input 
                            id="relationship"
                            {...register("relationship", { required: "Relationship is required" })}
                          />
                          {errors.relationship && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.relationship.message as string}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone"
                            {...register("phone", { required: "Phone number is required" })}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.phone.message as string}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            type="email"
                            {...register("email", { 
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                              }
                            })}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message as string}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address">Home Address</Label>
                        <Textarea 
                          id="address"
                          {...register("address", { required: "Address is required" })}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.address.message as string}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Selection */}
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-semibold mb-4">Course Selection</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="course">Select Course Level</Label>
                        <Controller
                          control={control}
                          name="course"
                          rules={{ required: "Please select a course" }}
                          render={({ field }) => (
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a course level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner (Level 1)</SelectItem>
                                <SelectItem value="intermediate">Intermediate (Level 2)</SelectItem>
                                <SelectItem value="advanced">Advanced (Level 3)</SelectItem>
                                <SelectItem value="competition">Competition Preparation</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.course && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.course.message as string}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="schedule">Preferred Schedule</Label>
                        <Controller
                          control={control}
                          name="schedule"
                          rules={{ required: "Please select a schedule" }}
                          render={({ field }) => (
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred schedule" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekday-morning">Weekday Mornings</SelectItem>
                                <SelectItem value="weekday-afternoon">Weekday Afternoons</SelectItem>
                                <SelectItem value="weekday-evening">Weekday Evenings</SelectItem>
                                <SelectItem value="weekend-morning">Weekend Mornings</SelectItem>
                                <SelectItem value="weekend-afternoon">Weekend Afternoons</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.schedule && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.schedule.message as string}
                          </p>
                        )}
                      </div>
                      
                      {/* Document Upload */}
                      <div>
                        <Label htmlFor="document">Upload Document (Optional)</Label>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex-1">
                            <div className="border rounded-md px-3 py-2 bg-white flex items-center">
                              <FileInput className="h-4 w-4 text-primary mr-2" />
                              <span className="text-sm text-gray-500">
                                {selectedFile ? selectedFile.name : 'No file selected'}
                              </span>
                            </div>
                          </div>
                          <div>
                            <label className="cursor-pointer">
                              <span className="bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium">
                                Browse
                              </span>
                              <input
                                type="file"
                                className="hidden"
                                accept=".pdf,.doc,.docx,.jpg,.png"
                                onChange={handleFileChange}
                              />
                            </label>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Accepted file types: PDF, DOC, DOCX, JPG, PNG (Max size: 5MB)
                        </p>
                      </div>
                      
                      <div>
                        <Label htmlFor="comments">Additional Comments or Questions</Label>
                        <Textarea 
                          id="comments"
                          {...register("comments")}
                          placeholder="Any special requirements, medical conditions, or questions"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="border-t pt-6 mt-6">
                    <Button type="submit" size="lg" className="w-full">Submit Registration</Button>
                    <p className="text-sm text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our terms and conditions.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
