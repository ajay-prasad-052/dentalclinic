import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="page-section">
        <div className="container">
          <h2>Article not found.</h2>
          <Link to="/blog" className="btn btn-secondary">
            Back to Articles
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container article-shell">
        <img src={blog.image} alt={blog.title} className="article-image" />
        <div className="article-copy">
          <span className="article-tag">{blog.category}</span>
          <h1>{blog.title}</h1>
          <p className="article-date">{blog.date}</p>
          <p>
            Good oral care starts with consistency. Brushing twice a day,
            flossing regularly, and staying hydrated all contribute to a
            healthier, brighter smile. Professional care supports that
            foundation by catching issues early and deep cleaning areas at-home
            care may miss.
          </p>
          <p>
            Beyond aesthetics, healthy teeth and gums play an important role in
            overall wellness. Preventive care helps reduce the risk of cavities,
            gum disease, and future restorative treatment, while protecting your
            confidence and comfort every day.
          </p>
          <Link to="/blog" className="btn btn-secondary">
            Back to blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
