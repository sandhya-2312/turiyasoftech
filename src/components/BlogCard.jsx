function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm">
          {post.category}
        </span>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-slate-900">{post.title}</h3>
        <p className="line-clamp-3 text-sm leading-6 text-slate-600">{post.description}</p>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:text-cyan-600"
        >
          Read More <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
}

export default BlogCard;
