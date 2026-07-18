import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { BRANDING } from '@/constants/branding';
import ThemeToggle from '@/components/ui/theme-toggle';


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
    { label: 'Careers', href: ROUTES.training }, // Fixed typo "Carrers"
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'glass bg-background/80 border-border/40 backdrop-blur-md shadow-sm' 
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto h-[92px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to={ROUTES.home}>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={BRANDING.logo}
                  alt={BRANDING.logoAlt}
                  className="h-14 md:h-16 w-auto object-contain select-none dark:invert-0"
                  draggable={false}
                />
              </motion.div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-1 lg:gap-2 mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <MotionLink
                  to={item.href}
                  className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium tracking-wide inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ThemeToggle />

            <MotionLink
              to={ROUTES.login}
              className="hidden sm:inline-flex items-center justify-center h-11 px-5 rounded-full border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </MotionLink>

            <MotionLink
              to={ROUTES.signup}
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </MotionLink>

            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[92px] z-40 bg-background/95 backdrop-blur-lg border-b border-border md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-6 py-6 space-y-3">
              <div className="pb-4 border-b border-border">
                <img src={BRANDING.logo} alt={BRANDING.logoAlt} className="h-14 w-auto object-contain" />
              </div>
              {navItems.map((item, i) => (
                <motion.div 
                  key={item.href} 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={item.href} 
                    className="block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted font-medium transition-all duration-200" 
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}