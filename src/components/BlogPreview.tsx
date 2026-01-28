import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "top-10-luxury-stays-2025",
    title: "Top 10 Luxury Stays to Experience in 2025",
    excerpt: "Discover premium accommodations offering comfort, style, and exceptional hospitality for your next short stay or getaway.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    author: "Sarah Mitchell",
    date: "January 5, 2025",
    category: "Hospitality Insights",
  },
  {
    id: 2,
    slug: "smart-booking-tips",
    title: "Smart Booking Tips for Comfortable Stays",
    excerpt: "Learn how to select the perfect serviced apartment or short-stay accommodation without compromising on comfort and convenience.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop",
    author: "Michael Chen",
    date: "January 3, 2025",
    category: "Guest Tips",
  },
  {
    id: 3,
    slug: "sustainable-lodging-guide",
    title: "The Complete Guide to Sustainable Lodging",
    excerpt: "Explore eco-friendly accommodations and practices that ensure a responsible and luxurious stay experience.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    author: "Emma Johnson",
    date: "December 28, 2024",
    category: "Eco Hospitality",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-justAnotherHand text-primary text-lg">Our Stories</span>
          <h2 className="section-title mt-2">Hospitality Blog & Insights</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore stories, tips, and inspiration about premium stays, comfort-first lodging, and short-term accommodations that make every guest feel welcome.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="card-destination bg-background overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
