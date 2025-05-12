
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from "sonner";
import { LogIn, Key, Eye, EyeOff } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { adminLogin } from '@/utils/localDatabase';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Short delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use our adminLogin function
      if (adminLogin(username, password)) {
        // Show success message
        toast.success("Login Successful", {
          description: "Welcome back, Admin!"
        });
        
        // Redirect to admin dashboard
        navigate('/admin');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error("Login Failed", {
        description: "Invalid username or password. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left side - Decorative elements */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <div className="max-w-md space-y-6 text-center md:text-right">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">Admin Portal</h1>
              <p className="text-slate-600">
                Welcome to the Smart & Speed Abacus administrative dashboard. Login to access student registrations and manage course data.
              </p>
              <div className="hidden md:block relative">
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 mix-blend-multiply blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-300 rounded-full opacity-20 mix-blend-multiply blur-xl"></div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 mix-blend-multiply blur-md"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Login form */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Card className="w-full max-w-md shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-1">
                <div className="flex justify-center mb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
                <CardDescription className="text-center">
                  Enter your credentials to access the admin panel
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-white/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white/50 pr-10"
                        required
                      />
                      <button 
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground pt-2 text-center">
                    Default credentials: admin / password
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full transition-all hover:shadow-md"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                        Logging in...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <LogIn className="h-4 w-4" /> Login
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
              <div className="px-8 py-4">
                <div className="h-1 w-full bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 rounded-full"></div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
