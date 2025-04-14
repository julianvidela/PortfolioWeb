const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 ">
      <div className="absolute w-full h-full flex justify-center items-center -z-10">
        <div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[75px] lg:blur-[100px] bg-[radial-gradient(circle,rgba(255,255,255,0.185),transparent)] top-[20%] left-[1%]"
        ></div>
        <div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[75px] lg:blur-[100px] bg-[radial-gradient(circle,rgba(140,0,255,0.185),transparent)] bottom-[10%] left-[20%]"
        ></div>
        <div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[75px] lg:blur-[100px] bg-[radial-gradient(circle,rgba(153,99,189,0.13),transparent)] bottom-[1%] right-[30%]"
        ></div>
        <div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-[50px] sm:blur-[75px] lg:blur-[100px] bg-[radial-gradient(circle,rgba(183,0,255,0.6),transparent)] top-[10%] right-[3%]"
        ></div>
      </div>
    </div>
  );
};

export default Background;