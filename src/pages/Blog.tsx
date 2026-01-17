import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogCategories = [
  { id: "all", name: "All Posts" },
  { id: "travel-guide", name: "Travel Guide" },
  { id: "tips", name: "Tips & Tricks" },
  { id: "eco", name: "Eco Travel" },
  { id: "adventure", name: "Adventure" },
  { id: "luxury", name: "Luxury" },
];

const blogPosts = [
  {
    id: 1,
    slug: "top-10-destinations-2025",
    title: "Top 10 Must-Visit Destinations in 2025",
    excerpt: "Discover the most breathtaking locations around the world that should be on every traveler's bucket list this year. From hidden gems to popular hotspots, we've curated the ultimate travel guide.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    author: "Sarah Mitchell",
    date: "January 5, 2025",
    category: "Travel Guide",
    categoryId: "travel-guide",
    featured: true,
  },
  {
    id: 2,
    slug: "budget-travel-tips",
    title: "Budget Travel Tips: See the World Without Breaking the Bank",
    excerpt: "Expert advice on how to plan affordable trips without compromising on experiences and memories. Learn the secrets seasoned travelers use to save money.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop",
    author: "Michael Chen",
    date: "January 3, 2025",
    category: "Tips & Tricks",
    categoryId: "tips",
    featured: false,
  },
  {
    id: 3,
    slug: "sustainable-travel-guide",
    title: "The Complete Guide to Sustainable Travel",
    excerpt: "Learn how to minimize your environmental footprint while exploring the world responsibly. Make a positive impact on the places you visit.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
    author: "Emma Johnson",
    date: "December 28, 2024",
    category: "Eco Travel",
    categoryId: "eco",
    featured: false,
  },
  {
    id: 4,
    slug: "solo-travel-safety",
    title: "Solo Travel Safety: Tips for Independent Explorers",
    excerpt: "Everything you need to know about staying safe while traveling alone. From choosing destinations to emergency preparedness.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&h=400&fit=crop",
    author: "David Rodriguez",
    date: "December 22, 2024",
    category: "Tips & Tricks",
    categoryId: "tips",
    featured: false,
  },
  {
    id: 5,
    slug: "luxury-resorts-maldives",
    title: "The Ultimate Guide to Luxury Resorts in Maldives",
    excerpt: "Explore the most exclusive overwater villas and private island resorts in the Maldives. Indulge in world-class amenities and breathtaking ocean views.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
    author: "Jessica Taylor",
    date: "December 18, 2024",
    category: "Luxury",
    categoryId: "luxury",
    featured: false,
  },
  {
    id: 6,
    slug: "hiking-trails-europe",
    title: "Best Hiking Trails in Europe for Adventure Seekers",
    excerpt: "From the Swiss Alps to the Scottish Highlands, discover the most scenic and challenging hiking trails across Europe.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    author: "Tom Anderson",
    date: "December 15, 2024",
    category: "Adventure",
    categoryId: "adventure",
    featured: false,
  },
  {
    id: 7,
    slug: "food-tours-asia",
    title: "Culinary Adventures: Best Food Tours in Asia",
    excerpt: "Embark on a gastronomic journey through Asia's most vibrant food scenes. From street food to fine dining experiences.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    author: "Lisa Wong",
    date: "December 10, 2024",
    category: "Travel Guide",
    categoryId: "travel-guide",
    featured: false,
  },
  {
    id: 8,
    slug: "packing-essentials",
    title: "The Ultimate Packing Checklist for Any Trip",
    excerpt: "Never forget an essential item again with our comprehensive packing guide. Organized by trip type and duration.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
    author: "Rachel Green",
    date: "December 5, 2024",
    category: "Tips & Tricks",
    categoryId: "tips",
    featured: false,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.categoryId === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="font-pacifico text-primary text-lg">Our Stories</span>
            <h1 className="section-title mt-2">Travel Blog & Insights</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore stories, tips, and inspiration from around the world. Discover destinations, travel guides, and experiences that help you plan your next unforgettable journey.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && activeCategory === "all" && !searchQuery && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-16"
            >
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium text-sm">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all pt-2">
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
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

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="btn-primary mt-4"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
