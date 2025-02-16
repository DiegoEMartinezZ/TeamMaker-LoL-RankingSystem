import Quote from "../UI/text/Quote";

const PlayerRanking = ({ teamName }) => {
  return (
    <>
      <section className="mt-10">
        <Quote text={"Player Ranking"} />
        <h1 className=" text-white text-xl font-bold">{teamName}</h1>
        <div className="rounded-br-xl py-1 my-1 h-2 bg-blue-900"></div>
      </section>
    </>
  );
};

export default PlayerRanking;
