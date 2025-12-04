const Footer = () => {
  return (
    <footer>
      <div className="bg-[linear-gradient(183.41deg,#67C3F3_-8.57%,#5A98F2_82.96%)] h-[432px] relative overflow-hidden">
        <img src="/element3.png" alt="" className="absolute -bottom-4 -left-4"/>
        <div className="w-[1220px] mx-auto flex justify-between items-center h-full">
          <div>
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
            <div className="w-[391px] h-[84px] mt-[17px] mb-[31px]">
              <p className="font-mulish font-light text-lg leading-7 tracking-normal text-white">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
            </div>
            <div>
              <p className="font-mulish font-light text-lg leading-7 tracking-normal text-white">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-mulish font-bold text-xl leading-[60px] tracking-normal text-white">
              Company
            </h3>
            <ul>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                About
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Testimonials
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Find a doctor
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Apps
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mulish font-bold text-xl leading-[60px] tracking-normal text-white">
              Region
            </h3>
            <ul>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Indonesia
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Singapore
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Hongkong
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Canada
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-mulish font-bold text-xl leading-[60px] tracking-normal text-white">
              Help
            </h3>
            <ul>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Help center
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Contact support
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                Instructions
              </li>
              <li className="font-mulish font-light text-lg leading-[38px] tracking-normal text-white cursor-pointer">
                How it works
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
