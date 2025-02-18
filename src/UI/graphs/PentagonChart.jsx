const PentagonChart = ({}) => {
  return (
    <div className="relative  my-6 w-52 h-52 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="absolute w-full h-full">
        <polygon
          points="50,5 95,35 80,90 20,90 5,35"
          className="fill-blue-900 stroke-white stroke-[2]"
        />
        {/* Lines to center */}
        <line
          x1="50"
          y1="5"
          x2="50"
          y2="50"
          className="stroke-white stroke-[1]"
        />
        <line
          x1="95"
          y1="35"
          x2="50"
          y2="50"
          className="stroke-white stroke-[1]"
        />
        <line
          x1="80"
          y1="90"
          x2="50"
          y2="50"
          className="stroke-white stroke-[1]"
        />
        <line
          x1="20"
          y1="90"
          x2="50"
          y2="50"
          className="stroke-white stroke-[1]"
        />
        <line
          x1="5"
          y1="35"
          x2="50"
          y2="50"
          className="stroke-white stroke-[1]"
        />
      </svg>

      {/* Labels */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white text-sm">
        Farming
      </div>
      <div className="absolute top-1/4 -right-12 text-white text-sm">
        Roaming
      </div>
      <div className="absolute -bottom-2 right-1 text-white text-sm">
        Objectives
      </div>
      <div className="absolute -bottom-2 left-1 text-white text-sm">Vision</div>
      <div className="absolute top-1/4 -left-6 text-white text-sm">KDA</div>
    </div>
  );
};

export default PentagonChart;
