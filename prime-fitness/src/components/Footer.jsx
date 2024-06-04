import React from "react";

const Footer = () => {
  return (
    <footer className="  p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Prime Fitness</h2>
          <p>123 Fitness Ave, Wellness City, ST 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@primefitness.com</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul>
            <li>
              <a href="#classes" className="hover:underline">
                Classes
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          &copy; {new Date().getFullYear()} Prime Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
