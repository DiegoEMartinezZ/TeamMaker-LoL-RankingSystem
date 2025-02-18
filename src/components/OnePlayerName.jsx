const OnePlayerName = ({ alias, player }) => {
  return (
    <>
      <li className="mx-2">
        <h1 className="text-xs font-bold">{alias}</h1>
        <h1 className="text-xs"> {player} </h1>
      </li>
    </>
  );
};

export default OnePlayerName;
