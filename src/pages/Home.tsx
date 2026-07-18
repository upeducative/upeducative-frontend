import { motion } from 'framer-motion';
import { CheckCircle, Star, FileText, Sparkles, BrainCircuit } from 'lucide-react';
import Layout from '@/layouts/Layout';
import HeroSection from '@/components/ui/hero-section';

/**
 * UpEducative Homepage - LOCKED DESIGN SYSTEM
 */

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrainingTracksSection />
      <ProgramsSection />
      <PlacementSupportSection />
      <TestimonialsSection />
      <FAQSection />
    </Layout>
  );
}

// ============================================================================
// TRAINING PROGRAMS SECTION
// ============================================================================
function TrainingTracksSection() {
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Training Programs</p>
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
              className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
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
              </div>
              <motion.button
                className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/50 mt-auto"
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

// ============================================================================
// PROGRAMS SECTION
// ============================================================================
function ProgramsSection() {
  const programs = [
    { title: 'Summer Internship', duration: '6-8 weeks', stipend: '₹15,000 - ₹30,000', features: ['Flexible timing', 'Stipend included', 'Certificate'] },
    { title: 'Semester Internship', duration: '4-6 weeks', stipend: '₹12,000 - ₹25,000', features: ['Part-time option', 'Flexible hours', 'Support'] },
    { title: 'Extended Internship', duration: '3-6 months', stipend: '₹20,000 - ₹50,000', features: ['Full-time', 'Higher stipend', 'Job offer potential'] },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Career Opportunities</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Choose Your Path</h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div key={i} className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
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
              <motion.button className="w-full py-3 rounded-full bg-white text-[#050816] font-semibold transition-all hover:shadow-lg hover:shadow-sky-400/50">Apply Now</motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// RESUME BUILDER SECTION
// ============================================================================
function PlacementSupportSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Resume Builder</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">No resume? No problem.</h2>
            <p className="text-lg text-foreground/70 mb-8">Let us help you create one or improve the one you've got with our intelligent tools.</p>
            <div className="space-y-4">
              {[
                { icon: Sparkles, text: 'AI-powered resume builder' },
                { icon: BrainCircuit, text: 'Intelligent feedback engine' },
                { icon: CheckCircle, text: 'Optimized for freshers' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-[28px] shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                  <FileText className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Build Your Professional Resume</h3>
                  <p className="text-sm text-blue-200/60">Ready in minutes</p>
                </div>
              </div>
              
              <p className="text-foreground/70 mb-8">
                Choose from ATS-friendly templates designed to get you noticed by top recruiters.
              </p>

              <button className="w-full py-4 rounded-xl bg-accent text-[#050816] font-semibold hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                Build my resume →
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-[50px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TESTIMONIALS SECTION
// ============================================================================
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Engineering Student',
      company: 'Google Internship',
      text: 'UpEducative helped me land my dream internship at Google. The platform is intuitive and the support team is amazing.',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: 'B.Tech Student',
      company: 'Microsoft Internship',
      text: 'The interview preparation and mentorship I received was invaluable. Highly recommended for any student.',
      rating: 5,
    },
    {
      name: 'Neha Gupta',
      role: 'Diploma Student',
      company: 'Amazon Internship',
      text: 'Best platform for internships. Great opportunities and excellent support throughout the process.',
      rating: 5,
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">What Our Students Say</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed">{testimonial.text}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role} • {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================
function FAQSection() {
  const faqs = [
    { q: 'Who is eligible to apply?', a: 'Any engineering, diploma, B.Sc., BCA, or MCA student from a recognized college.' },
    { q: 'How long is the internship?', a: 'Programs range from 4-8 weeks for summer, or 3-6 months for extended internships.' },
    { q: 'Is there a stipend?', a: 'Yes, all internships include a stipend ranging from ₹12,000 to ₹50,000 depending on the program.' },
    { q: 'Can I do an internship during semester?', a: 'Yes, we offer semester internships with flexible hours that work around your classes.' },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Questions?</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
              <p className="text-foreground/70">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}