import { motion } from 'framer-motion';
import Layout from '@/layouts/Layout';

export default function Blog() {
  return (
    <Layout>
      <HeroSection />
      <ArticlesSection />
      <NewsletterSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden aurora pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6">Blog</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Insights, tips, and stories from our community.</p>
        </motion.div>
      </div>
    </section>
  );
}

function ArticlesSection() {
  const articles = [
    {
      title: 'How to Ace Your Internship Interview',
      excerpt: 'Learn proven strategies to prepare for and succeed in your internship interviews.',
      date: 'Jul 10, 2024',
      category: 'Career Tips',
      readTime: '5 min',
    },
    {
      title: 'Top Skills Companies Look For in 2024',
      excerpt: 'Discover the most in-demand skills that tech companies are hiring for this year.',
      date: 'Jul 8, 2024',
      category: 'Industry Trends',
      readTime: '6 min',
    },
    {
      title: 'Student Success Story: From Internship to Job Offer',
      excerpt: 'Read how Priya transformed her career through UpEducative internships.',
      date: 'Jul 5, 2024',
      category: 'Success Stories',
      readTime: '7 min',
    },
    {
      title: 'Building Your Professional Network',
      excerpt: 'Strategies to build meaningful connections during your internship.',
      date: 'Jul 1, 2024',
      category: 'Professional Growth',
      readTime: '5 min',
    },
    {
      title: 'Remote Internships: Pros and Cons',
      excerpt: 'A comprehensive guide to choosing between remote and on-site internships.',
      date: 'Jun 28, 2024',
      category: 'Career Tips',
      readTime: '6 min',
    },
    {
      title: 'Navigating Your First Week at a Tech Company',
      excerpt: 'Tips for making a great first impression during your internship.',
      date: 'Jun 25, 2024',
      category: 'Internship Guide',
      readTime: '4 min',
    },
  ];

  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{article.category}</span>
                <span className="text-xs text-foreground/60">{article.readTime} read</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">{article.title}</h3>
              <p className="text-foreground/70 mb-6 line-clamp-2 flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-foreground/60">{article.date}</span>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Read →
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-20 text-center aurora max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-foreground/70 mb-8">Get the latest career tips, opportunities, and success stories delivered to your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
            />
            <motion.button
              className="px-8 py-3 rounded-full bg-white text-[#050816] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/50 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
