import TitleGeneralRanking from "../UI/text/TitleGeneralRanking";

const Ranking = ({ title, text, tier }) => {
  return (
    <>
      <section>
        <TitleGeneralRanking title={title} text={text} />
        <h1 className="text-9xl font-bold text-white"> {tier} </h1>
      </section>
    </>
  );
};

export default Ranking;
