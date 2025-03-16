import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeam } from "../../components/context/TeamContext";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BtnCreateTeam = () => {
  const { finalTeamHandler } = useTeam();
  return (
    <>
      <FontAwesomeIcon
        icon={faCheck}
        className="text-white"
        onClick={finalTeamHandler}
      />
    </>
  );
};

export default BtnCreateTeam;
