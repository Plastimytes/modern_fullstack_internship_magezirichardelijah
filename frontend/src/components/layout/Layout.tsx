import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface LayoutProps {
  children: ReactNode;
  title: string;
  breadcrumb?: string[];
}

export const Layout = ({ children, title, breadcrumb }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Topbar title={title} breadcrumb={breadcrumb} />
      <main className="ml-56 pt-14 min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};