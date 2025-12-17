import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import blogImage from "@/assets/blog-five-windows.jpg";

const blogPostsData = {
  "looking-again": {
    number: 1,
    title: "Looking Again at What We Thought We Knew",
    date: "December 2024",
    content: [
      {
        type: "paragraph",
        text: "I began imagining Five Windows because I had a hunch: that people in long-term couples—people I recognize as my peers—are entering a hard-earned phase of life. Married or together for at least 20 years. Adult children (if they had any) mostly out of the house and starting families of their own. More time and flexibility. Enough distance from the years of intense planning, building, balancing and nurturing to feel the possibility of growing and stretching again as individuals. And an increasing awareness that the energy we bring to our own pursuits might feed the relationship itself, with the potential to create real synergy.",
      },
      {
        type: "heading",
        text: "I Started with Curiosity",
      },
      {
        type: "paragraph",
        text: "I wanted to know how others were experiencing this moment. Not in theory. Not through diagnosis or advice. Simply: How does your relationship feel now? What has become more visible? What feels settled—and what doesn't?",
      },
      {
        type: "paragraph",
        text: "I began with a small, anonymous inquiry. It was intentionally modest. I omitted any \"clinical\" language implying that there must be something wrong that needed fixing. I asked eight carefully worded questions. I sent them to people in a decades-long relationship and still committed to staying in it.",
      },
      {
        type: "paragraph",
        text: "A handful of people who declined to participate generously responded and told me that they are not comfortable sharing personal details—even anonymously. That response, too, was instructive. It shapes my understanding that privacy and discretion are some of the elements that make love last.",
      },
      {
        type: "heading",
        text: "What Follows",
      },
      {
        type: "paragraph",
        text: "What follows is the first of several notes drawn from the reflections I did receive. It is not a study in the formal sense, and it is not a manifesto. It is a set of observations—patterns, emphases, and differences in how men and women in long marriages are taking stock as they enter the next chapter of life.",
      },
      {
        type: "paragraph",
        text: "It started with the questions.",
      },
    ],
    nextPost: {
      id: "why-five-windows",
      title: "Why Five Windows",
    },
    prevPost: null,
  },
  "why-five-windows": {
    number: 2,
    title: "Why Five Windows",
    date: "December 2024",
    content: [
      {
        type: "paragraph",
        text: "The inquiry that opens Letters for Lasting Love began with a hunch.",
      },
      {
        type: "paragraph",
        text: "It formed slowly, and away from home.",
      },
      {
        type: "paragraph",
        text: "My peers and me are entering a new phase of life. Children, if there are any, are grown or nearly so. Successful careers and reputations for excellence are established. Time could feel less crowded. There is room again to stretch as individuals, and a growing awareness that the energy we bring to our own pursuits now feeds the relationship itself. There's a potential to create real synergy between two mature adults who know themselves and each other—who they are and what they want.",
      },
      {
        type: "heading",
        text: "A Gap in the Conversation",
      },
      {
        type: "paragraph",
        text: "What I noticed was how little language exists for this stage of lasting partnership. There is no shortage of writing about how relationships begin, and even more about how they falter. Far less attention is given to marriages that endure—and to the questions that arise when survival is no longer the central task.",
      },
      {
        type: "paragraph",
        text: "That was the hunch: that something important is happening in lasting love, and it is largely overlooked.",
      },
      {
        type: "heading",
        text: "A Trip to Venice",
      },
      {
        type: "paragraph",
        text: "While digesting these thoughts, my husband and I took a four day trip to Venice in early December. That choice would not have been possible earlier in our lives. No children to arrange care for. No work structures requiring permission. Enough freedom to leave and return without disruption.",
      },
      {
        type: "paragraph",
        text: "One afternoon, on a tour of the Jewish ghetto, we visited several synagogues. From the outside, the buildings appeared plain, with five windows scattered across the facade. We learned that these five windows signal that a synagogue is housed within.",
      },
      {
        type: "heading",
        text: "The Reveal",
      },
      {
        type: "paragraph",
        text: "Inside, the space was ornate and awe inspiring. What stayed with me was the experience of the reveal of a discreetly signified yet richly articulated, sacred space hidden within a humdrum facade.",
      },
      {
        type: "paragraph",
        text: "That was the perfect metaphor for my hunch about lasting love.",
      },
      {
        type: "paragraph",
        text: "Decades-long relationships—the ones that have thrived—often appear unremarkable, even dull, from the outside. But look closer and you find they are extraordinarily diverse vessels filled with romance, disillusionment, repair, resilience, gratitude and legacy. No one tells the whole story, and every one is singular.",
      },
      {
        type: "callout",
        text: "Five Windows is a name for this understanding.",
      },
      {
        type: "paragraph",
        text: "The letters that follow take each of the questions in turn, looking more closely at what people in long term romantic partnerships are noticing, feeling and wanting from their relationship at this stage of life.",
      },
    ],
    nextPost: null,
    prevPost: {
      id: "looking-again",
      title: "Looking Again at What We Thought We Knew",
    },
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPostsData[slug as keyof typeof blogPostsData]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogPostsData[slug as keyof typeof blogPostsData];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary text-sm tracking-widest uppercase mb-8 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Letters
          </Link>
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Letter on Lasting Love, No. {post.number}
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {post.title}
          </h1>
          <div className="w-16 h-0.5 bg-primary mb-6" />
          <p className="text-muted-foreground">{post.date}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={blogImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 
                    key={index} 
                    className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-6 first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "callout") {
                return (
                  <blockquote 
                    key={index} 
                    className="border-l-4 border-primary pl-6 py-4 my-10 bg-muted/50"
                  >
                    <p className="font-display text-xl md:text-2xl text-foreground italic m-0">
                      {block.text}
                    </p>
                  </blockquote>
                );
              }
              return (
                <p 
                  key={index} 
                  className="text-muted-foreground text-lg leading-relaxed mb-6"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Signature */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="font-display text-xl text-foreground italic">
              Five Windows: Elevating Lasting Love
            </p>
          </div>
        </div>
      </article>

      {/* Navigation */}
      <section className="py-12 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            {post.prevPost ? (
              <Link 
                to={`/blog/${post.prevPost.id}`}
                className="group flex items-center gap-3 text-left"
              >
                <ArrowLeft className="h-5 w-5 text-primary group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Previous</p>
                  <p className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {post.prevPost.title}
                  </p>
                </div>
              </Link>
            ) : <div />}
            
            {post.nextPost ? (
              <Link 
                to={`/blog/${post.nextPost.id}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next</p>
                  <p className="text-foreground group-hover:text-primary transition-colors font-medium">
                    {post.nextPost.title}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Continue the Conversation
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            These reflections are just the beginning. If they resonate, I'd love to hear from you.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
