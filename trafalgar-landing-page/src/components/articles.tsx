const Articles = () => {
  const cardData = [
    {
      imgSrc: "/article1.png",
      title: "Disease detection, check up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      imgSrc: "/article2.png",
      title: "Herbal medicines that are safe for consumption",
      description:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
    {
      imgSrc: "/article3.png",
      title: "Natural care for healthy facial skin",
      description:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
    },
  ];
  return (
    <section className="relative mb-[201px]">
      <img src="/vector2.png" alt="" className="absolute right-0 top-28 z-0" />
      <img
        src="/element4.png"
        alt=""
        className="absolute -bottom-61 right-60"
      />
      <div className="max-w-[1220px] mx-auto mt-[120px]">
        <h2 className="font-mulish font-bold text-4xl leading-14 tracking-normal text-black text-center mt-16">
          Check out our latest article
        </h2>
        <div className="w-14 h-0.5 bg-black mx-auto mt-[25px]"></div>
        {/* cards */}
        <div className="max-w-[1120px] mx-auto mt-20 flex flex-wrap justify-center gap-10 xl:gap-0 xl:justify-between relative z-10">
          <img
            src="/element2.png"
            alt=""
            className="absolute -left-13 -top-11"
          />
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-[350px] h-[512px] rounded-[20px] shadow-[10px_40px_50px_0px_#E5E9F666] overflow-hidden relative z-10 bg-white"
            >
              <img
                src={card.imgSrc}
                alt=""
                className="h-60 w-full object-cover"
              />
              <div className="w-[251px] h-16 ml-[33px] mt-6">
                <h4 className="font-mulish font-bold text-[21px] leading-8 tracking-normal text-left">
                  {card.title}
                </h4>
              </div>
              <div className="w-[266px] h-[84px] ml-[33px] mt-3 mb-[25px]">
                <p className="font-mulish font-light text-base text-left leading-7 tracking-normal text-[#7D7987]">
                  {card.description}
                </p>
              </div>
              <div className="flex gap-3 h-7">
                <a
                  href=""
                  className="font-mulish font-semibold text-[17px] leading-7 tracking-normal text-[#4089ED] ml-[33px]"
                >
                  Read more
                </a>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 29 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-3"
                >
                  <path
                    d="M1.59438 10.523L22.6403 10.523L18.0166 15.1467C17.3788 15.7845 17.3788 16.7411 18.0166 17.3789C18.6543 18.0166 19.611 18.0166 20.2487 17.3789L27.5829 10.0447C28.2207 9.40692 28.2207 8.45029 27.5829 7.81253L20.2487 0.478349C19.611 -0.159405 18.6543 -0.159406 18.0166 0.478349C17.3788 1.11611 17.3788 2.07274 18.0166 2.71049L22.6403 7.33422L1.59438 7.33422C0.797185 7.33422 -8.67255e-06 7.97197 -8.75618e-06 8.9286C-8.83981e-06 9.88524 0.797185 10.523 1.59438 10.523Z"
                    fill="#458FF6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <button className="w-[200px] h-14 rounded-[55px] border-[1.4px] border-[#458FF6] flex items-center text-[#458FF6] justify-center hover:bg-[#458FF6] hover:text-white transition-colors duration-200 mx-auto mt-[69px]">
          <span className="font-mulish font-bold text-lg leading-[60px] tracking-normal">
            View all
          </span>
        </button>
      </div>
    </section>
  );
};

export default Articles;
