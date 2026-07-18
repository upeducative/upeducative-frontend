import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import logo from '@/assets/logo.png';

const MotionLink = motion(Link);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: ROUTES.home },
    { label: 'About', href: ROUTES.about },
    { label: 'Programs', href: ROUTES.internships },
    { label: 'Contact', href: ROUTES.contact },
    { label: 'Carrers', href: ROUTES.training },
    a7ab8c4 (Updated Navbar with Search box and layout)
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto h-[92px] px-8 flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center flex-1">
            <Link to={ROUTES.home}>
              <motion.div
                className="cursor-pointer ml-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={logo}
                  alt="UpEducative"
                  className="h-14 md:h-16 w-auto object-contain select-none"
                  draggable={false}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-6 mr-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <MotionLink
                  to={item.href}
                  className="px-5 py-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium tracking-wide inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Search and CTA Buttons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Search Box */}
            <button className="hidden sm:flex items-center gap-2 h-12 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white/80 hover:text-white hover:border-sky-400/40 transition-all duration-300">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>

            <MotionLink
              to={ROUTES.login}
              className="hidden sm:inline-flex items-center justify-center h-12 px-7 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-sky-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </MotionLink>

            <MotionLink
              to={ROUTES.signup}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-[#081120] font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </MotionLink>

            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 top-[92px] z-40 glass md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-8 space-y-4">
          <div className="pb-4 border-b border-white/10">
            <img src={logo} alt="UpEducative" className="h-[72px] w-auto object-contain" />
          </div>
          {navItems.map((item, i) => (
            <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
              <Link to={item.href} className="block px-4 py-3 rounded-lg text-foreground hover:bg-white/10 hover:text-accent transition-all duration-300" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}