import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Dental Blog"
          title="Helpful insight for a healthier smile."
          description="Education, prevention, and practical advice for better oral health."
          align="center"
        />

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <div className="blog-body">
                <span>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <Link to={`/blog/${blog.slug}`}>Read article</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
