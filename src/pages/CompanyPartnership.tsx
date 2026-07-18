import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Layout from '@/layouts/Layout';
import { BRANDING } from '@/constants/branding';

export default function CompanyPartnership() {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden aurora pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6">Company Partnership</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Hire top talent from India's engineering colleges and universities.</p>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    'Access to 10,000+ pre-screened students',
    'Verified candidate profiles',
    'Flexible hiring options',
    'Dedicated recruitment support',
    'Analytics and reporting',
    'Campus recruitment coordination',
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Benefits</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Why Partner with {BRANDING.name}?</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 flex items-center gap-4"
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-foreground/80">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { number: '1', title: 'Register', description: 'Sign up your company' },
    { number: '2', title: 'Post Jobs', description: 'Create internship postings' },
    { number: '3', title: 'Review', description: 'Browse qualified candidates' },
    { number: '4', title: 'Hire', description: 'Make offers and onboard' },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Process</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">How It Works</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-accent/30 mb-4">{step.number}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-20 text-center aurora"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Ready to Hire?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">Join 200+ companies already hiring top talent through {BRANDING.name}.</p>
          <motion.button
            className="px-10 py-4 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Post a Job
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
