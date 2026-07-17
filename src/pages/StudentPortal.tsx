import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Menu, X, Home, User, Briefcase, Award, FileText, Bell, Download, TrendingUp } from 'lucide-react';

/**
 * Student Portal Dashboard - LOCKED DESIGN SYSTEM
 * Deep Space Navy + Sky Blue + Glassmorphism (matches the Hero Section)
 * 11 Sections: Dashboard, Profile, Internships, Training, Projects, Certificates, Offer Letters, Payments, Notifications, Downloads, Placement Readiness
 */

export default function StudentPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'training', label: 'Training', icon: Award },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'offers', label: 'Offer Letters', icon: FileText },
    { id: 'payments', label: 'Payments', icon: TrendingUp },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'placement', label: 'Placement Readiness', icon: TrendingUp },
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
                <span className="text-foreground font-bold">U</span>
              </div>
              <span className="font-bold text-lg text-foreground">UpEducative</span>
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
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'profile' && <ProfileTab />}
          {activeTab === 'internships' && <InternshipsTab />}
          {activeTab === 'training' && <TrainingTab />}
          {activeTab === 'projects' && <ProjectsTab />}
          {activeTab === 'certificates' && <CertificatesTab />}
          {activeTab === 'offers' && <OffersTab />}
          {activeTab === 'payments' && <PaymentsTab />}
          {activeTab === 'notifications' && <NotificationsTab />}
          {activeTab === 'downloads' && <DownloadsTab />}
          {activeTab === 'placement' && <PlacementTab />}
        </div>
      </div>
    </div>
  );
}

function DashboardTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Active Internships', value: '2' },
          { label: 'Completed Training', value: '3' },
          { label: 'Certificates', value: '5' },
          { label: 'Placement Ready', value: '95%' },
        ].map((stat, i) => (
          <motion.div key={i} className="glass rounded-2xl p-6" whileHover={{ y: -5 }}>
            <p className="text-foreground/70 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-accent">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Activity</h2>
        <p className="text-foreground/70">Your recent activity will appear here.</p>
      </div>
    </motion.div>
  );
}

function ProfileTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Profile</h1>
      <div className="glass rounded-2xl p-8 max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50" />
          </div>
          <motion.button className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Save Changes
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function InternshipsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Internships</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <motion.div key={i} className="glass rounded-2xl p-6" whileHover={{ y: -5 }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">Internship {i}</h3>
            <p className="text-foreground/70 text-sm mb-4">Company: Tech Corp</p>
            <motion.button className="px-6 py-2 rounded-full bg-white text-[#050816] font-semibold text-sm hover:shadow-lg hover:shadow-sky-400/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TrainingTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Training Programs</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your training programs will appear here.</p>
      </div>
    </motion.div>
  );
}

function ProjectsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Projects</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your projects will appear here.</p>
      </div>
    </motion.div>
  );
}

function CertificatesTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Certificates</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your certificates will appear here.</p>
      </div>
    </motion.div>
  );
}

function OffersTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Offer Letters</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your offer letters will appear here.</p>
      </div>
    </motion.div>
  );
}

function PaymentsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Payments</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your payment history will appear here.</p>
      </div>
    </motion.div>
  );
}

function NotificationsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Notifications</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your notifications will appear here.</p>
      </div>
    </motion.div>
  );
}

function DownloadsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Downloads</h1>
      <div className="glass rounded-2xl p-8">
        <p className="text-foreground/70">Your downloads will appear here.</p>
      </div>
    </motion.div>
  );
}

function PlacementTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h1 className="text-4xl font-semibold text-foreground mb-8">Placement Readiness</h1>
      <div className="glass rounded-2xl p-8">
        <div className="space-y-4">
          <div>
            <p className="text-foreground/70 mb-2">Resume: 95%</p>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-white via-sky-400 to-blue-600 h-2 rounded-full" style={{ width: '95%' }} />
            </div>
          </div>
          <div>
            <p className="text-foreground/70 mb-2">Interview Ready: 80%</p>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-white via-sky-400 to-blue-600 h-2 rounded-full" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
