import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

/**
 * Authentication Pages - LOCKED DESIGN SYSTEM
 * Deep Space Navy + Sky Blue + Glassmorphism (matches the Hero Section)
 * Login, Signup, Password Reset
 */

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 aurora">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent via-accent to-accent/70 rounded-lg flex items-center justify-center mx-auto mb-4 glow-accent">
            <span className="text-foreground font-bold text-lg">U</span>
          </div>
          <h1 className="text-3xl font-semibold text-foreground">UpEducative</h1>
          <p className="text-foreground/70 mt-2">Sign in to your account</p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/20">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-foreground/50 hover:text-foreground/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/70 text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 aurora">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent via-accent to-accent/70 rounded-lg flex items-center justify-center mx-auto mb-4 glow-accent">
            <span className="text-foreground font-bold text-lg">U</span>
          </div>
          <h1 className="text-3xl font-semibold text-foreground">Create Account</h1>
          <p className="text-foreground/70 mt-2">Join UpEducative today</p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/20">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-foreground/50 hover:text-foreground/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Account <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/70 text-sm">
              Already have an account?{' '}
              <a href="#" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function PasswordResetPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 aurora">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-accent via-accent to-accent/70 rounded-lg flex items-center justify-center mx-auto mb-4 glow-accent">
            <span className="text-foreground font-bold text-lg">U</span>
          </div>
          <h1 className="text-3xl font-semibold text-foreground">Reset Password</h1>
          <p className="text-foreground/70 mt-2">Enter your email to reset your password</p>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/20">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-foreground/50" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Reset Link
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/70 text-sm">
              Remember your password?{' '}
              <a href="#" className="text-accent font-semibold hover:text-accent/80 transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Export default for routing
export default function Auth() {
  const [authMode] = useState('login');

  if (authMode === 'signup') return <SignupPage />;
  if (authMode === 'reset') return <PasswordResetPage />;
  return <LoginPage />;
}
