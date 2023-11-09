const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[8%]">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="">
        <button className="hidden md:inline-block mx-2  bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
