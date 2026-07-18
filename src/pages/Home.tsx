import { motion, Variants } from 'framer-motion';
import { CheckCircle, Star, FileText, Sparkles, BrainCircuit } from 'lucide-react';
import Layout from '@/layouts/Layout';
import HeroSection from '@/components/ui/hero-section';
import { BRANDING } from '@/constants/branding';

/**
 * UpEducative Homepage - FIXED CONTRAST & INTERACTIONS
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

// Animation Presets
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
  }
} as const;

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
} as const;

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
    <section className="py-20 border-t border-border/60 dark:border-white/10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Training Programs</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Choose Your Specialization</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {programs.map((program, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover="hover"
              whileTap="tap"
              custom={i}
              className="glass border border-border/50 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md bg-card/60 dark:bg-white/5 transition-colors duration-300 flex flex-col h-full group"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{program.title}</h3>
                <p className="text-primary dark:text-sky-400 font-semibold mb-4 text-sm tracking-wide">{program.duration}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3 mb-8">
                  {program.topics.map((topic, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary dark:text-sky-400 flex-shrink-0" />
                      <span className="text-foreground/90 font-medium text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.button
                className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-bold transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20 mt-auto shadow-sm"
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
    <section className="py-20 border-t border-border/60 dark:border-white/10 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Career Opportunities</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Choose Your Path</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {programs.map((program, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover="hover"
              whileTap="tap"
              className="glass border border-border/50 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md bg-card/60 dark:bg-white/5 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">{program.title}</h3>
                <div className="space-y-2.5 p-4 rounded-2xl bg-muted/60 dark:bg-white/5 border border-border/40 mb-6">
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Duration:</span> {program.duration}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Stipend:</span> {program.stipend}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary dark:text-sky-400 flex-shrink-0" />
                      <span className="text-foreground/90 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.button 
                className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-bold transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20 shadow-sm"
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

// ============================================================================
// PLACEMENT SUPPORT SECTION (RESUME BUILDER)
// ============================================================================
function PlacementSupportSection() {
  return (
    <section className="py-20 border-t border-border/60 dark:border-white/10 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Resume Builder</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">No resume? No problem.</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">Let us help you create one or improve the one you've got with our intelligent tools.</motion.p>
            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                { icon: Sparkles, text: 'AI-powered resume builder' },
                { icon: BrainCircuit, text: 'Intelligent feedback engine' },
                { icon: CheckCircle, text: 'Optimized for freshers' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary dark:text-sky-400 flex-shrink-0" />
                  <span className="text-foreground/90 font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border/80 dark:border-white/10 bg-card/70 dark:bg-white/5 p-8 backdrop-blur-[28px] shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                  <FileText className="h-7 w-7 text-primary dark:text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Build Your Professional Resume</h3>
                  <p className="text-sm text-muted-foreground">Ready in minutes</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Choose from ATS-friendly templates designed to get you noticed by top recruiters.
              </p>

              <motion.button 
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-md transition-shadow hover:shadow-lg hover:shadow-primary/20"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Build my resume →
              </motion.button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
          </motion.div>
        </div>
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
    role: 'B.Tech CSE Student',
    company: 'Tier-3 College Success',
    text: `Coming from a tier-3 college, I had zero guidance on how to clear resume screens. The step-by-step training modules on ${BRANDING.name} showed me exactly how to fill my portfolio gaps. I didn't just get an internship; I gained the actual technical confidence I was missing in class.`,
    rating: 5,
  },
  {
    name: 'Arjun Patel',
    role: 'ECE Undergrad',
    company: 'Core Electronics to IT Shift',
    text: `The hardest part of shifting from ECE to web dev was trying to build structured projects on my own. The structured tracks here kept me accountable. The mock interview preparation was the exact turning point that helped me handle tough technical rounds without panicking.`,
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'MCA Student',
    company: 'Non-Metro City Placement',
    text: `I used to spend hours sending out cold applications on LinkedIn with zero replies. Switching to this platform gave me a direct roadmap. The resume analyzer alone completely fixed how I presented my freelance projects, and I started getting callbacks within two weeks.`,
    rating: 5,
  },
];

  return (
    <section className="py-20 border-t border-border/60 dark:border-white/10 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Success Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">What Our Students Say</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover="hover"
              whileTap="tap"
              className="glass border border-border/50 dark:border-white/10 rounded-3xl p-8 bg-card/60 dark:bg-white/5 backdrop-blur-md transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed font-normal text-[15px]">"{testimonial.text}"</p>
              <div className="pt-4 border-t border-border/40">
                <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role} • <span className="text-primary dark:text-sky-400 font-medium">{testimonial.company}</span></p>
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
    <section className="py-20 border-t border-border/60 dark:border-white/10 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Questions?</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.005 }}
              className="glass border border-border/50 dark:border-white/10 rounded-2xl p-6 bg-card/60 dark:bg-white/5 backdrop-blur-md shadow-sm transition-colors duration-200"
            >
              <h3 className="font-bold text-foreground mb-2 text-base flex items-start gap-2">
                <span className="text-primary font-mono">Q.</span>
                {faq.q}
              </h3>
              <p className="text-muted-foreground text-sm pl-5 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}