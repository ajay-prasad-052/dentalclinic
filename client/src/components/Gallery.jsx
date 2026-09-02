import beforeAfterOne from "../assets/before and after image 1.jpg";
import beforeAfterTwo from "../assets/before and after image 2.jpg";
import beforeAfterThree from "../assets/before and after image 3.jpg";
import beforeAfterFour from "../assets/before and after image 4.jpg";

const galleryImages = [
  beforeAfterOne,
  beforeAfterTwo,
  beforeAfterThree,
  beforeAfterFour,
];

const Gallery = () => {
  return (
    <section className="section-spacing gallery-section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our Clinic</p>
          <h2>A calm, modern dental experience.</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={image} className="gallery-item">
              <img src={image} alt={`Dental treatment result ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
