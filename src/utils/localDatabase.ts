
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
}

export const saveStudent = (student: Student): void => {
  const students = getStudents();
  students.push(student);
  localStorage.setItem('students', JSON.stringify(students));
};

export const getStudents = (): Student[] => {
  const studentsData = localStorage.getItem('students');
  return studentsData ? JSON.parse(studentsData) : [];
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
