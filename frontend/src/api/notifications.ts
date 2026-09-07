import client from './client';
import { Notification } from '../types';

export const getNotifications = async (): Promise<Notification[]> => {
  const response = await client.get<Notification[]>('/notifications');
  return response.data;
};

export const getUnreadCount = async (): Promise<number> => {
  const response = await client.get<number>('/notifications/unread/count');
  return response.data;
};

export const markAsRead = async (id: number): Promise<void> => {
  await client.put(`/notifications/${id}/read`);
};

export const markAllAsRead = async (): Promise<void> => {
  await client.put('/notifications/read-all');
};