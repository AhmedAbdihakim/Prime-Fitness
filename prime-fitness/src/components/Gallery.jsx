import photo1 from "../assets/GymPhoto-1.jpg";
import photo2 from "../assets/GymPhoto-2.jpg";
import photo3 from "../assets/GymPhoto-3.jpg";
import photo4 from "../assets/GymPhoto-4.jpg";
import photo5 from "../assets/GymPhoto-5.jpg";
import photo6 from "../assets/GymPhoto-6.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      src: photo1,
      alt: "Gym photo 1",
    },
    {
      src: photo2,
      alt: "Gym photo 2",
    },
    {
      src: photo3,
      alt: "Gym photo 3",
    },
    {
      src: photo4,
      alt: "Gym photo 4",
    },
    {
      src: photo5,
      alt: "Gym photo 5",
    },
    {
      src: photo6,
      alt: "Gym photo 6",
    },
  ];

  return (
    <div className="min-h-screen w-screen p-8" id="gallery">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-oceanBlue text-5xl pb-8 font-bold text-center">
          Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-md h-64"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
