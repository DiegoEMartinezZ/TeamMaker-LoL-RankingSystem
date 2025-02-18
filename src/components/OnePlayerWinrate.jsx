const OnePlayerWinrate = ({ winrate }) => {
  return (
    <>
      <li className="mx-2">
        <h1 className="text-xs font-bold"> Winrate </h1>
        <h1 className="text-xs"> {winrate} </h1>
      </li>
    </>
  );
};

export default OnePlayerWinrate;
