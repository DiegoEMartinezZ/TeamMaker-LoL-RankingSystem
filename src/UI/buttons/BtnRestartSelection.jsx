import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTeam } from "../../components/context/TeamContext";

const BtnRestartSelection = () => {
  const { restartTeamSelection } = useTeam();
  return (
    <>
      <FontAwesomeIcon
        icon={faRedo}
        className="text-white"
        onClick={restartTeamSelection}
      />
    </>
  );
};

export default BtnRestartSelection;
