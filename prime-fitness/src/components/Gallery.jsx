const Gallery = () => {
  const galleryItems = [
    {
      src: "/GymPhoto-1.jpg",
      alt: "Gym photo 1",
    },
    {
      src: "/GymPhoto-2.jpg",
      alt: "Gym photo 2",
    },
    {
      src: "/GymPhoto-3.jpg",
      alt: "Gym photo 3",
    },
    {
      src: "/GymPhoto-4.jpg",
      alt: "Gym photo 4",
    },
    {
      src: "/GymPhoto-5.jpg",
      alt: "Gym photo 5",
    },
    {
      src: "/GymPhoto-6.jpg",
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
