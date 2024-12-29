import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm">
              We are an innovative music ed-tech platform helping students and
              professionals excel in their musical journeys with cutting-edge
              tools and personalized learning paths.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li>support@music-edtech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                <address className="not-italic">
                  123 Harmony Lane, Music City, 56789
                </address>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 21h4m-4-4h4m4-4H8m4 4V8a4 4 0 00-4-4H4m16 16h4M4 21H0m4-4H0m0 0h4m0 0H0m0 0h4m0 0H0m0 0h4"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 21h4m-4-4h4m4-4H8m4 4V8a4 4 0 00-4-4H4m16 16h4M4 21H0m4-4H0m0 0h4m0 0H0m0 0h4m0 0H0m0 0h4"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 21h4m-4-4h4m4-4H8m4 4V8a4 4 0 00-4-4H4m16 16h4M4 21H0m4-4H0m0 0h4m0 0H0m0 0h4m0 0H0m0 0h4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Music EdTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
