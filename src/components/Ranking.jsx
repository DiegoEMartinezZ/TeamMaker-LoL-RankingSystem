import TitleGeneralRanking from "../UI/text/TitleGeneralRanking";

const Ranking = ({ teamName, tier }) => {
  return (
    <>
      <div>
        <section>
          <TitleGeneralRanking name={teamName} />
          <h1 className="text-9xl font-bold text-white"> {tier} </h1>
        </section>
      </div>
    </>
  );
};

export default Ranking;
