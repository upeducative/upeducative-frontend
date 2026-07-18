import { motion } from 'framer-motion';
import { CheckCircle, Heart, Lightbulb, Users } from 'lucide-react';
import Layout from '@/layouts/Layout';
import { BRANDING } from '@/constants/branding';

/**
 * About Page - LOCKED DESIGN SYSTEM
 * Deep Space Navy + Sky Blue + Glassmorphism (matches the Hero Section)
 */

export default function About() {
  return (
    <Layout>
      <HeroSection />
      <MissionVisionSection />
      <WhyUpEducativeSection />
      <ValuesSection />
      <ImpactSection />
      <TeamSection />
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6">About {BRANDING.name}</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">We're building the future of technical education by connecting ambitious students with premium opportunities.</p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-foreground/70 leading-relaxed">
              To empower India's technical students by providing access to premium internship and training opportunities with leading companies, enabling them to build real-world skills and launch successful careers.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground mb-4">Our Vision</h2>
            <p className="text-foreground/70 leading-relaxed">
              To become India's most trusted platform for internships and training, where every student has equal access to world-class opportunities, regardless of their college's reputation or network.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY UPEDUCATIVE SECTION (Moved from Home.tsx)
// ============================================================================
function WhyUpEducativeSection() {
  const reasons = [
    { title: 'Premium Quality', description: 'Handpicked companies and verified opportunities' },
    { title: 'Expert Mentorship', description: 'Guidance from industry professionals' },
    { title: 'Career Support', description: 'Placement assistance and job referrals' },
    { title: 'Verified Outcomes', description: 'Transparent tracking of placements' },
    { title: 'Flexible Programs', description: 'Options for every academic schedule' },
    { title: 'Trusted Network', description: 'Connected with 500+ colleges' },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">What Makes {BRANDING.name} Different</h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div key={i} className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      title: 'Student-First',
      description: 'Every decision we make prioritizes student success and growth.',
      icon: Users,
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do.',
      icon: CheckCircle,
    },
    {
      title: 'Innovation',
      description: 'We continuously improve our platform and services.',
      icon: Lightbulb,
    },
    {
      title: 'Community',
      description: 'We believe in the power of collaboration and shared growth.',
      icon: Heart,
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Core Values</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">What We Stand For</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/70 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const impacts = [
    { number: '10,000+', label: 'Students Placed' },
    { number: '500+', label: 'Partner Colleges' },
    { number: '200+', label: 'Companies' },
    { number: '95%', label: 'Success Rate' },
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Our Impact</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">By The Numbers</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center"
            >
              <p className="text-5xl font-bold text-accent mb-2">{impact.number}</p>
              <p className="text-foreground/70">{impact.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Passionate About Your Success</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-foreground/70 leading-relaxed">
            Our team consists of experienced professionals from leading tech companies, education sector experts, and passionate advocates for student success. We're committed to building a platform that truly makes a difference in students' lives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}