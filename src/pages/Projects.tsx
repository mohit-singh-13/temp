import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="h-full w-full relative text-white">
      <h2 className="text-center text-[3rem] py-[2.5rem]">Projects</h2>

      <div className="w-[90%] mx-auto slider-container relative">
        <Slider {...settings}>
          <div className="bg-[#D9D9D9] rounded-[6rem] h-[28rem] w-[23.8rem] border-[4px] border-blue-500"></div>

          <div className="bg-[#D9D9D9] rounded-[6rem] h-[28rem] w-[23.8rem] border-[4px] border-green-500"></div>

          <div className="bg-[#D9D9D9] rounded-[6rem] h-[28rem] w-[23.8rem] border-[4px] border-yellow-500"></div>

          <div className="bg-[#D9D9D9] rounded-[6rem] h-[28rem] w-[23.8rem] border-[4px] border-black"></div>
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
