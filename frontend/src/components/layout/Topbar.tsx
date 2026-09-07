import { Bell } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { getUnreadCount } from '../../api/notifications';
import { useNavigate } from 'react-router-dom';

interface TopbarProps {
  title: string;
  breadcrumb?: string[];
}

export const Topbar = ({ title, breadcrumb }: TopbarProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: unreadCount = 0 } = useQuery({
    queryKey: ['unreadCount'],
    queryFn: getUnreadCount,
    refetchInterval: 30000,
  });

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 fixed top-0 left-56 right-0 z-40">

      {/* Left — breadcrumb + title */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="text-gray-400">Home</span>
        {breadcrumb?.map((crumb) => (
          <span key={crumb} className="flex items-center gap-2">
            <span className="text-gray-300">›</span>
            <span className="text-gray-400">{crumb}</span>
          </span>
        ))}
        <span className="text-gray-300">›</span>
        <span className="text-gray-800 font-semibold">{title}</span>
      </div>

      {/* Right — dark mode toggle placeholder, notification bell, avatar */}
      <div className="flex items-center gap-4">

        {/* Dark mode toggle placeholder */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Dark Mode</span>
          <div className="w-8 h-4 bg-gray-200 rounded-full" />
        </div>

        {/* Notification bell */}
        <button
          onClick={() => navigate('/notifications')}
          className="relative p-1.5 rounded-md hover:bg-gray-100 transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-500" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold cursor-pointer"
          onClick={() => navigate('/profile')}
        >
          {user?.username?.slice(0, 2).toUpperCase() ?? 'ST'}
        </div>
      </div>
    </header>
  );
};