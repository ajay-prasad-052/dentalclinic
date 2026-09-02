import { useState } from "react";
import { faqData } from "../data/faq";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-spacing faq-section">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>Common questions from our patients.</h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`faq-item ${isOpen ? "active" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
