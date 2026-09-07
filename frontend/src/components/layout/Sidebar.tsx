import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  Bell,
  User,
  LogOut,
  GraduationCap,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/courses', icon: BookOpen, label: 'Courses' },
  { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
  { to: '/notifications', icon: Bell, label: 'Notifications' },
  { to: '/profile', icon: User, label: 'Profile' },
];

export const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-200 flex flex-col z-50">

      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-200">
        <div className="w-8 h-8 rounded bg-teal-500 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-sm text-gray-800 leading-tight">
          Student Task<br />Manager
        </span>
      </div>

      {/* User info */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
          {user?.username?.slice(0, 2).toUpperCase() ?? 'ST'}
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-semibold text-gray-800 truncate">
            {user?.username ?? 'Student'}
          </p>
          <p className="text-xs text-gray-400 truncate">{user?.email ?? ''}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-teal-50 text-teal-600 border-l-4 border-teal-500'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-2 py-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};