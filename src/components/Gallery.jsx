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
import image12 from "../assets/images/Edited-12.jpg";
import image13 from "../assets/images/Edited-13.jpg";
import image14 from "../assets/images/Edited-14-Cropped.jpg";
import image15 from "../assets/images/Edited-15.jpg";
import image16 from "../assets/images/Edited-16.jpg";
import image17 from "../assets/images/Edited-17.jpg";
import image18 from "../assets/images/Edited-18.jpg";
import image19 from "../assets/images/Edited-19.jpg";
import image20 from "../assets/images/Edited-20.jpg";
import image21 from "../assets/images/Edited-21.jpg";
import image22 from "../assets/images/Edited-22.jpg";
import image23 from "../assets/images/Edited-23.jpg";
import image24 from "../assets/images/Edited-24.jpg";
import image25 from "../assets/images/Edited-25.jpg";
import image26 from "../assets/images/Edited-26.jpg";
import image27 from "../assets/images/Edited-27.jpg";
import image28 from "../assets/images/Edited-28.jpg";
import image29 from "../assets/images/Edited-29.jpg";
import image30 from "../assets/images/Edited-30.jpg";
import image31 from "../assets/images/Edited-31.jpg";
import image32 from "../assets/images/Edited-32.jpg";

const images = [
  image30,
  image3,
  image4,
  image5,
  image6,
  image8,
  image9,
  image10,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image31,
  image32,
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen flex flex-col gap-4 xl:gap-10 px-4 py-10 xl:px-40 items-center justify-center"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        Pre-Nup Teaser
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
