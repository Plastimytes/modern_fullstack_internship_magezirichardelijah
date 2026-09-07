export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  email: string;
  username: string;
  role: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

export interface CourseRequest {
  name: string;
  description: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: string;
  courseId: number;
  courseName: string;
  createdAt: string;
  updatedAt: string;
}

export interface TaskRequest {
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  courseId: number;
}

export interface Notification {
  id: number;
  type: string;
  channel: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}