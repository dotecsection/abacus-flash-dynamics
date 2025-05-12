
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getStudents, Student, adminLogout } from '@/utils/localDatabase';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState<Student[]>([]);
  
  // Load student data
  useEffect(() => {
    const studentsData = getStudents();
    setStudents(studentsData);
  }, []);
  
  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/login');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    adminLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Button variant="destructive" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome to Smart & Speed Abacus Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your website content, enrollments, and user data from this dashboard.</p>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{students.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Active Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">New Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{students.filter(s => new Date(s.submissionDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="students">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="students">Student Registrations</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="slideshow">Slideshow Settings</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>
          
          <TabsContent value="students" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Registration Data</CardTitle>
              </CardHeader>
              <CardContent>
                {students.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Age</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Parent</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Submission Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {students.map((student, index) => (
                          <TableRow key={index}>
                            <TableCell>{student.firstName} {student.lastName}</TableCell>
                            <TableCell>{student.age}</TableCell>
                            <TableCell>{student.course}</TableCell>
                            <TableCell>{student.parentName}</TableCell>
                            <TableCell>{student.phone}</TableCell>
                            <TableCell>{new Date(student.submissionDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <Button variant="outline" size="sm" className="mr-2">View</Button>
                              <Button variant="destructive" size="sm">Delete</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <p className="text-center py-4">No student registrations yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="content" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Homepage Content</span>
                    <Button size="sm">Edit</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>About Us Page</span>
                    <Button size="sm">Edit</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Course Information</span>
                    <Button size="sm">Edit</Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded">
                    <span>Testimonials</span>
                    <Button size="sm">Edit</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="slideshow" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Slideshow Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full mb-4">Upload New Image</Button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="border rounded p-2">
                        <div className="aspect-video bg-gray-200 mb-2"></div>
                        <div className="flex justify-between">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="destructive">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">Email</th>
                        <th className="py-2 px-4 border-b text-left">Role</th>
                        <th className="py-2 px-4 border-b text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">John Doe</td>
                        <td className="py-2 px-4 border-b">john@example.com</td>
                        <td className="py-2 px-4 border-b">Admin</td>
                        <td className="py-2 px-4 border-b">
                          <Button size="sm" variant="outline" className="mr-2">Edit</Button>
                          <Button size="sm" variant="destructive">Delete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Jane Smith</td>
                        <td className="py-2 px-4 border-b">jane@example.com</td>
                        <td className="py-2 px-4 border-b">Teacher</td>
                        <td className="py-2 px-4 border-b">
                          <Button size="sm" variant="outline" className="mr-2">Edit</Button>
                          <Button size="sm" variant="destructive">Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
