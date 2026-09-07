import client from './client';
import { Course, CourseRequest } from '../types';

export const getCourses = async (): Promise<Course[]> => {
  const response = await client.get<Course[]>('/courses');
  return response.data;
};

export const getCourse = async (id: number): Promise<Course> => {
  const response = await client.get<Course>(`/courses/${id}`);
  return response.data;
};

export const createCourse = async (data: CourseRequest): Promise<Course> => {
  const response = await client.post<Course>('/courses', data);
  return response.data;
};

export const updateCourse = async (id: number, data: CourseRequest): Promise<Course> => {
  const response = await client.put<Course>(`/courses/${id}`, data);
  return response.data;
};

export const deleteCourse = async (id: number): Promise<void> => {
  await client.delete(`/courses/${id}`);
};