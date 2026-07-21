import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LogOut, Menu, X, Home, User, Briefcase, Award, FileText, 
  Bell, Download, TrendingUp, BookOpen, Clock, Play, Filter, 
  Search, ChevronRight, Sparkles, ExternalLink, ChevronDown, 
  Bookmark, Maximize2, Share2, ArrowLeft, CheckCircle2
} from 'lucide-react';

export default function StudentPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for Course Learning Player View
  const [activeCourse, setActiveCourse] = useState(null);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'training', label: 'Training Programs', icon: Award },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'offers', label: 'Offer Letters', icon: FileText },
    { id: 'payments', label: 'Payments', icon: TrendingUp },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'placement', label: 'Placement Readiness', icon: TrendingUp },
  ];

  return (
    <div className="flex h-screen bg-[#050816] text-slate-100 font-sans overflow-hidden selection:bg-sky-500 selection:text-white">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-[#0b0f19]/80 backdrop-blur-xl border-r border-white/10 transition-all duration-300 flex flex-col z-30 shadow-2xl flex-shrink-0`}
      >
        {/* Logo Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/30 flex-shrink-0">
              <span className="text-white font-extrabold text-lg">U</span>
            </div>
            {sidebarOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-wide">UpEducative</span>
                <span className="text-[10px] text-sky-400 font-medium uppercase tracking-widest">Student Portal</span>
              </motion.div>
            )}
          </div>
          <motion.button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id && !activeCourse;
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveCourse(null); // Reset course player when clicking main nav
                  setActiveTab(item.id);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 font-medium'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
                whileHover={{ x: sidebarOpen ? 4 : 2 }}
                whileTap={{ scale: 0.97 }}
              >
                <IconComponent className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-white' : 'text-sky-400 group-hover:text-sky-300'}`} />
                {sidebarOpen && <span className="text-sm tracking-tight">{item.label}</span>}
                {isActive && sidebarOpen && (
                  <motion.div layoutId="activeIndicator" className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* Student Profile Quick View */}
        {sidebarOpen && (
          <div className="p-3 mx-3 mb-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              A
            </div>
            <div className="overflow-hidden flex-1">
              <p className="text-sm font-semibold text-white truncate">Abhinav Kumar</p>
              <p className="text-xs text-sky-400 truncate">Product Design Track</p>
            </div>
          </div>
        )}

        {/* Logout */}
        <div className="p-4 border-t border-white/10">
          <motion.button
            className="w-full flex items-center gap-3 px-3.5 py-2.5 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors font-medium text-sm"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#050816] to-[#03050c]">
        {/* Top Navbar */}
        <header className="h-20 border-b border-white/10 bg-[#0b0f19]/50 backdrop-blur-md px-8 flex items-center justify-between z-20 flex-shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            {activeCourse && (
              <button 
                onClick={() => setActiveCourse(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-sky-400 border border-white/10 flex items-center gap-2 text-xs font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>
            )}
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, certificates, internships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-500/50 focus:ring-2 focus:ring-sky-500/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => { setActiveCourse(null); setActiveTab('notifications'); }}
              className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            </motion.button>

            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 p-0.5 shadow-lg shadow-sky-500/20">
                <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center font-bold text-white">
                  AK
                </div>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-white leading-tight">Abhinav</p>
                <p className="text-xs text-sky-400">ID: UP-8842</p>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable View Area */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeCourse ? (
              <CourseLearningPlayer course={activeCourse} onBack={() => setActiveCourse(null)} />
            ) : (
              <>
                {activeTab === 'dashboard' && <DashboardTab setActiveTab={setActiveTab} setActiveCourse={setActiveCourse} />}
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'internships' && <InternshipsTab />}
                {activeTab === 'training' && <TrainingTab setActiveCourse={setActiveCourse} />}
                {activeTab === 'projects' && <ProjectsTab />}
                {activeTab === 'certificates' && <CertificatesTab />}
                {activeTab === 'offers' && <OffersTab />}
                {activeTab === 'payments' && <PaymentsTab />}
                {activeTab === 'notifications' && <NotificationsTab />}
                {activeTab === 'downloads' && <DownloadsTab />}
                {activeTab === 'placement' && <PlacementTab />}
              </>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// ==========================================
// COURSE LEARNING PLAYER VIEW (Integrated inside Portal)
// ==========================================
function CourseLearningPlayer({ course, onBack }) {
  const [activeLessonTab, setActiveLessonTab] = useState('transcript');
  const [currentLecture, setCurrentLecture] = useState('Lecture 11: Connectivity Technologies - Part III');
  const [openWeek, setOpenWeek] = useState('week3');

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-6 max-w-7xl mx-auto">
      
      {/* Top Header info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#0b0f19] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="space-y-1">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">{course?.inst || 'IIT Roorkee'} • Course Player</span>
          <h2 className="text-2xl font-extrabold text-white">{course?.title || 'Product Design and Development'}</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-sky-400" /> Bookmark
          </button>
          <button className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-semibold shadow-lg shadow-sky-500/25 flex items-center gap-2">
            <Maximize2 className="w-4 h-4" /> Full Screen
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar playlist + Video Player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Playlist Sidebar */}
        <div className="lg:col-span-4 bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Introduction To Internet of Things</h3>
            <div className="flex justify-between text-xs font-medium text-slate-400">
              <span>Course Progress</span>
              <span className="text-sky-400 font-bold">38.51% (9 of 13)</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-400 to-blue-600 h-full rounded-full" style={{ width: '38.51%' }} />
            </div>
          </div>

          {/* Assignment Alert box */}
          <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Assignment: Programming Assignment</p>
              <p className="text-[10px] text-sky-400 font-medium">Due in 2 days</p>
            </div>
          </div>

          {/* Weeks Accordion / List */}
          <div className="space-y-3">
            {['Week 0', 'Week 1', 'Week 2', 'Week 3'].map((week, index) => {
              const isOpen = openWeek === `week${index}`;
              return (
                <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
                  <button 
                    onClick={() => setOpenWeek(isOpen ? '' : `week${index}`)}
                    className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-200 hover:bg-white/5 transition-colors"
                  >
                    <span>{week}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
                  </button>

                  {isOpen && index === 3 && (
                    <div className="px-3 pb-3 space-y-2">
                      {[
                        { title: 'Lecture 11: Connectivity Technologies - Part III', time: '58:24' },
                        { title: 'Lecture 12: Connectivity Technologies - Part IV', time: '44:12' },
                        { title: 'Lecture 13: Connectivity Technologies - Part V', time: '39:50' },
                        { title: 'Lecture 14: Sensor Networks - Part I', time: '42:05' },
                        { title: 'Lecture 15: Sensor Networks - Part II', time: '47:30' },
                      ].map((lec, idx) => {
                        const isSelected = currentLecture === lec.title;
                        return (
                          <div 
                            key={idx}
                            onClick={() => setCurrentLecture(lec.title)}
                            className={`p-3 rounded-xl cursor-pointer transition-all border ${
                              isSelected 
                                ? 'bg-sky-500/15 border-sky-500/40 text-white' 
                                : 'hover:bg-white/5 border-transparent text-slate-300'
                            }`}
                          >
                            <div className="flex items-start gap-2.5">
                              <div className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-sky-400 bg-sky-400/20' : 'border-slate-500'}`}>
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                              </div>
                              <div>
                                <p className="text-xs font-semibold leading-snug">{lec.title}</p>
                                <p className="text-[10px] text-slate-400 mt-1">{lec.time}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Video & Transcript Section */}
        <div className="lg:col-span-8 space-y-6">
          {/* Video Player Box */}
          <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-xl font-bold text-white">{currentLecture}</h3>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
                alt="Lecture Video" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-sky-400 border border-white/10">
                    IIT Kharagpur • NPTEL Online Certification
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-white/20 transition-colors"><Share2 className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/50 cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </motion.div>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>Watch on YouTube</span>
                  <span>12:45 / 58:24</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for Transcript, Notes, Resources */}
          <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex gap-4 border-b border-white/10 pb-4">
              {['transcript', 'notes', 'resources'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveLessonTab(tab)}
                  className={`text-xs font-bold uppercase tracking-wider pb-2 transition-colors relative ${
                    activeLessonTab === tab ? 'text-sky-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeLessonTab === tab && (
                    <motion.div layoutId="activeTabIndicator" className="absolute bottom-[-16px] left-0 right-0 h-0.5 bg-sky-400" />
                  )}
                </button>
              ))}
            </div>

            {activeLessonTab === 'transcript' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-sky-500/5 border border-sky-500/20 text-xs text-slate-300">
                  <span className="text-sky-400 font-bold block mb-1">CURRENT SEGMENT: 12:45</span>
                  "…A WirelessHART node hops after every message, changing channels every time it sends a packet. ZigBee does not feature hopping at all, and only hops when the entire network hops…"
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In this module, we dive deeper into connectivity technologies for Industrial IoT applications. Understanding the physical and MAC layer differences between WirelessHART and ZigBee is critical for network reliability in high-interference environments.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  WirelessHART utilizes time division multiple access (TDMA), allotting individual time slots for each transmission. This prevents collisions and ensures deterministic latency, which is essential for mission-critical industrial monitoring.
                </p>
              </div>
            )}

            {activeLessonTab === 'notes' && (
              <div className="text-xs text-slate-300 space-y-3">
                <p className="font-bold text-white">Your Personal Notes for this Lecture:</p>
                <textarea 
                  rows="4" 
                  placeholder="Type your notes here during the lecture..." 
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                ></textarea>
                <button className="px-4 py-2 rounded-xl bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-500/25">Save Notes</button>
              </div>
            )}

            {activeLessonTab === 'resources' && (
              <div className="space-y-3">
                {['Lecture 11 Slide Deck.pdf', 'WirelessHART vs ZigBee Comparison Sheet.pdf', 'Lab Manual Experiment 4.pdf'].map((res, i) => (
                  <div key={i} className="flex justify-between items-center p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs">
                    <span className="font-semibold text-white">{res}</span>
                    <button className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold flex items-center gap-1.5 hover:bg-sky-500 hover:text-white transition-all">
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// STANDARD TABS (Dashboard, Training, etc.)
// ==========================================
function DashboardTab({ setActiveTab, setActiveCourse }) {
  const categories = ['All Courses', 'Design', 'Engineering', 'Management', 'Health Sciences'];
  const [activeCategory, setActiveCategory] = useState('All Courses');

  const courses = [
    { title: 'Product Design and Development', mentor: 'Prof. Inderdeep Singh', inst: 'IIT Roorkee', weeks: '12 Weeks', progress: 38, image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
    { title: 'Fundamentals of Additive Manufacturing', mentor: 'Prof. Sajan Kapil', inst: 'IIT Guwahati', weeks: '8 Weeks', progress: 15, image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80' },
    { title: 'Building Materials as a Cornerstone', mentor: 'Prof. Iyer Vijayalaxmi', inst: 'SPA Vijayawada', weeks: '10 Weeks', progress: 0, image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
    { title: 'Manufacturing Processes - Casting', mentor: 'Prof. Sounak Choudhury', inst: 'IIT Kanpur', weeks: '12 Weeks', progress: 62, image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900/90 via-[#0f172a]/90 to-blue-950/80 border border-white/10 p-8 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Welcome Back Dashboard
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">Abhinav</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              You've completed <span className="text-sky-400 font-semibold">38%</span> of your current module. Click any course below to open the Learning Portal!
            </p>
          </div>
          <motion.button 
            onClick={() => setActiveTab('internships')}
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 flex items-center gap-2"
          >
            View Internships <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
          {[
            { label: 'Enrolled Courses', value: '12', icon: BookOpen, change: '+2 active' },
            { label: 'Hours Learned', value: '156.4 hrs', icon: Clock, change: '+12.5% this week' },
            { label: 'Certificates Earned', value: '4', icon: Award, change: '1 pending review' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-sky-400 font-semibold">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* In Progress Section (Clickable to open Learning Player) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" /> In Progress (Click to Start Learning)
        </h2>

        <div 
          onClick={() => setActiveCourse(courses[0])}
          className="relative overflow-hidden rounded-3xl bg-[#0b0f19] border border-white/10 p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center cursor-pointer group hover:border-sky-500/50 transition-all"
        >
          <div className="relative w-full md:w-80 h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
            <img src={courses[0].image} alt="Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/50 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full">
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              Continue Learning
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">Product Design and Development</h3>
            <p className="text-sm text-slate-300 font-medium">Current Lesson: <span className="text-sky-400">Lecture 11: Connectivity Technologies - Part III</span></p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-400">Course Progress</span>
                <span className="text-sky-400 font-bold">38.5% Completed</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-600 h-full rounded-full" style={{ width: '38.5%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Courses Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">My Courses</h2>
            <p className="text-xs text-slate-400">Click any card to launch the course study player.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              onClick={() => setActiveCourse(course)}
              className="bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col group cursor-pointer hover:border-sky-500/40 transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-semibold text-sky-400 border border-white/10">
                  {course.weeks}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-[11px] text-sky-400 font-semibold mb-1">{course.inst}</p>
                  <h3 className="font-bold text-white text-sm line-clamp-2 leading-snug group-hover:text-sky-300 transition-colors">{course.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{course.mentor}</p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-white/10">
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-sky-400">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-400 to-blue-600 h-full rounded-full" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Full Tabs setup
function ProfileTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Student Profile</h1>
          <p className="text-xs text-slate-400">Manage your personal details and academic preferences.</p>
        </div>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
        <div className="flex items-center gap-6 pb-6 border-b border-white/10">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-600 p-1 shadow-xl">
            <div className="w-full h-full bg-[#0b0f19] rounded-[14px] flex items-center justify-center text-2xl font-bold text-white">
              AK
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Abhinav Kumar</h2>
            <p className="text-sm text-sky-400 font-medium">Product Design & Development Track</p>
            <p className="text-xs text-slate-400 mt-1">Enrolled since August 2025 • Student ID: UP-8842</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Full Name</label>
            <input type="text" defaultValue="Abhinav Kumar" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Email Address</label>
            <input type="email" defaultValue="abhinav.kumar@upeducative.io" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">Phone Number</label>
            <input type="text" defaultValue="+91 98765 43210" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300">University / Institution</label>
            <input type="text" defaultValue="IIT Delhi" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-500" />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-sky-500/25">
            Save Changes
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function InternshipsTab() {
  const internships = [
    { title: 'UI/UX Design Intern', company: 'TechCorp Global', duration: '6 Months', stipend: '₹25,000/mo', status: 'Active', location: 'Remote' },
    { title: 'Product Engineering Intern', company: 'Innovate AI', duration: '3 Months', stipend: '₹30,000/mo', status: 'In Review', location: 'Bangalore' },
    { title: 'Industrial Design Trainee', company: 'Apex Motors', duration: '6 Months', stipend: '₹20,000/mo', status: 'Completed', location: 'Pune' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Internship Portal</h1>
        <p className="text-xs text-slate-400">Track your active applications and ongoing corporate internships.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {internships.map((intern, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                  intern.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  intern.status === 'In Review' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                }`}>
                  {intern.status}
                </span>
                <span className="text-xs text-slate-400 font-medium">{intern.location}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{intern.title}</h3>
              <p className="text-sm font-semibold text-sky-400">{intern.company}</p>
              <div className="flex justify-between text-xs text-slate-300 pt-2 border-t border-white/10">
                <span>Duration: {intern.duration}</span>
                <span className="font-bold text-emerald-400">{intern.stipend}</span>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-sky-500 hover:text-white border border-white/10 text-xs font-bold text-slate-200 transition-all flex items-center justify-center gap-2">
              View Details <ExternalLink className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TrainingTab({ setActiveCourse }) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Training Programs</h1>
        <p className="text-xs text-slate-400">Access your live sessions, recorded modules, and mentor schedules.</p>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
        <h2 className="text-xl font-bold text-white">Current Training Modules</h2>
        <div className="space-y-4">
          {[
            { title: 'Advanced CAD Modeling & Prototyping', mentor: 'Dr. R. K. Sharma', progress: '75%', nextClass: 'Today, 4:00 PM' },
            { title: 'Generative AI in Product Design', mentor: 'Prof. Ananya Roy', progress: '40%', nextClass: 'Tomorrow, 2:30 PM' },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400">Mentor: {item.mentor} • Next Session: <span className="text-sky-400 font-semibold">{item.nextClass}</span></p>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                <span className="text-xs font-bold text-sky-400">{item.progress} Completed</span>
                <button onClick={() => setActiveCourse({ title: item.title, inst: 'IIT Delhi' })} className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-500/20">Open Player</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Capstone Projects</h1>
        <p className="text-xs text-slate-400">Submit and review your hands-on engineering and design projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Smart Wearable Health Monitor', category: 'IoT & Product Design', status: 'Submitted', grade: 'A+' },
          { title: 'Aerodynamic Drone Chassis', category: 'CAD & Simulation', status: 'In Progress', grade: 'Pending' },
        ].map((proj, i) => (
          <div key={i} className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[10px] font-bold">{proj.category}</span>
              <span className="text-xs font-bold text-emerald-400">{proj.status}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{proj.title}</h3>
            <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs">
              <span className="text-slate-400">Assigned Grade: <strong className="text-white">{proj.grade}</strong></span>
              <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold">View Submission</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function CertificatesTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Certificates</h1>
        <p className="text-xs text-slate-400">Download verified credentials and completion badges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Product Design Masterclass', 'Advanced Additive Manufacturing', 'UI/UX Fundamentals', 'Industrial Prototyping'].map((cert, i) => (
          <div key={i} className="bg-[#0b0f19] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4 text-center flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white">{cert}</h3>
              <p className="text-xs text-slate-400 mt-1">Issued by UpEducative Global & IIT Partners</p>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-md shadow-sky-500/25 flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Certificate
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function OffersTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Offer Letters</h1>
        <p className="text-xs text-slate-400">Official placement and internship offer letters issued to you.</p>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">Verified Offer</span>
            <h3 className="text-lg font-bold text-white mt-1">UI/UX Design Intern - TechCorp Global</h3>
            <p className="text-xs text-slate-400">Issued on: June 15, 2026 • CTC/Stipend: ₹25,000/mo</p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-sky-500 text-white text-xs font-bold shadow-lg shadow-sky-500/25 flex items-center gap-2">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PaymentsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Payment & Invoices</h1>
        <p className="text-xs text-slate-400">View transaction history and download fee receipts.</p>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-4">
        <div className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10">
          <div>
            <p className="font-bold text-white text-sm">Professional Product Design Track - Semester 1</p>
            <p className="text-xs text-slate-400">Paid on: Aug 12, 2025 • Txn ID: TXN-984210</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-emerald-400 text-sm">₹45,000</p>
            <span className="text-[10px] text-sky-400 font-semibold">Paid Successfully</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NotificationsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Notifications</h1>
        <p className="text-xs text-slate-400">Stay updated with important announcements and deadlines.</p>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-4">
        {[
          { title: 'New Internship Opportunity at TechCorp Global', time: '2 hours ago', unread: true },
          { title: 'Live Session "Connectivity Technologies" starts in 1 hour', time: '5 hours ago', unread: true },
          { title: 'Your Certificate for UI/UX Design is now available', time: '2 days ago', unread: false },
        ].map((notif, i) => (
          <div key={i} className={`p-4 rounded-2xl border flex items-center justify-between ${notif.unread ? 'bg-sky-500/5 border-sky-500/20' : 'bg-white/[0.03] border-white/10'}`}>
            <div className="space-y-1">
              <p className="font-semibold text-white text-sm">{notif.title}</p>
              <p className="text-xs text-slate-400">{notif.time}</p>
            </div>
            {notif.unread && <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DownloadsTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Downloads Hub</h1>
        <p className="text-xs text-slate-400">Access study materials, lecture notes, and software kits.</p>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-4">
        {['Lecture 11 Notes & Slide Deck (PDF)', 'CAD Software Toolkit v4.2', 'Capstone Project Guidelines 2026'].map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="font-semibold text-white text-sm">{item}</span>
            <button className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-500/20 flex items-center gap-2">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PlacementTab() {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }} className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Placement Readiness</h1>
        <p className="text-xs text-slate-400">Analyze your employability metrics and interview preparation scores.</p>
      </div>

      <div className="bg-[#0b0f19] border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className="text-white">Resume & Portfolio Strength</span>
              <span className="text-sky-400">95%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '95%' }} transition={{ duration: 1 }} className="bg-gradient-to-r from-sky-400 to-blue-600 h-full rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className="text-white">Mock Interview Readiness</span>
              <span className="text-sky-400">80%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1 }} className="bg-gradient-to-r from-sky-400 to-blue-600 h-full rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className="text-white">Technical Problem Solving</span>
              <span className="text-sky-400">88%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: '88%' }} transition={{ duration: 1 }} className="bg-gradient-to-r from-sky-400 to-blue-600 h-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}