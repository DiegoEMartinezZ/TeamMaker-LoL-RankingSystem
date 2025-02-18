const OnePlayerRole = ({ mainRole }) => {
  return (
    <>
      <li className="mx-2">
        <h1 className="text-xs font-bold"> Role </h1>
        <h1 className="text-xs"> {mainRole} </h1>
      </li>
    </>
  );
};

export default OnePlayerRole;
