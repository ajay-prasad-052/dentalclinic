const SectionTitle = ({ eyebrow, title, description, align = "left" }) => {
  return (
    <div className={`section-title ${align === "center" ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
};

export default SectionTitle;
