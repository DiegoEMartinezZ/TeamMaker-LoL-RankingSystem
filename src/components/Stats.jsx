const Stats = ({ data, info }) => {
  return (
    <>
      <li className="text-right">
        <h1 className="text-white text-sm">{data}</h1>
        <h1 className="text-white text-lg -my-1">{info}</h1>
      </li>
    </>
  );
};

export default Stats;
