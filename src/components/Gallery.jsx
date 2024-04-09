import { Carousel } from "@material-tailwind/react";
import image from "../assets/images/Edited.jpg";
import image11 from "../assets/images/Edited-11.jpg";
import image2 from "../assets/images/Edited-2.jpg";
import image3 from "../assets/images/Edited-3.jpg";
import image4 from "../assets/images/Edited-4.jpg";
import image5 from "../assets/images/Edited-5.jpg";
import image6 from "../assets/images/Edited-6.jpg";
import image7 from "../assets/images/Edited-7.jpg";
import image8 from "../assets/images/Edited-8.jpg";
import image9 from "../assets/images/Edited-9.jpg";
import image10 from "../assets/images/Edited-10.jpg";

const images = [
  image,
  image11,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col gap-4 xl:gap-10 px-4 py-10 xl:px-40 items-center justify-center"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        Gallery
      </h2>
      <Carousel className="down-up max-w-3xl h-[600px] bg-black rounded-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="h-full w-full object-contain object-center"
          />
        ))}
      </Carousel>
    </section>
  );
};
export default Gallery;
