import hero from "../assets/gym-hero.png";

const Home = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 h-screen bg-urbanNight text-white"
      id="home"
    >
      <section className="flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-oceanBlue">Prime Fitness</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            your ultimate destination for fitness and well-being! Discover a
            wide range of state-of-the-art equipment, expert-led classes,
            personalized training sessions, and a supportive community to help
            you reach your fitness goals. Join us today and embark on your
            journey to a healthier, stronger you.
          </p>
          <div className="space-x-4">
            <a
              href="#membership"
              className="bg-oceanBlue text-black px-6 py-3 rounded hover:bg-neonAqua transition duration-300"
            >
              Join Now
            </a>
            <a
              href="#contact"
              className="bg-steelGray text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <aside className="hidden md:flex items-center justify-center">
        <img src={hero} alt="hero" className="h-10/12" />
      </aside>
    </div>
  );
};

export default Home;
