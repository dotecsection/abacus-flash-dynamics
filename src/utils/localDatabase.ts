
// Local database implementation using localStorage
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  grade: string;
  school: string;
  parentName: string;
  relationship: string;
  phone: string;
  email: string;
  address: string;
  course: string;
  schedule: string;
  comments?: string;
  fileUploaded?: string;
  submissionDate: string;
  id?: string; // Adding an ID field for better management
}

export const saveStudent = (student: Student): void => {
  const students = getStudents();
  // Generate a unique ID if not provided
  const studentWithId = {
    ...student,
    id: student.id || `student_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  };
  students.push(studentWithId);
  localStorage.setItem('students', JSON.stringify(students));
};

export const getStudents = (): Student[] => {
  const studentsData = localStorage.getItem('students');
  return studentsData ? JSON.parse(studentsData) : [];
};

export const getStudentById = (id: string): Student | undefined => {
  const students = getStudents();
  return students.find(student => student.id === id);
};

export const deleteStudent = (id: string): boolean => {
  const students = getStudents();
  const updatedStudents = students.filter(student => student.id !== id);
  
  // Check if a student was actually removed
  if (updatedStudents.length < students.length) {
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    return true;
  }
  
  return false;
};

// Admin authentication functions
export const adminLogin = (username: string, password: string): boolean => {
  // In a real app, this would be more secure
  if (username === 'admin' && password === 'password') {
    localStorage.setItem('isAuthenticated', 'true');
    return true;
  }
  return false;
};

export const isAdminAuthenticated = (): boolean => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const adminLogout = (): void => {
  localStorage.removeItem('isAuthenticated');
};
