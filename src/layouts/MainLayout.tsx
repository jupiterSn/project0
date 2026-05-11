import React, { useState, ReactNode } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: DashboardIcon, href: '/' },
    { label: 'Analytics', icon: AnalyticsIcon, href: '/analytics' },
    { label: 'Users', icon: PeopleIcon, href: '/users' },
    { label: 'Reports', icon: DocumentScannerIcon, href: '/reports' },
    { label: 'Settings', icon: SettingsIcon, href: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-lg transition-all duration-300 ease-in-out lg:static lg:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${sidebarOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-blue-700">
          {sidebarOpen && <h1 className="text-2xl font-bold">Dashboard</h1>}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden hover:bg-blue-700 p-2 rounded-lg"
          >
            <CloseIcon />
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:block hover:bg-blue-700 p-2 rounded-lg transition-colors"
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            <MenuIcon />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-8 px-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer group ${
                  !sidebarOpen && 'justify-center'
                }`}
                title={!sidebarOpen ? item.label : ''}
              >
                <Icon className="text-xl group-hover:scale-110 transition-transform flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </a>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 w-full border-t border-blue-700 p-4">
          <button
            className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-red-300 hover:text-red-100 ${
              !sidebarOpen && 'justify-center'
            }`}
            title={!sidebarOpen ? 'Logout' : ''}
          >
            <LogoutIcon className="text-xl flex-shrink-0" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="bg-white shadow-md h-20 flex items-center justify-between px-6 border-b border-gray-200">
          {/* Left Section - Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MenuIcon className="text-gray-700" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 hidden sm:block">
              Welcome to Dashboard
            </h2>
          </div>

          {/* Right Section - Notifications & Profile */}
          <div className="flex items-center gap-6">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <NotificationsIcon />
              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <AccountCircleIcon className="text-3xl text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-md p-8 min-h-full">
              {children}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2026 Dashboard. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
