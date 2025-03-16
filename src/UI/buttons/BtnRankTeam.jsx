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
        className="bg-blue-950 text-white rounded-lg my-4 p-2 cursor-pointer mx-2"
      >
        <div className="flex items-center justify-center">
          <FontAwesomeIcon icon={icon} className="mx-2" />
          <h2 className="text-xs">{text}</h2>
        </div>
      </button>
    </>
  );
};

export default BtnRankTeam;
