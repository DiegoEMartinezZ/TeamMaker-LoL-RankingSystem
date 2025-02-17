const Position = ({ rank }) => {
  return (
    <>
      <div className="rounded-full absolute left-0 -top-2 right-3 text-blue-900 bg-white h-5 w-5 flex items-center justify-center">
        <h1 className="font-bold">{rank}</h1>
      </div>
    </>
  );
};

export default Position;
