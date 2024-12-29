import React from "react";
import "./Table.css";

const Table = () => {
  // Dummy data
  const users = [
    {
      no: 1,
      img: "https://via.placeholder.com/50",
      name: "John Doe",
      location: "New York",
      followers: 1200,
      following: 300,
      repoCount: 25,
    },
    {
      no: 2,
      img: "https://via.placeholder.com/50",
      name: "Jane Smith",
      location: "San Francisco",
      followers: 2500,
      following: 450,
      repoCount: 50,
    },
    {
      no: 3,
      img: "https://via.placeholder.com/50",
      name: "Alice Johnson",
      location: "Los Angeles",
      followers: 1800,
      following: 200,
      repoCount: 35,
    },
    {
      no: 4,
      img: "https://via.placeholder.com/50",
      name: "Bob Brown",
      location: "Chicago",
      followers: 1500,
      following: 250,
      repoCount: 40,
    },
    {
      no: 5,
      img: "https://via.placeholder.com/50",
      name: "Charlie Lee",
      location: "Miami",
      followers: 800,
      following: 100,
      repoCount: 15,
    },
  ];

  return (
    <div className="table">
      <button>jhj</button>
      <table>
        <thead>
          <tr className="header-table">
            <td>NO</td>
            <td>IMG</td>
            <td>NAME</td>
            <td>LOCATION</td>
            <td>FOLLOWERS</td>
            <td>FOLLOWING</td>
            <td>REPO_COUNT</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.no}>
              <td>{user.no}</td>
              <td>
                <img src={user.img} alt={user.name} width={50} height={50} />
              </td>
              <td>{user.name}</td>
              <td>{user.location}</td>
              <td>{user.followers}</td>
              <td>{user.following}</td>
              <td>{user.repoCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
