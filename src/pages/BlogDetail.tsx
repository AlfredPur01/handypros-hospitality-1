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
    excerpt: "Discover the most breathtaking locations around the world that should be on every traveler's bucket list this year.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    author: "Sarah Mitchell",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    date: "January 5, 2025",
    category: "Travel Guide",
    readTime: "8 min read",
    content: `
      <p class="lead">As we step into 2025, the world of travel continues to evolve, offering new experiences and rediscovered gems. Whether you're seeking adventure, relaxation, or cultural immersion, these destinations promise unforgettable memories.</p>

      <h2>1. Kyoto, Japan</h2>
      <p>With its ancient temples, traditional tea houses, and stunning cherry blossoms, Kyoto remains a timeless destination. The city beautifully balances preservation of its rich heritage with modern amenities, making it perfect for travelers seeking authentic cultural experiences.</p>

      <h2>2. Patagonia, Argentina & Chile</h2>
      <p>For adventure seekers, Patagonia offers some of the world's most dramatic landscapes. From towering glaciers to pristine lakes and rugged mountains, this region at the southern tip of South America is a paradise for hikers and nature enthusiasts.</p>

      <h2>3. Marrakech, Morocco</h2>
      <p>The vibrant souks, stunning riads, and rich cultural heritage make Marrakech a feast for the senses. The city's medina, a UNESCO World Heritage site, offers an immersive journey through centuries of history and tradition.</p>

      <h2>4. Iceland</h2>
      <p>Land of fire and ice, Iceland continues to captivate travelers with its otherworldly landscapes. From the Northern Lights to geothermal hot springs and dramatic waterfalls, every corner of this Nordic island offers something spectacular.</p>

      <h2>5. Amalfi Coast, Italy</h2>
      <p>The dramatic coastline, colorful villages, and Mediterranean cuisine make the Amalfi Coast a perennial favorite. Whether you're exploring the charming town of Positano or enjoying fresh seafood with ocean views, this Italian gem delivers romance and beauty in equal measure.</p>

      <blockquote>"Travel is the only thing you buy that makes you richer." — Anonymous</blockquote>

      <h2>6. New Zealand</h2>
      <p>From the rolling hills of Hobbiton to the adventure capital of Queenstown, New Zealand offers experiences for every type of traveler. The country's commitment to sustainability and preservation of its natural beauty makes it an ideal destination for eco-conscious travelers.</p>

      <h2>7. Santorini, Greece</h2>
      <p>The iconic white-washed buildings and blue domes of Santorini have made it one of the most photographed places in the world. Beyond its visual appeal, the island offers excellent wine, incredible sunsets, and rich archaeological sites.</p>

      <h2>8. Costa Rica</h2>
      <p>A leader in eco-tourism, Costa Rica offers incredible biodiversity, from cloud forests to tropical beaches. Adventure activities like zip-lining, surfing, and wildlife watching make it perfect for active travelers.</p>

      <h2>9. Portugal</h2>
      <p>From the historic streets of Lisbon to the wine regions of Douro Valley, Portugal continues to grow as a top destination. Its affordable prices, warm hospitality, and diverse landscapes make it excellent value for travelers.</p>

      <h2>10. Tanzania</h2>
      <p>Home to the Serengeti and Mount Kilimanjaro, Tanzania offers some of Africa's most iconic experiences. The Great Migration, pristine beaches of Zanzibar, and authentic cultural encounters create a diverse and unforgettable journey.</p>

      <h2>Planning Your Trip</h2>
      <p>When planning your visit to any of these destinations, consider the best seasons to travel, local customs and etiquette, and sustainable travel practices. Early booking is recommended, especially for popular destinations during peak seasons.</p>

      <p>Remember, the best trips are those planned with curiosity and openness to new experiences. Happy travels!</p>
    `,
  },
  {
    id: 2,
    slug: "budget-travel-tips",
    title: "Budget Travel Tips: See the World Without Breaking the Bank",
    excerpt: "Expert advice on how to plan affordable trips without compromising on experiences and memories.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&h=600&fit=crop",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "January 3, 2025",
    category: "Tips & Tricks",
    readTime: "6 min read",
    content: `
      <p class="lead">Traveling doesn't have to drain your savings. With smart planning and insider knowledge, you can explore the world while keeping your budget intact.</p>

      <h2>1. Be Flexible with Dates</h2>
      <p>Flight prices can vary dramatically depending on when you travel. Use flexible date search tools to find the cheapest days to fly. Mid-week flights are often significantly cheaper than weekend departures.</p>

      <h2>2. Consider Alternative Accommodations</h2>
      <p>Hotels aren't your only option. Hostels, guesthouses, and vacation rentals can offer better value, especially for longer stays. Many also provide kitchen facilities, saving you money on meals.</p>

      <h2>3. Eat Like a Local</h2>
      <p>Skip tourist restaurants and eat where locals do. Street food markets, local eateries, and grocery stores offer authentic experiences at a fraction of the cost.</p>

      <h2>4. Use Public Transportation</h2>
      <p>Taxis and ride-shares add up quickly. Research public transportation options before you arrive. Many cities offer tourist passes that provide unlimited travel for a set period.</p>

      <h2>5. Book in Advance (But Not Too Far)</h2>
      <p>The sweet spot for booking flights is typically 6-8 weeks before departure. For accommodations, booking 2-4 weeks ahead often yields good deals while maintaining flexibility.</p>

      <blockquote>"A budget is telling your money where to go instead of wondering where it went." — Dave Ramsey</blockquote>

      <h2>6. Travel Slowly</h2>
      <p>Rushing through multiple destinations increases costs. Staying longer in fewer places reduces transportation expenses and often qualifies you for weekly accommodation discounts.</p>

      <h2>7. Free Activities Are Everywhere</h2>
      <p>Many museums offer free admission days, walking tours operate on tips, and nature doesn't charge entrance fees. Research free activities before you go.</p>

      <p>Remember, budget travel isn't about deprivation—it's about smart choices that allow you to travel more often and more meaningfully.</p>
    `,
  },
  {
    id: 3,
    slug: "sustainable-travel-guide",
    title: "The Complete Guide to Sustainable Travel",
    excerpt: "Learn how to minimize your environmental footprint while exploring the world responsibly.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop",
    author: "Emma Johnson",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "December 28, 2024",
    category: "Eco Travel",
    readTime: "7 min read",
    content: `
      <p class="lead">As travelers, we have a responsibility to protect the places we love to visit. Sustainable travel isn't just a trend—it's a necessity for preserving our planet for future generations.</p>

      <h2>Understanding Your Impact</h2>
      <p>Every trip we take has an environmental footprint. From carbon emissions during flights to water usage at hotels, being aware of our impact is the first step toward traveling more responsibly.</p>

      <h2>Choosing Eco-Friendly Transportation</h2>
      <p>When possible, opt for trains over planes for shorter distances. If flying is necessary, consider direct flights (takeoffs and landings generate the most emissions) and carbon offset programs.</p>

      <h2>Supporting Local Communities</h2>
      <p>Choose locally-owned accommodations and restaurants. Buy from local artisans instead of chain stores. Your tourism dollars should benefit the communities you visit.</p>

      <h2>Reducing Waste</h2>
      <p>Bring a reusable water bottle, shopping bag, and utensils. Refuse single-use plastics whenever possible. Many destinations now have water refill stations to support plastic-free travel.</p>

      <h2>Respecting Wildlife</h2>
      <p>Never support attractions that exploit animals. Choose ethical wildlife experiences that prioritize animal welfare and conservation over entertainment.</p>

      <blockquote>"Take nothing but pictures, leave nothing but footprints, kill nothing but time." — Aliyyah Eniath</blockquote>

      <h2>Conserving Resources</h2>
      <p>Treat resources as if you were at home—or better. Reuse towels, take shorter showers, and turn off lights and AC when leaving your room.</p>

      <p>Sustainable travel is a journey, not a destination. Every small choice adds up to make a significant difference.</p>
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
                Back to Blog
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
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
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
