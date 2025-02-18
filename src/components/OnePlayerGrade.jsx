const OnePlayerGrade = ({ grade }) => {
  return (
    <>
      <li className="mx-2">
        <h1 className="text-xs font-bold"> Grade </h1>
        <h1 className="text-xs"> {grade} </h1>
      </li>
    </>
  );
};

export default OnePlayerGrade;
