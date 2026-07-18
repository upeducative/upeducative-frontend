import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Layout from '@/layouts/Layout';

export default function Training() {
  return (
    <Layout>
      <HeroSection />
      <ProgramsSection />
      <OutcomesSection />
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6">Industrial Training</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Comprehensive training programs designed to build industry-ready skills.</p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      title: 'Web Development',
      duration: '8 weeks',
      description: 'Master modern web technologies and frameworks',
      topics: ['React', 'Node.js', 'Databases', 'Deployment'],
    },
    {
      title: 'Data Science',
      duration: '8 weeks',
      description: 'Learn data analysis and machine learning',
      topics: ['Python', 'ML Algorithms', 'Data Visualization', 'Projects'],
    },
    {
      title: 'Cloud Computing',
      duration: '6 weeks',
      description: 'AWS, Azure, and cloud architecture basics',
      topics: ['AWS Services', 'Cloud Architecture', 'DevOps', 'Security'],
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Training Tracks</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Choose Your Specialization</h2>
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
              <h3 className="text-2xl font-semibold text-foreground mb-2">{program.title}</h3>
              <p className="text-accent font-semibold mb-4">{program.duration}</p>
              <p className="text-foreground/70 mb-6">{program.description}</p>
              <div className="space-y-3 mb-8">
                {program.topics.map((topic, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{topic}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enroll Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OutcomesSection() {
  const outcomes = [
    'Industry-ready skills',
    'Hands-on projects',
    'Certification',
    'Job placement support',
    'Mentorship',
    'Lifetime access',
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">What You Get</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Training Outcomes</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 flex items-center gap-4"
            >
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
              <p className="text-foreground/80">{outcome}</p>
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
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Ready to Upskill?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">Join our comprehensive training programs and become industry-ready.</p>
          <motion.button
            className="px-10 py-4 rounded-full bg-white text-[#050816] font-semibold hover:shadow-lg hover:shadow-sky-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
