const Navbar = () => {
  const navLinks = [
    "Home",
    "Find a doctor",
    "Apps",
    "Testimonials",
    "About us",
  ];
  return (
    <header className="w-full max-w-[1217px] mx-auto pt-14 pl-6 pr-10">
      <nav className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="size-[41px] bg-[#458FF6] rounded-full flex justify-center items-center font-bold font-mulish text-[24px] leading-none tracking-normal text-white">
            T
          </div>
          <span className="font-mulish text-[#233348] font-bold text-2xl leading-none tracking-normal">
            Trafalgar
          </span>
        </div>
        <ul className="flex gap-8 items-center text-[#1F1534]">
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
    </header>
  );
};

export default Navbar;
