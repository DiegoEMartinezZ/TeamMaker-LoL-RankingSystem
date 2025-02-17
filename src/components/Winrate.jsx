const Winrate = ({ porcentage }) => {
  return (
    <>
      <div className="text-right mb-4 font-bold">
        <h1 className="text-white text-base font-light ">Winrate</h1>
        <h1 className="text-white text-2xl -my-2 mb-5">{porcentage}</h1>
      </div>
    </>
  );
};

export default Winrate;
