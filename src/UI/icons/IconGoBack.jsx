import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const IconGoBack = ({ page }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(page);
  };

  return (
    <>
      <button
        onClick={goBack}
        className="absolute top-4 left-0 mx-4 text-white"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </>
  );
};

export default IconGoBack;
