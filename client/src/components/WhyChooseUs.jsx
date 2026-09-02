const benefits = [
  {
    title: "Advanced Care",
    description:
      "We use digital imaging, precision tools, and evidence-based treatment approaches.",
  },
  {
    title: "Comfort First",
    description:
      "Every visit is designed to feel gentle, reassuring, and stress-free from start to finish.",
  },
  {
    title: "Transparent Plans",
    description:
      "You’ll receive clear explanations, flexible options, and honest guidance every step of the way.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-spacing benefits-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our Promise</p>
          <h2>Why patients trust SmileCraft.</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefit-card">
              <div className="icon-box">✓</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
