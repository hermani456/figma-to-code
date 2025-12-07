const Services = () => {
  const cardItems = [
    {
      title: "Search doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      icon: "/search.png",
    },
    {
      title: "Online pharmacy",
      description:
        "Buy  your medicines with our mobile application with a simple delivery system",
      icon: "/pharmacy.png",
    },
    {
      title: "Consultation",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
      icon: "/consultation.png",
    },
    {
      title: "Details info",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
      icon: "/details.png",
    },
    {
      title: "Emergency care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
      icon: "/emergency.png",
    },
    {
      title: "Tracking",
      description: "Track and save your medical history and health data",
      icon: "/tracking.png",
    },
  ];
  return (
    <section aria-label="Services section" className="relative">
      <div className="w-full max-w-[1217px] mx-auto px-6 mt-48">
        <div>
          <h2 className="font-mulish font-bold text-4xl leading-14 text-center tracking-normal">
            Our services
          </h2>
          <div className="w-14 h-0.5 rounded-[5px] bg-black mx-auto mt-[26px]"></div>
          <p className="font-mulish font-light text-lg leading-[30px] tracking-normal text-center max-w-[952px] mx-auto mt-[33px] text-[#7D7987] relative z-20">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="mt-20">
          <img
            src="/vector.png"
            alt=""
            className="absolute left-0 top-[220px]"
          />
          <img
            src="/element2.png"
            alt=""
            className="absolute right-84 bottom-110"
          />
          <div className="flex justify-center relative flex-wrap gap-[34px]">
            {/* cards */}
            {cardItems.map((item) => (
              <div
                key={item.title}
                className="w-[350px] h-[354px] rounded-[20px] shadow-[10px_40px_50px_0px_#E5E9F666] py-[54px] pl-[37px] bg-white"
              >
                <div className="h-[95px]">
                  <img src={item.icon} alt="" className="" />
                </div>
                <h3 className="font-mulish font-bold text-2xl leading-14 tracking-normal mt-6">
                  {item.title}
                </h3>
                <p className="font-mulish font-light text-base leading-7 tracking-normal w-[266px] text-[#7D7987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button className="w-[200px] h-14 rounded-[55px] border-[1.4px] border-[#458FF6] text-[#458FF6] flex items-center justify-center mx-auto mt-[72px] hover:bg-[#458FF6] hover:text-white transition-colors duration-200">
          <span className="font-mulish font-bold text-lg leading-[60px] tracking-normal">
            Learn more
          </span>
        </button>
      </div>
    </section>
  );
};

export default Services;
