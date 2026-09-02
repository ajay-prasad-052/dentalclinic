import SectionTitle from "../components/SectionTitle";
import beforeAfterOne from "../assets/before and after image 1.jpg";
import beforeAfterTwo from "../assets/before and after image 2.jpg";
import beforeAfterThree from "../assets/before and after image 3.jpg";
import beforeAfterFour from "../assets/before and after image 4.jpg";

const images = [
  beforeAfterOne,
  beforeAfterTwo,
  beforeAfterThree,
  beforeAfterFour,
];

const GalleryPage = () => {
  return (
    <section className="page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Gallery"
          title="A look inside our welcoming clinic."
          align="center"
        />

        <div className="gallery-page-grid">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Dental treatment result ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
