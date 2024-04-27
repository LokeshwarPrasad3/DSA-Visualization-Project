const MainViewPort = () => {
  return (
    <div className="bg-gray-950 h-full flex justify-center font-mont items-center">
      <div className="main_content_container bg-gray-950 pt-40 shadow-blue-400 rounded-lg p-8">
        <div className="main_title_description flex-3 flex-col">
          <h2 className=" flex-3 flex-col gap-6 md:text-5xl lg:text-6xl text-center font-bold text-gray-200 mb-4">
            <h2 className="text-[3rem] md:text-[4rem]">
              Transform Your DSA Learning
            </h2>
            <span className="text-[3rem] md:text-[4rem] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Through Visualization
            </span>
          </h2>
          <p className="text-xl mt-[1.5rem] w-[80%] text-gray-300 text-center">
            Experience a transformative approach to DSA learning through
            immersive visualizations, simplifying intricate concepts for deeper
            comprehension and mastery
          </p>
        </div>
        <div className="button_container flex justify-center mt-16">
          <button className="bg-transparent border border-slate-300 text-blue-500 px-6 py-2 rounded-md mr-4 hover:bg-slate-900 hover:text-white focus:outline-none">
            GitHub Code
          </button>
          <button className="bg-transparent border border-slate-300 text-blue-500 px-6 py-2 rounded-md hover:bg-slate-900 hover:text-white focus:outline-none">
            Creator
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainViewPort;
