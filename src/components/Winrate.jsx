const Winrate = ({ porcentage }) => {
  return (
    <>
      <div className="text-right mb-4 font-bold">
        <h1 className="text-white text-xl ">Winrate</h1>
        <h1 className="text-white text-5xl">{porcentage}</h1>
      </div>
    </>
  );
};

export default Winrate;
