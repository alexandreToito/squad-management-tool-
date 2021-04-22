import React, { useState } from "react";

import "./createCard.css";

const CreateCard = ({ setShowCreate, teams, editID }) => {
  const [playersResult, setPlayersResult] = useState([]);

  let myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "1590c300ff39e1ef1c44daf17ff23886");
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

  const handleValue = field => {
    if (editID) {
      return teams[editID][field];
    } else {
      return teams[teams.length - 1][field];
    }
  };

  const handleCheckedReal = () => {
    switch (true) {
      case editID && teams[editID].type === "real":
        return true;
      case teams[teams.length - 1].type === "real":
        return true;
      default:
        return false;
    }
  };

  const handleCheckedFantasy = () => {
    switch (true) {
      case editID && teams[editID].type === "fantasy":
        return true;
      case teams[teams.length - 1].type === "fantasy":
        return true;
      default:
        return false;
    }
  };

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  async function getPlayer(player) {
    try {
      if (player.length >= 4) {
        await fetch(
          `https://v3.football.api-sports.io/players?search=${player}&league=39`,
          requestOptions
        )
          .then(response => response.json())
          .then(players => {
            const data = players.response.map(e => ({
              name: e.player.name,
              age: e.player.age,
              nationality: e.player.nationality,
            }));
            setPlayersResult(data);
          });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="create-container">
        <div className="team-information">
          <h2>Create your team</h2>
          <hr className="solid" />

          <p>TEAM INFORMATION</p>

          <div className="information-inputs-1">
            <form className="form">
              <label className="team-label" htmlFor="name">
                Team Name
              </label>
              <br />
              <input
                className="team-name"
                id="name"
                placeholder="Insert team name"
                onChange={e => {
                  if (editID) {
                    teams[editID].name = e.target.value;
                  } else {
                    teams[teams.length - 1].name = e.target.value;
                  }
                }}
                defaultValue={handleValue("name")}
              />
            </form>

            <form>
              <label htmlFor="website">Team Website</label>
              <br />
              <input
                className="team-website"
                id="website"
                placeholder="https://myteam.com"
                onChange={e => {
                  if (editID) {
                    teams[editID].website = e.target.value;
                  } else {
                    teams[teams.length - 1].website = e.target.value;
                  }
                }}
                defaultValue={handleValue("website")}
              />
            </form>
          </div>

          <div className="information-inputs-2">
            <form>
              <label htmlFor="description">Description</label>
              <br />
              <textarea
                className="team-description"
                id="description"
                rows={11}
                cols={50}
                onChange={e => {
                  if (editID) {
                    teams[editID].description = e.target.value;
                  } else {
                    teams[teams.length - 1].description = e.target.value;
                  }
                }}
                defaultValue={handleValue("description")}
              />
            </form>
            <div className="team-type">
              <form>
                <label className="team-type-label" htmlFor="type">
                  Team Type
                </label>
                <br />
                <br />
                <input
                  className="team-type"
                  type="radio"
                  name="type"
                  id="type"
                  value="real"
                  onChange={e => {
                    if (editID) {
                      teams[editID].type = e.target.value;
                    } else {
                      teams[teams.length - 1].type = e.target.value;
                    }
                  }}
                  checked={handleCheckedReal()}
                />
                <span>Real</span>
                <input
                  className="team-type"
                  type="radio"
                  name="type"
                  id="type"
                  value="fantasy"
                  onChange={e => {
                    if (editID) {
                      teams[editID].type = e.target.value;
                    } else {
                      teams[teams.length - 1].type = e.target.value;
                    }
                  }}
                  checked={handleCheckedFantasy()}
                />
                <span>Fantasy</span>
              </form>
              <br />
              <form>
                <label className="team-type-tags" htmlFor="tags">
                  Tags
                </label>
                <br />
                <textarea
                  className="tags"
                  rows={6}
                  cols={50}
                  id="tags"
                ></textarea>
              </form>
            </div>
          </div>
        </div>

        <div className="configure-squad">
          <p>CONFIGURE SQUAD</p>

          <div className="formation">
            <div className="formation-select">
              <label htmlFor="formation">Formation</label>
              <select
                name="formation"
                id="formation"
                onChange={e => {
                  if (editID) {
                    teams[editID].formation = e.target.value;
                  } else {
                    teams[teams.length - 1].formation = e.target.value;
                  }
                }}
                defaultValue={handleValue("type")}
              >
                <option value="default">Select</option>
                <option value="three-two-two-three">3 - 2 - 2 - 3</option>
                <option value="three-two-three-one">3 - 2 - 3 - 1</option>
                <option value="three-four-three">3 - 4 - 3</option>
                <option value="three-five-two">3 - 5 - 2</option>
                <option value="four-two-three-one">4 - 2 - 3 - 1</option>
                <option value="four-three-one-one">4 - 3 - 1 - 1</option>
                <option value="four-three-two">4 - 3 - 2</option>
                <option value="four-four-two">4 - 4 - 2</option>
                <option value="four-five-one">4 - 5 - 1</option>
                <option value="five-four-one">5 - 4 -1</option>
              </select>{" "}
              <div className="formation-field" />
              <button
                className="formation-field-save"
                onClick={() => setShowCreate(false)}
              >
                Save
              </button>
            </div>
            <div className="formation-search">
              <form className="form">
                <label htmlFor="search">Search Player</label>
                <br />
                <input
                  className="formation-search-input"
                  id="search"
                  placeholder="Insert players name"
                  onChange={e => getPlayer(e.target.value)}
                />
              </form>
              {playersResult
                ? playersResult.map((e, idx) => (
                    <div id={idx} className="formation-search-players">
                      <div className="formation-search-players-name-age">
                        <div className="formation-search-players-name">
                          <p>Name:</p>
                          <p className="p-name">{e.name}</p>
                        </div>
                        <div className="formation-search-players-age">
                          <p>Age:</p>
                          <p className="p-age">{e.age}</p>
                        </div>
                      </div>
                      <div className="formation-search-players-nationality">
                        <p>Nationality:</p>
                        <p className="p-nationality">{e.nationality}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
