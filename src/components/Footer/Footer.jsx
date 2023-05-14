import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-600">
      <footer className="bg-gray-600 py-12 rounded-full mt-8 font-mono">
        <div className="container mx-auto flex flex-wrap justify-center gap-96">
          <div className="footer-section">
            <h3 className="text-white font-bold text-2xl mb-4">Services</h3>
            <ul>
              <li>
                <Link to="/" className="text-white text-lg font-semibold">
                  order processing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  working mendatory
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  time management
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-white text-2xl font-bold mb-4">Company</h3>
            <ul>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Our story
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Locations
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="text-white text-2xl md:mr-24 font-bold mb-4">
              Legal
            </h3>
            <ul>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Shiping Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-lg font-semibold">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto flex justify-center items-center mt-8 gap-8 md:gap-[750px]">
          <div className="text-white">
            <p className="text-sm font-bold">
              Company Name | Oreo Hospital
            </p>
          </div>
          <div className="text-white flex space-x-4">
            <div>
              <FaFacebook className="text-white ms-6 md:ms-6  cursor-pointer" />
              <Link to="/" className="text-white  cursor-pointer">
                Facebook
              </Link>
            </div>
            <div>
              <FaTwitter className="text-white ms-6 md:ms-6  cursor-pointer" />
              <Link to="/" className="text-white  cursor-pointer">
                Twitter
              </Link>
            </div>
            <div>
              <FaInstagram className="text-white ms-6 md:ms-6  cursor-pointer" />
              <Link to="/" className="text-white cursor-pointer">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-center text-white">
          © 2023 Oreo Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
export default Footer;
