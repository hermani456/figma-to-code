const Section = () => {
  return (
    <section aria-label="Section component" className="mt-[220px] p-2 lg:p-0">
      <div className="max-w-[1273px] min-h-[477px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <img
          src="/ilustration.png"
          alt=""
          className="w-[80%] lg:max-w-[650px] lg:max-h-[477px]"
        />
        <div className="max-w-[486px] min-h-[388px]">
          <h2 className="font-mulish font-bold text-4xl leading-14 tracking-normal mb-[26px]">
            Leading healthcare providers
          </h2>
          <div className="w-14 h-0.5 bg-black mb-[31px]"></div>
          <p className="font-mulish font-light text-lg leading-[30px] tracking-normal max-w-[410px] mb-[37px] text-[#7D7987]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="w-[200px] h-14 rounded-[55px] border-[1.4px] border-[#458FF6] flex items-center text-[#458FF6] justify-center hover:bg-[#458FF6] hover:text-white transition-colors duration-200">
            <span className="font-mulish font-bold text-lg leading-[60px] tracking-normal">
              Learn more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
