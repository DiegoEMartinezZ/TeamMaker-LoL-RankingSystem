import Quote from "./Quote";

const TitleGeneralRanking = ({ title, text }) => {
  return (
    <>
      <Quote text={title} />
      <h1 className=" text-white text-lg font-semibold">{text}</h1>
      <div className="w-full rounded-br-xl py-1 my-1 h-2  bg-blue-900"></div>
    </>
  );
};

export default TitleGeneralRanking;
