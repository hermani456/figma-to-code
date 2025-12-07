const Footer = () => {
  return (
    <footer>
      <div className="bg-[linear-gradient(183.41deg,#67C3F3_-8.57%,#5A98F2_82.96%)] h-auto lg:h-[432px] relative overflow-hidden py-12 px-6 lg:py-0 lg:px-0">
        <img
          src="/element3.png"
          alt=""
          className="hidden lg:block absolute -bottom-4 -left-4"
        />

        <div className="max-w-[1220px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center h-auto lg:h-full gap-10 lg:gap-0">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <div className="size-[41px] bg-white rounded-full flex justify-center items-center">
                <span className="font-mulish font-bold text-[24px] leading-none tracking-normal bg-[linear-gradient(183.41deg,#67C3F3_-8.57%,#5A98F2_82.96%)] bg-clip-text text-transparent">
                  T
                </span>
              </div>
              <span className="font-mulish text-white font-bold text-2xl leading-none tracking-normal">
                Trafalgar
              </span>
            </div>

            <div className="w-full lg:w-[391px] h-auto mt-4 mb-8 lg:mt-[17px] lg:mb-[31px]">
              <p className="font-mulish font-light text-base lg:text-lg leading-7 tracking-normal text-white">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
            </div>

            <div>
              <p className="font-mulish font-light text-base lg:text-lg leading-7 tracking-normal text-white">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto grid grid-cols-2 gap-8 lg:flex lg:gap-20">
            <div>
              <h3 className="font-mulish font-bold text-xl leading-loose lg:leading-[60px] tracking-normal text-white">
                Company
              </h3>
              <ul>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  About
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Testimonials
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Find a doctor
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Apps
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mulish font-bold text-xl leading-loose lg:leading-[60px] tracking-normal text-white">
                Region
              </h3>
              <ul>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Indonesia
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Singapore
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Hongkong
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Canada
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mulish font-bold text-xl leading-loose lg:leading-[60px] tracking-normal text-white">
                Help
              </h3>
              <ul>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Help center
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Contact support
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  Instructions
                </li>
                <li className="font-mulish font-light text-base lg:text-lg leading-9 lg:leading-[38px] tracking-normal text-white cursor-pointer hover:font-bold transition-all">
                  How it works
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
