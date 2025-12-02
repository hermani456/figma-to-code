const Section2 = () => {
  return (
    <section aria-label="Section component" className="mt-[220px] pl-[280px]">
      <div className="w-[1273px] h-[477px] mx-auto flex flex-row-reverse items-center justify-between">
        <img src="/ilustration2.png" alt="" className="w-[650px] h-[477px]" />
        <div className="w-[486px] h-[388px]">
          <h2 className="font-mulish font-bold text-4xl leading-14 tracking-normal mb-[26px] w-[254px]">
            Download our mobile apps
          </h2>
          <div className="w-14 h-0.5 bg-black mb-[31px]"></div>
          <p className="font-mulish font-light text-lg leading-[30px] tracking-normal w-[410px] mb-[37px] text-[#7D7987]">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="w-[200px] h-14 rounded-[55px] border-[1.4px] border-[#458FF6] flex items-center justify-center gap-[15px] hover:bg-[#458FF6] hover:text-white transition-colors duration-200">
            <span className="font-mulish font-bold text-lg leading-[60px] tracking-normal text-[#458FF6]">
              Download
            </span>
            <img src="/arrow.svg" alt="" className="h-[15.4px] w-[9.8px]"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
