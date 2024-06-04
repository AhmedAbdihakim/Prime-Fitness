import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ isNavOpen, handleNavOpen }) => {
  return (
    <nav className="p-4 w-screen flex justify-center">
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#home" className="hover:text-neonAqua">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-neonAqua">
            About
          </a>
        </li>
        <li>
          <a href="#classes" className="hover:text-neonAqua">
            Classes
          </a>
        </li>
        <li>
          <a href="#membership" className="hover:text-neonAqua">
            Membership
          </a>
        </li>
        <li>
          <a href="#trainers" className="hover:text-neonAqua">
            Trainers
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-neonAqua">
            Contact
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-neonAqua">
            Gallery
          </a>
        </li>
      </ul>
      <button
        className="md:hidden absolute top-8 text-3xl text-white"
        onClick={handleNavOpen}
      >
        {isNavOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </button>
      {isNavOpen ? (
        <div className="w-screen min-h-screen flex justify-center pt-16">
          <ul className="flex flex-col sm:hidden space-y-8 absolute text-3xl">
            <li>
              <a
                href="#home"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#membership"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="#trainers"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                Trainers
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className="hover:text-neonAqua"
                onClick={handleNavOpen}
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
