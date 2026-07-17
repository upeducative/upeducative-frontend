import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BarChart3, Users, Briefcase, CreditCard, Award, Settings, LogOut } from 'lucide-react';

/**
 * Admin Dashboard - LOCKED DESIGN SYSTEM
 * Deep Space Navy + Sky Blue + Glassmorphism (matches the Hero Section)
 * 10 Sections: Students, Colleges, Companies, Programs, Payments, Certificates, Offer Letters, Reports, Analytics, Settings
 */

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'colleges', label: 'Colleges', icon: Briefcase },
    { id: 'companies', label: 'Companies', icon: Briefcase },
    { id: 'programs', label: 'Programs', icon: Award },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'offers', label: 'Offer Letters', icon: Briefcase },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`${sidebarOpen ? 'w-64' : 'w-20'} glass border-r border-white/10 transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent via-accent to-accent/70 flex items-center justify-center glow-accent-sm">
                <span className="text-foreground font-bold">A</span>
              </div>
              <span className="font-bold text-lg text-foreground">Admin</span>
            </div>
          )}
          <motion.button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {sidebarOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </motion.button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground/70 hover:bg-white/10'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </motion.button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            className="w-full flex items-center gap-3 px-4 py-2 text-foreground/70 hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'students' && <StudentsTab />}
          {activeTab === 'colleges' && <CollegesTab />}
          {activeTab === 'companies' && <CompaniesTab />}
          {activeTab === 'programs' && <ProgramsTab />}
          {activeTab === 'payments' && <PaymentsTab />}
          {activeTab === 'certificates' && <CertificatesTab />}
          {activeTab === 'offers' && <OffersTab />}
          {activeTab === 'reports' && <ReportsTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Students', value: '5,234' },
          { label: 'Active Colleges', value: '120' },
          { label: 'Partner Companies', value: '85' },
          { label: 'Total Revenue', value: '₹2.4L' },
        ].map((stat, i) => (
          <motion.div key={i} className="glass rounded-2xl p-6" whileHover={{ y: -5 }}>
            <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-accent">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Key Metrics</h2>
        <p className="text-foreground/70">Analytics dashboard coming soon.</p>
      </div>
    </motion.div>
  );
}

function StudentsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Students</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Student management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function CollegesTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Colleges</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">College management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function CompaniesTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Companies</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Company management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function ProgramsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Programs</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Program management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function PaymentsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Payments</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Payment management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function CertificatesTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Certificates</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Certificate management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function OffersTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Offer Letters</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Offer letter management interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function ReportsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Reports</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Reports interface coming soon.</p>
      </div>
    </motion.div>
  );
}

function AnalyticsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Analytics</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Analytics dashboard coming soon.</p>
      </div>
    </motion.div>
  );
}

function SettingsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Settings</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Settings interface coming soon.</p>
      </div>
    </motion.div>
  );
}
