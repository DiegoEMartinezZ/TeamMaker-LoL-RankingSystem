import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const BtnRankTeam = ({ text, icon, page }) => {
  const navigate = useNavigate();

  const handleGoToPage = () => {
    navigate(page);
  };

  return (
    <>
      <button
        onClick={handleGoToPage}
        className="bg-blue-950 text-white rounded-lg py-2 w-32 cursor-pointer mx-2"
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className="mx-2" />
          <h2>{text}</h2>
        </div>
      </button>
    </>
  );
};

export default BtnRankTeam;
