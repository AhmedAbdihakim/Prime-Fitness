const About = () => {
  const thisYear = new Date().getFullYear();
  const years = thisYear - 2010;

  return (
    <div className="min-h-screen w-screen p-4 pb-8 " id="about">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-oceanBlue text-5xl pb-8 font-bold text-center">
          About Us
        </h1>
        <div>
          <p className="mb-4">
            At Prime Fitness, we're more than just a gym – we're a community
            dedicated to helping you achieve your fitness goals and live your
            healthiest, happiest life.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Our Mission
          </h2>
          <p className="mb-4">
            Our mission at Prime Fitness is to inspire and empower individuals
            of all fitness levels to reach their full potential. We believe in
            creating a welcoming and supportive environment where everyone feels
            encouraged to pursue their fitness journey with confidence.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, Prime Fitness has been a cornerstone of the local
            fitness scene for {years} years. What started as a humble vision to
            provide a space for people to prioritize their health has evolved
            into a thriving community of like-minded individuals committed to
            wellness.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Facilities & Services
          </h2>
          <p className="mb-4">
            With state-of-the-art equipment, expert-led classes, and
            personalized training programs, Prime Fitness offers everything you
            need to succeed on your fitness journey. Our facilities include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>A wide range of cardio and strength training equipment</li>
            <li>
              Dedicated spaces for group classes, including yoga, spin, and HIIT
            </li>
            <li>
              Personal training services tailored to your goals and preferences
            </li>
            <li>Nutritional guidance and wellness coaching</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Meet Our Team
          </h2>
          <p className="mb-4">
            At Prime Fitness, our team of experienced trainers and staff are
            here to support you every step of the way. From certified personal
            trainers to knowledgeable front desk staff, we're dedicated to
            providing exceptional service and expertise to our members.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Join Our Community
          </h2>
          <p className="mb-4">
            More than just a gym, Prime Fitness is a vibrant community of
            individuals united by a shared passion for health and wellness.
            Whether you're a seasoned athlete or just starting out on your
            fitness journey, you'll find a welcoming and inclusive space to
            thrive.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Success Stories
          </h2>
          <p className="mb-4">
            Don't just take our word for it – hear from our members themselves!
            Read inspiring success stories and testimonials from individuals who
            have transformed their lives through fitness at Prime Fitness.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Membership Options
          </h2>
          <p className="mb-4">
            Ready to join the Prime Fitness community? Explore our membership
            options and find the plan that best fits your needs and lifestyle.
            From flexible membership plans to special discounts for students and
            seniors, we have options for everyone.
          </p>
          <h2 className="text-xl font-semibold mb-2 text-center">Contact Us</h2>
          <p>
            Have questions or ready to get started? Reach out to our friendly
            team today! Visit us in person at [Address], give us a call at
            [Phone Number], or send us a message online. We can't wait to
            welcome you to Prime Fitness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
