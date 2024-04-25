import React from "react";

const GameDev = () => {
  return (
    <div className="lg:py-[6rem] py-[4rem]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-0 gap-y-10 items-center ">
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src="./assists/onboard.png"
            className="lg:w-[550px] w-[90%]"
            alt=""
          />
        </div>
        <div className="lg:px-8 px-2 ">
          <h2 className="lg:text-[48px]  text-[28px] font-bold ">
            Game Development
          </h2>
          <p className="text-[22px] lg:text-[25px] mt-3 text-justify">
            APakistan is not only recognized as one of the top 10 countries for
            game development, but it also serves as a hub for creative and
            technical talent, pushing the boundaries of digital entertainment.
            Creating a game is no less than crafting a masterpiece; it requires
            passion, imagination, and advanced technical skills. Our game
            developers are not just developers, they are architects of vibrant,
            virtual worlds, pioneering the future of gaming. We are committed to
            delivering high-quality, engaging content to gamers across the
            globe. One Pixel at a Time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDev;
