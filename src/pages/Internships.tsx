import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/layouts/Layout';

export default function Internships() {
  return (
    <Layout>
      <HeroSection />
      <ProgramsSection />
      <CompaniesSection />
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6">Internship Programs</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Gain real-world experience with leading companies during your college years.</p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      title: 'Summer Internship',
      duration: '6-8 weeks',
      stipend: '₹15,000 - ₹30,000',
      features: ['Flexible timing', 'Stipend included', 'Certificate', 'Mentorship'],
    },
    {
      title: 'Semester Internship',
      duration: '4-6 weeks',
      stipend: '₹12,000 - ₹25,000',
      features: ['Part-time option', 'Flexible hours', 'Support', 'Certificate'],
    },
    {
      title: 'Extended Internship',
      duration: '3-6 months',
      stipend: '₹20,000 - ₹50,000',
      features: ['Full-time', 'Higher stipend', 'Job offer potential', 'Premium support'],
    },
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Available Programs</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Choose Your Path</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">{program.title}</h3>
              <div className="space-y-3 mb-8">
                <p className="text-foreground/70"><span className="text-accent font-semibold">Duration:</span> {program.duration}</p>
                <p className="text-foreground/70"><span className="text-accent font-semibold">Stipend:</span> {program.stipend}</p>
              </div>
              <div className="space-y-3 mb-8">
                {program.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CompaniesSection() {
  const companies = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Adobe'];

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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Partner Companies</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Intern at India's Top Companies</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 flex items-center justify-center text-center hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <p className="text-foreground/80 font-medium">{company}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { number: '1', title: 'Create Profile', description: 'Sign up and complete your profile' },
    { number: '2', title: 'Browse Programs', description: 'Explore available opportunities' },
    { number: '3', title: 'Apply', description: 'Submit your application' },
    { number: '4', title: 'Interview', description: 'Participate in company interviews' },
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
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">How to Apply</h2>
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
              className="glass rounded-2xl p-6 text-center relative"
            >
              <p className="text-4xl font-bold text-accent/30 mb-4">{step.number}</p>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-foreground/70 text-sm">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-accent/30" />
                </div>
              )}
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
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Ready to Start Your Internship?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">Join thousands of students who've gained valuable experience with leading companies.</p>
          <motion.button
            className="px-10 py-4 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
