import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="section-spacing testimonial-section">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow">Patient Reviews</p>
          <h2>People love the care they receive.</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <p className="quote">“{testimonial.quote}”</p>
              <div className="author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.service}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
