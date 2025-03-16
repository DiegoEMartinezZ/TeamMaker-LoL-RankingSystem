import { createContext, useContext, useState } from "react";

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamComplete, setTeamComplete] = useState(false);
  const [addSummoner, setAddSummoner] = useState({
    region: "",
    summonersName: "",
  });
  const [arraySummoners, setArraySummoners] = useState([]);

  const finalTeamHandler = () => {
    setTeamComplete(true);
  };

  const submitSummoner = (e) => {
    e.preventDefault();
    setArraySummoners([...arraySummoners, addSummoner]);
    setAddSummoner({ region: "", summonersName: "" });
  };

  const onChangeSummonerData = (e) => {
    const { name, value } = e.target;
    setAddSummoner((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const restartTeamSelection = () => {
    setArraySummoners([]);
  };

  return (
    <TeamContext.Provider
      value={{
        restartTeamSelection,
        arraySummoners,
        addSummoner,
        onChangeSummonerData,
        submitSummoner,
        finalTeamHandler,
        teamComplete,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);
