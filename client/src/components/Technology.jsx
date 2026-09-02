const techFeatures = [
  "Digital Smile Design",
  "3D Cone Beam Imaging",
  "Laser Dentistry",
  "Intraoral Scanning",
];

const Technology = () => {
  return (
    <section className="technology-section section-spacing">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Modern Dentistry</p>
          <h2>Technology-driven treatment you can rely on.</h2>
        </div>

        <div className="tech-grid">
          {techFeatures.map((feature) => (
            <div key={feature} className="tech-item">
              <span className="pulse-dot" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
