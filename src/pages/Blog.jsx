import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "How Agentic AI Is Transforming Enterprise Workflows",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Explore how autonomous AI agents help businesses automate complex operations, reduce turnaround times, and improve decision-making across teams.",
    date: "Apr 12, 2026",
    category: "AI",
    author: "Anita Rao",
  },
  {
    id: 2,
    title: "Data Engineering Best Practices for Scalable SaaS Platforms",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description:
      "A practical guide to building resilient data pipelines, ensuring quality governance, and scaling analytics capabilities as product usage grows.",
    date: "Apr 10, 2026",
    category: "Data",
    author: "Rahul Mehta",
  },
  {
    id: 3,
    title: "Building Better Customer Experiences with Digital Twins",
    image:
      "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=1200&q=80",
    description:
      "Learn how digital twin technology provides real-time insight into operations and helps organizations optimize customer journeys and reliability.",
    date: "Apr 6, 2026",
    category: "Digital Twin",
    author: "Priya Nair",
  },
  {
    id: 4,
    title: "Cloud Cost Optimization Strategies for Growing Tech Teams",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Discover proven methods to reduce cloud waste, establish budgeting guardrails, and improve financial visibility without sacrificing performance.",
    date: "Apr 2, 2026",
    category: "Cloud",
    author: "Suresh Iyer",
  },
  {
    id: 5,
    title: "Designing Secure APIs for Enterprise Integrations",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Security-first API design is essential for modern integration architectures. This article covers patterns, pitfalls, and implementation tips.",
    date: "Mar 28, 2026",
    category: "Security",
    author: "Nisha Kapoor",
  },
  {
    id: 6,
    title: "IoT in Manufacturing: From Sensors to Actionable Insights",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    description:
      "Understand how connected devices and edge analytics improve production efficiency, predictive maintenance, and operational transparency.",
    date: "Mar 25, 2026",
    category: "IoT",
    author: "Arjun Pillai",
  },
  {
    id: 7,
    title: "A Practical Framework for AI Governance in Enterprises",
    image:
      "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=1200&q=80",
    description:
      "Set up responsible AI practices with clear accountability, model monitoring, and policy controls that align innovation with compliance.",
    date: "Mar 20, 2026",
    category: "AI",
    author: "Deepa Srinivas",
  },
  {
    id: 8,
    title: "Why Modern BI Needs Real-Time Data Pipelines",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    description:
      "Real-time business intelligence empowers teams to respond faster to market shifts. Here is what it takes to support low-latency analytics.",
    date: "Mar 17, 2026",
    category: "Data",
    author: "Vikram Desai",
  },
  {
    id: 9,
    title: "How Product Teams Can Scale with a Component-Driven Design System",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    description:
      "A scalable design system improves consistency, accessibility, and development speed across products and cross-functional teams.",
    date: "Mar 12, 2026",
    category: "Design",
    author: "Kiran Joshi",
  },
];

const recentPosts = blogPosts.slice(0, 3);
const tags = ["SaaS", "Automation", "Product", "Cloud", "AI", "Analytics", "Security", "IoT"];
const allCategories = ["All", ...new Set(blogPosts.map((post) => post.category))];

function Blog() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchValue, selectedCategory]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    setVisibleCount(6);
  };

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900">
        <section className="bg-gradient-to-b from-blue-50 via-slate-50 to-white px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Insights</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Blog</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
              Latest articles and industry insights
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {selectedCategory !== "All" && (
                <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
                  Showing posts in <span className="font-semibold">{selectedCategory}</span>
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {visiblePosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {visiblePosts.length === 0 && (
                <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600">
                  No posts found for the current search and category.
                </div>
              )}

              {hasMorePosts && (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Search</h2>
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearch}
                  placeholder="Search articles..."
                  className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Categories</h2>
                <ul className="mt-4 space-y-2">
                  {allCategories.map((category) => (
                    <li key={category}>
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                          selectedCategory === category
                            ? "bg-blue-600 text-white"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Recent Posts</h2>
                <ul className="mt-4 space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="border-b border-slate-100 pb-3 last:border-none last:pb-0">
                      <p className="text-sm font-medium text-slate-800">{post.title}</p>
                      <p className="mt-1 text-xs text-slate-500">{post.date}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Tags</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      #{tag}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
