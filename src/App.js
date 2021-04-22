import React, { useState } from "react";
import "./App.css";

import TeamsCard from "./components/TeamsCard";
import TopCard from "./components/TopCard";
import CreateCard from "./components/CreateCard";

const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [teams, setTeams] = useState([]);
  const [editID, seteditID] = useState();

  return (
    <>
      <header className="header">
        <div className="project">Squad Management Tool</div>
        <div className="user">
          Alexandre Toito
          <div className="initials">AT</div>
        </div>
      </header>
      {showCreate && (
        <CreateCard
          setShowCreate={setShowCreate}
          teams={teams}
          editID={editID}
        />
      )}
      {!showCreate && (
        <div className="container">
          <TeamsCard
            teams={teams}
            setTeams={setTeams}
            setShowCreate={setShowCreate}
            seteditID={seteditID}
          />
          <TopCard />
        </div>
      )}
      <footer className="footer">2021 - All rights reserved</footer>
    </>
  );
};

export default App;
