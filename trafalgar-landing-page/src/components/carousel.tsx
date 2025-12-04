const Carousel = () => {
  return (
    <div className="w-[1220px] h-[502px] flex flex-col items-center mx-auto mt-[251px] relative">
      <img src="/element.png" alt="" className="absolute bottom-20 -left-3" />
      <div className="w-[1120px] h-[425px] bg-[linear-gradient(208.18deg,#67C3F3_9.05%,#5A98F2_76.74%)] rounded-3xl relative mt-[15px]">
        <img src="/element3.png" alt="" className="absolute -right-12 -top-4" />
        <h2 className="font-mulish font-bold text-4xl leading-12 tracking-normal text-white text-center mt-16">
          What our customer are saying
        </h2>
        <div className="w-14 h-0.5 bg-white mx-auto mt-[25px]"></div>
        <div className="flex justify-center gap-[110px] mt-[77px]">
          <div className="flex items-center space-x-[29px]">
            <div className="size-[141px] rounded-full border-8 border-white overflow-hidden">
              <img
                src="/dude.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h3 className="font-mulish font-bold text-[22px] leading-11 tracking-normal">
                Edward Newgate
              </h3>
              <p className="font-mulish font-normal text-lg tracking-normal">
                Founder Circle
              </p>
            </div>
          </div>
          <div className="w-[420px] h-[120px] ">
            <p className="font-mulish font-normal text-white text-[19px] leading-[30px] tracking-normal">
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
      {/* controls */}
      <div className="flex mt-auto items-center w-[336px] mx-auto justify-between">
        {/* left arrow */}
        <div>
          <svg
            width="29"
            height="18"
            viewBox="0 0 29 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40"
          >
            <path
              d="M26.4668 7.33418L5.42092 7.33418L10.0446 2.71046C10.6824 2.0727 10.6824 1.11607 10.0446 0.478316C9.40689 -0.159439 8.45026 -0.159439 7.8125 0.478316L0.478316 7.8125C-0.159439 8.45026 -0.159439 9.40689 0.478316 10.0446L7.8125 17.3788C8.45026 18.0166 9.40689 18.0166 10.0446 17.3788C10.6824 16.7411 10.6824 15.7844 10.0446 15.1467L5.42092 10.523L26.4668 10.523C27.264 10.523 28.0612 9.88521 28.0612 8.92857C28.0612 7.97194 27.264 7.33418 26.4668 7.33418Z"
              fill="#458FF6"
            />
          </svg>
        </div>
        {/* slider */}
        <div>
          <svg
            width="94"
            height="10"
            viewBox="0 0 94 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.3" cx="33" cy="5" r="5" fill="#5B9BF3" />
            <circle opacity="0.3" cx="61" cy="5" r="5" fill="#5B9BF3" />
            <circle opacity="0.3" cx="89" cy="5" r="5" fill="#5B9BF3" />
            <circle cx="5" cy="5" r="5" fill="#5B9BF3" />
          </svg>
        </div>
        {/* right arrow */}
        <div>
          <svg
            width="29"
            height="18"
            viewBox="0 0 29 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.59438 10.523L22.6403 10.523L18.0166 15.1467C17.3788 15.7845 17.3788 16.7411 18.0166 17.3789C18.6543 18.0166 19.611 18.0166 20.2487 17.3789L27.5829 10.0447C28.2207 9.40692 28.2207 8.45029 27.5829 7.81253L20.2487 0.478349C19.611 -0.159405 18.6543 -0.159406 18.0166 0.478349C17.3788 1.11611 17.3788 2.07274 18.0166 2.71049L22.6403 7.33422L1.59438 7.33422C0.797185 7.33422 -8.67255e-06 7.97197 -8.75618e-06 8.9286C-8.83981e-06 9.88524 0.797185 10.523 1.59438 10.523Z"
              fill="#458FF6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
