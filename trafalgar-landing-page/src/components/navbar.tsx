import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "Find a doctor",
    "Apps",
    "Testimonials",
    "About us",
  ];

  return (
    <header className="w-full max-w-[1217px] mx-auto pt-6 px-4 lg:pt-14 lg:pl-6 lg:pr-10 relative z-50">
      <nav className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="size-[41px] bg-[#458FF6] rounded-full flex justify-center items-center font-bold font-mulish text-[24px] leading-none tracking-normal text-white">
            T
          </div>
          <span className="font-mulish text-[#233348] font-bold text-2xl leading-none tracking-normal">
            Trafalgar
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#233348] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <ul className="hidden lg:flex gap-8 items-center text-[#1F1534]">
          {navLinks.map((link) => (
            <li
              key={link}
              className="font-mulish font-normal hover:[text-shadow:0_0_1px_currentColor] text-lg leading-none tracking-normal cursor-pointer text-[#233348] opacity-50 hover:opacity-100 transition-all duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl lg:hidden flex flex-col items-center py-6 space-y-6 mt-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-mulish font-bold text-lg text-[#233348] hover:text-[#458FF6] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
