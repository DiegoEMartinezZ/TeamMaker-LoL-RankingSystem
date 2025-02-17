import Quote from "./Quote";

const TitleGeneralRanking = ({ name }) => {
  return (
    <>
      <Quote text={"General Ranking"} />
      <h1 className=" text-white text-lg font-semibold">{name}</h1>
      <div className="w-full rounded-br-xl py-1 my-1 h-2  bg-blue-900"></div>
    </>
  );
};

export default TitleGeneralRanking;
