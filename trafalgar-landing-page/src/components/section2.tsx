const Section2 = () => {
  return (
    <section
      aria-label="Section component"
      className="mt-[220px] lg:pl-[280px] p-2 lg:p-0"
    >
      <div className="max-w-[1273px] min-h-[477px] mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10">
        <img
          src="/ilustration2.png"
          alt=""
          className="w-[80%] lg:max-w-[650px] lg:max-h-[477px]"
        />
        <div className="max-w-[486px] min-h-[388px]">
          <h2 className="font-mulish font-bold text-4xl leading-14 tracking-normal mb-[26px] w-[254px]">
            Download our mobile apps
          </h2>
          <div className="w-14 h-0.5 bg-black mb-[31px]"></div>
          <p className="font-mulish font-light text-lg leading-[30px] tracking-normal max-w-[410px] mb-[37px] text-[#7D7987]">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="group w-[200px] h-14 rounded-[55px] border-[1.4px] border-[#458FF6] text-[#458FF6] flex items-center justify-center gap-[15px] hover:bg-[#458FF6] hover:text-white transition-colors duration-200">
            <span className="font-mulish font-bold text-lg leading-[60px] tracking-normal">
              Download
            </span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#458FF6] transition-colors duration-200 group-hover:fill-white"
            >
              <path d="M4.0338 0.876829L4.0338 12.4521L1.49075 9.90904C1.13999 9.55827 0.613839 9.55827 0.263074 9.90904C-0.0876916 10.2598 -0.0876915 10.786 0.263074 11.1367L4.29688 15.1705C4.64764 15.5213 5.17379 15.5213 5.52455 15.1705L9.55836 11.1367C9.90912 10.786 9.90912 10.2598 9.55836 9.90904C9.20759 9.55827 8.68144 9.55827 8.33068 9.90904L5.78763 12.4521L5.78763 0.876829C5.78763 0.438372 5.43686 -8.4161e-05 4.91071 -8.4138e-05C4.38457 -8.4115e-05 4.0338 0.438372 4.0338 0.876829Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
