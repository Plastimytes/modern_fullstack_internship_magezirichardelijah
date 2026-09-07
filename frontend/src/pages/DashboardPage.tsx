import { useQuery } from '@tanstack/react-query';
import { Layout } from '../components/layout/Layout';
import { getTasks } from '../api/tasks';
import { getCourses } from '../api/courses';
import { getUnreadCount } from '../api/notifications';
import { useAuth } from '../hooks/useAuth';
import { CheckSquare, BookOpen, Bell, Clock } from 'lucide-react';

export const DashboardPage = () => {
  const { user } = useAuth();

  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  const { data: courses = [] } = useQuery({
    queryKey: ['courses'],
    queryFn: getCourses,
  });

  const { data: unreadCount = 0 } = useQuery({
    queryKey: ['unreadCount'],
    queryFn: getUnreadCount,
  });

  const pendingTasks = tasks.filter((t) => t.status === 'PENDING');
  const inProgressTasks = tasks.filter((t) => t.status === 'IN_PROGRESS');
  const completedTasks = tasks.filter((t) => t.status === 'COMPLETED');
  const highPriorityTasks = tasks.filter((t) => t.priority === 'HIGH');

  const statCards = [
    {
      label: 'Total Tasks',
      value: tasks.length,
      icon: CheckSquare,
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-100',
    },
    {
      label: 'In Progress',
      value: inProgressTasks.length,
      icon: Clock,
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-100',
    },
    {
      label: 'High Priority',
      value: highPriorityTasks.length,
      icon: Bell,
      bg: 'bg-amber-50',
      text: 'text-amber-600',
      border: 'border-amber-100',
    },
    {
      label: 'Completed',
      value: completedTasks.length,
      icon: CheckSquare,
      bg: 'bg-red-50',
      text: 'text-red-500',
      border: 'border-red-100',
    },
  ];

  return (
    <Layout title="Dashboard" breadcrumb={['Student']}>
      {/* Welcome */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Good day, {user?.username} 👋
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Here is what is on your plate today.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map(({ label, value, icon: Icon, bg, text, border }) => (
          <div
            key={label}
            className={`${bg} ${border} border rounded-xl p-5 flex items-center gap-4`}
          >
            <div className={`${text}`}>
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <p className={`text-3xl font-bold ${text}`}>{value}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Pending tasks */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="bg-teal-500 rounded-t-xl px-5 py-3 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-sm">Pending Tasks</h3>
              <p className="text-teal-100 text-xs">{pendingTasks.length} tasks to do</p>
            </div>
          </div>
          <div className="divide-y divide-gray-100">
            {pendingTasks.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">
                No pending tasks
              </p>
            )}
            {pendingTasks.slice(0, 5).map((task) => (
              <div key={task.id} className="px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">{task.title}</p>
                  <p className="text-xs text-gray-400">{task.courseName}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      task.priority === 'HIGH'
                        ? 'bg-red-100 text-red-600'
                        : task.priority === 'MEDIUM'
                        ? 'bg-amber-100 text-amber-600'
                        : 'bg-green-100 text-green-600'
                    }`}
                  >
                    {task.priority}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="bg-teal-500 rounded-t-xl px-5 py-3 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-sm">My Courses</h3>
              <p className="text-teal-100 text-xs">
                {courses.length} enrolled courses
              </p>
            </div>
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <div className="divide-y divide-gray-100">
            {courses.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-8">
                No courses added yet
              </p>
            )}
            {courses.map((course) => (
              <div key={course.id} className="px-5 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">{course.name}</p>
                  <p className="text-xs text-gray-400">{course.description}</p>
                </div>
                <span className="text-xs text-gray-400">
                  {tasks.filter((t) => t.courseId === course.id).length} tasks
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};