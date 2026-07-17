import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Briefcase, Award, TrendingUp, Star } from 'lucide-react';
import Layout from '@/layouts/Layout';
import HeroSection from '@/components/ui/hero-section';

/**
 * UpEducative Homepage - LOCKED DESIGN SYSTEM
 * Deep Space Navy + Sky Blue + Glassmorphism (matches the Hero Section)
 * Premium SaaS aesthetic with aurora effects
 */

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <StatisticsSection />
      <ProgramsSection />
      <WhyUpEducativeSection />
      <StudentJourneySection />
      <PlacementSupportSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}

// ============================================================================
// TRUSTED BY SECTION
// ============================================================================
function TrustedBySection() {
  const colleges = [
    'IIT Delhi',
    'NIT Bangalore',
    'BITS Pilani',
    'VIT Vellore',
    'Manipal University',
    'Anna University',
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Trusted Partners</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Partnered with India's Top Colleges</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {colleges.map((college, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 flex items-center justify-center text-center hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <p className="text-foreground/80 font-medium">{college}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// STATISTICS SECTION
// ============================================================================
function StatisticsSection() {
  const stats = [
    { value: '9,500+', label: 'Students Placed', icon: Users },
    { value: '200+', label: 'Partner Companies', icon: Briefcase },
    { value: '50+', label: 'Training Programs', icon: Award },
    { value: '₹25,000', label: 'Avg. Stipend', icon: TrendingUp },
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Proven Track Record</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Our Impact So Far</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-foreground/70">{stat.label}</p>
              </motion.div>
            );
          })}
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
    {
      title: 'Summer Internship',
      duration: '6-8 weeks',
      stipend: '₹15,000 - ₹30,000',
      features: ['Flexible timing', 'Stipend included', 'Certificate'],
    },
    {
      title: 'Semester Internship',
      duration: '4-6 weeks',
      stipend: '₹12,000 - ₹25,000',
      features: ['Part-time option', 'Flexible hours', 'Support'],
    },
    {
      title: 'Extended Internship',
      duration: '3-6 months',
      stipend: '₹20,000 - ₹50,000',
      features: ['Full-time', 'Higher stipend', 'Job offer potential'],
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
              className="glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group"
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

// ============================================================================
// WHY UPEDUCATIVE SECTION
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">What Makes UpEducative Different</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
              <p className="text-foreground/70">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// STUDENT JOURNEY SECTION
// ============================================================================
function StudentJourneySection() {
  const steps = [
    { number: '01', title: 'Register', description: 'Create your profile and complete assessment' },
    { number: '02', title: 'Browse', description: 'Explore internship opportunities' },
    { number: '03', title: 'Apply', description: 'Submit applications to companies' },
    { number: '04', title: 'Interview', description: 'Participate in company interviews' },
    { number: '05', title: 'Succeed', description: 'Land your internship and grow' },
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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Your Path</p>
          <h2 className="text-4xl md:text-5xl font-medium text-foreground">Student Journey</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-4"
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
              <p className="text-5xl font-bold text-accent/30 mb-4">{step.number}</p>
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

// ============================================================================
// PLACEMENT SUPPORT SECTION
// ============================================================================
function PlacementSupportSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Support</p>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Comprehensive Placement Assistance</h2>
            <p className="text-lg text-foreground/70 mb-8">We don't just connect you with opportunities. We support you throughout your journey with resume reviews, interview prep, and career guidance.</p>
            <div className="space-y-4">
              {['Resume Optimization', 'Interview Coaching', 'Offer Negotiation', 'Career Mentoring'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            className="glass rounded-3xl p-12 aspect-square flex items-center justify-center"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <div className="text-center">
              <Award className="w-16 h-16 text-accent mx-auto mb-6" />
              <p className="text-foreground/80 font-medium">Expert Support Every Step</p>
            </div>
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

// ============================================================================
// CTA SECTION
// ============================================================================
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
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">Join thousands of students who've already started their journey with UpEducative. Your dream internship is just one click away.</p>
          <motion.button
            className="btn-primary px-10 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
