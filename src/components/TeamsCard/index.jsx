import React from "react";
import "./teamsCard.css";

import { Table, Button } from "antd";

const TeamsCard = ({ teams, setTeams, setShowCreate, seteditID }) => {
  let initialData = {
    name: "",
    website: "",
    description: "",
    type: "",
    tags: [],
    formation: "",
    key: teams.length,
  };

  const handleDelete = key => {
    const remain = teams.filter(e => e.key !== key);
    setTeams(remain);
  };

  const handleEdit = key => {
    seteditID(key);
    setShowCreate(true);
  };

  console.log(teams);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (value, obj) => <p>{value}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (value, obj) => (
        <div className="description">
          <p>{value}</p>
          <div className="icons">
            <i
              class="fa fa-trash"
              aria-hidden="true"
              title="Delete"
              onClick={() => handleDelete(obj.key)}
            ></i>
            <i class="fa fa-share-alt" aria-hidden="true" title="Share"></i>
            <i
              class="fa fa-pencil"
              aria-hidden="true"
              title="Edit"
              onClick={() => handleEdit(obj.key)}
            ></i>
          </div>
        </div>
      ),
    },
  ];

  const data = teams.map(e => ({
    name: e.name,
    description: e.description,
    key: e.key,
  }));

  return (
    <div className="my-teams-div">
      <div className="cardHeader">
        <h2>My teams</h2>
        <Button
          className="addTeams"
          onClick={() => {
            seteditID(undefined);
            setTeams([...teams, initialData]);
            setShowCreate(true);
          }}
        >
          <i class="fa fa-plus" aria-hidden="true" />
        </Button>
      </div>
      <hr class="solid" />
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default TeamsCard;
