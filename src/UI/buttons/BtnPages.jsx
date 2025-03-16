import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnPages = ({ icon, page, text }) => {
  return (
    <>
      <button className="bg-blue-900 py-1 px-3 my-4  flex items-center justify-center m-auto rounded-xl">
        <FontAwesomeIcon icon={icon} className="mr-1" />
        <a href={page} className="text-sm font-base">
          {text}
        </a>
      </button>
    </>
  );
};

export default BtnPages;
