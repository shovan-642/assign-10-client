import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-[425px] h-[300px] md:w-[768px] md:h-[300px] lg:w-[1366px] lg:h-[500px]">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co.com/9m3Zbz55/banner-1.jpg"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-8 left-[80px] md:left-[100px] lg:left-[500px] lg:top-[150px] flex flex-col gap-3">
            <h1 className=" text-white font-bold text-5xl text-center">
              Unlimited movies,
              <br /> TV shows, and more
            </h1>
            <p className="text-white text-2xl hidden lg:block font-bold  ">
              Starts at USD 9.99. Cancel anytime.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle bg-red-600">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-red-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co.com/pjh57XVq/dplus-lob-mas-dsk-06.jpg"
            className="w-full object-cover"
          />
          <div className="absolute top-8 left-[80px] md:left-[100px] lg:left-[100] lg:top-[150px] flex flex-col gap-3">
            <h1 className=" text-white font-bold text-5xl ">Movies</h1>
            <p className="text-white text-base hidden lg:block font-bold  ">
              Journey into the cosmic depths of the mighty Cineflix Universe!
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle bg-red-600">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-red-600">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co.com/fGQmsSnX/daredevilbornagain-lob-mas-min-dsk-01.jpg"
            className="w-full object-cover"
          />
          <div className="absolute top-8 left-[80px] md:left-[100px] lg:left-[100] lg:top-[150px] flex flex-col gap-3">
            <h1 className=" text-white font-bold text-5xl text-center">
              CineFlix Rivals Official Launch Date
            </h1>
            <p className="text-white text-2xl hidden lg:block font-bold  ">
              The Intergalactic Empire of Wakanda is in danger!
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle bg-red-600">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-red-600">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default Banner;
