import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import blogImage from "@/assets/blog-five-windows.jpg";

const blogPosts = [
  {
    id: "looking-again",
    number: 1,
    title: "Looking Again at What We Thought We Knew",
    excerpt: "I began imagining Five Windows because I had a hunch: that people in long-term couples—people I recognize as my peers—are entering a hard-earned phase of life.",
    date: "December 2024",
  },
  {
    id: "why-five-windows",
    number: 2,
    title: "Why Five Windows",
    excerpt: "The inquiry that opens Letters for Lasting Love began with a hunch. It formed slowly, and away from home.",
    date: "December 2024",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">The Blog</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Letters on Lasting Love
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Observations, patterns, and reflections on what it means to love well over decades. Not a study in the formal sense, and not a manifesto—a set of notes drawn from real reflections.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article className="bg-background border border-border/50 overflow-hidden h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                  <div className="aspect-[16/10] bg-card overflow-hidden">
                    <img
                      src={blogImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-primary text-sm tracking-widest uppercase">Letter No. {post.number}</p>
                      <span className="text-border">|</span>
                      <p className="text-muted-foreground text-sm">{post.date}</p>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6">
                      <span className="text-primary text-sm tracking-widest uppercase font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Be the first to receive new letters and updates from Five Windows.
          </p>
          <Link
            to="/contact"
            className="inline-block border-2 border-primary-foreground text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
