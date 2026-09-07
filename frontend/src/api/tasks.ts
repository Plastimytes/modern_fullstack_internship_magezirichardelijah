import client from './client';
import { Task, TaskRequest } from '../types';

export const getTasks = async (): Promise<Task[]> => {
  const response = await client.get<Task[]>('/tasks');
  return response.data;
};

export const getTask = async (id: number): Promise<Task> => {
  const response = await client.get<Task>(`/tasks/${id}`);
  return response.data;
};

export const getTasksByCourse = async (courseId: number): Promise<Task[]> => {
  const response = await client.get<Task[]>(`/tasks/course/${courseId}`);
  return response.data;
};

export const createTask = async (data: TaskRequest): Promise<Task> => {
  const response = await client.post<Task>('/tasks', data);
  return response.data;
};

export const updateTask = async (id: number, data: TaskRequest): Promise<Task> => {
  const response = await client.put<Task>(`/tasks/${id}`, data);
  return response.data;
};

export const updateTaskStatus = async (id: number, status: string): Promise<Task> => {
  const response = await client.put<Task>(`/tasks/${id}/status`, { status });
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await client.delete(`/tasks/${id}`);
};