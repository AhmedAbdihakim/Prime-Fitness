const Contact = () => {
  return (
    <div className="min-h-screen w-screen p-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-oceanBlue text-5xl pb-8 font-bold text-center">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
            <p>Email: info@primefitness.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>

          <div className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Location</h2>
            <p>123 Main Street</p>
            <p>City, State, Zip Code</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Send us a message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-oceanBlue text-white px-6 py-3 rounded-md hover:bg-neonAqua transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
