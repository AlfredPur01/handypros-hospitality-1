import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Tag, Share2, Heart, Bookmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    slug: "top-10-destinations-2025",
    title: "Top 10 Must-Visit Destinations in 2025",
    excerpt: "Embark on a journey to the world's most captivating destinations for 2025.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    author: "Sarah Mitchell",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    date: "January 5, 2025",
    category: "Travel Guide",
    readTime: "8 min read",
    content: `
      <p class="lead">Step into 2025 with a curated list of travel experiences that promise unforgettable memories, cultural immersion, and breathtaking sights.</p>

      <h2>1. Kyoto, Japan</h2>
      <p>Discover timeless temples, serene gardens, and cherry blossoms that paint the city in soft pinks each spring.</p>

      <h2>2. Patagonia, Argentina & Chile</h2>
      <p>Experience dramatic landscapes of glaciers, lakes, and mountains perfect for adventurers and nature lovers alike.</p>

      <h2>3. Marrakech, Morocco</h2>
      <p>Immerse yourself in vibrant souks, exquisite riads, and centuries of rich Moroccan culture.</p>

      <h2>4. Iceland</h2>
      <p>Witness the Northern Lights, geothermal wonders, and dramatic waterfalls in this Nordic paradise.</p>

      <h2>5. Amalfi Coast, Italy</h2>
      <p>Stroll through colorful seaside towns and savor Mediterranean cuisine with panoramic ocean views.</p>

      <blockquote>"Travel is the only thing you buy that makes you richer." — Anonymous</blockquote>

      <h2>6. New Zealand</h2>
      <p>From Hobbiton’s rolling hills to Queenstown’s adventure sports, experience landscapes that inspire and energize.</p>

      <h2>7. Santorini, Greece</h2>
      <p>Iconic white-and-blue architecture, incredible sunsets, and rich history await on this picturesque island.</p>

      <h2>8. Costa Rica</h2>
      <p>Eco-tourism and adventure collide with cloud forests, tropical beaches, and wildlife encounters.</p>

      <h2>9. Portugal</h2>
      <p>Historic streets, wine regions, and welcoming locals make Portugal a must-visit European destination.</p>

      <h2>10. Tanzania</h2>
      <p>From Serengeti safaris to Zanzibar beaches, Tanzania offers diverse experiences for curious travelers.</p>

      <h2>Travel Tips</h2>
      <p>Plan ahead, respect local cultures, and embrace sustainable travel practices to make the most of your journey.</p>

      <p>Adventure awaits—travel with curiosity and make every trip extraordinary!</p>
    `,
  },
  {
    id: 2,
    slug: "budget-travel-tips",
    title: "Budget Travel Tips: Explore Without Limits",
    excerpt: "Learn how to maximize experiences while keeping your travel expenses in check.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&h=600&fit=crop",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "January 3, 2025",
    category: "Tips & Tricks",
    readTime: "6 min read",
    content: `
      <p class="lead">Traveling smart allows you to explore more destinations without stretching your budget.</p>

      <h2>1. Flexible Travel Dates</h2>
      <p>Adjust your travel schedule to snag the best flight deals. Mid-week trips often save you money.</p>

      <h2>2. Alternative Stays</h2>
      <p>Consider hostels, guesthouses, and rentals to save while enjoying authentic local experiences.</p>

      <h2>3. Eat Like a Local</h2>
      <p>Discover culinary delights at street markets and local eateries for genuine flavor at lower cost.</p>

      <h2>4. Public Transportation</h2>
      <p>Use buses, trains, and city passes instead of taxis to keep transportation costs down.</p>

      <blockquote>"A budget is telling your money where to go instead of wondering where it went." — Dave Ramsey</blockquote>

      <h2>5. Advance Booking</h2>
      <p>Book flights 6-8 weeks ahead and accommodations 2-4 weeks in advance to get the best deals.</p>

      <h2>6. Slow Travel</h2>
      <p>Spend more time in fewer destinations to reduce transport costs and enjoy a richer experience.</p>

      <p>Smart planning makes budget travel both possible and memorable.</p>
    `,
  },
  {
    id: 3,
    slug: "sustainable-travel-guide",
    title: "The Complete Guide to Sustainable Travel",
    excerpt: "Minimize your footprint and travel responsibly around the world.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop",
    author: "Emma Johnson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "December 28, 2024",
    category: "Eco Travel",
    readTime: "7 min read",
    content: `
      <p class="lead">Sustainable travel ensures that future generations can enjoy the world as we do today.</p>

      <h2>Know Your Impact</h2>
      <p>Be mindful of emissions, water usage, and waste to minimize your environmental footprint.</p>

      <h2>Eco-Friendly Transport</h2>
      <p>Choose trains for shorter trips, direct flights when necessary, and offset your carbon footprint.</p>

      <h2>Support Local Communities</h2>
      <p>Opt for locally-owned accommodations, buy from artisans, and immerse yourself in community culture.</p>

      <h2>Reduce Waste</h2>
      <p>Carry reusable items and avoid single-use plastics to leave minimal impact.</p>

      <blockquote>"Take nothing but pictures, leave nothing but footprints, kill nothing but time." — Aliyyah Eniath</blockquote>

      <h2>Respect Wildlife</h2>
      <p>Choose ethical experiences and avoid attractions that harm animals or their habitats.</p>

      <p>Every small choice makes a big difference in sustainable travel. Travel consciously, explore responsibly!</p>
    `,
  },
];

const relatedPosts = [
  {
    slug: "budget-travel-tips",
    title: "Budget Travel Tips",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=300&h=200&fit=crop",
    category: "Tips & Tricks",
  },
  {
    slug: "sustainable-travel-guide",
    title: "Sustainable Travel Guide",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&h=200&fit=crop",
    category: "Eco Travel",
  },
  {
    slug: "solo-travel-safety",
    title: "Solo Travel Safety",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=300&h=200&fit=crop",
    category: "Tips & Tricks",
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[50vh] min-h-[400px] mb-12"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Stories
              </Link>
            </motion.div>

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">{post.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">{post.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Bookmark className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Posts */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="border-t border-border pt-12"
            >
              <h2 className="text-2xl font-bold mb-8">Related Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts
                  .filter((p) => p.slug !== slug)
                  .slice(0, 3)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="rounded-xl overflow-hidden mb-3">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
