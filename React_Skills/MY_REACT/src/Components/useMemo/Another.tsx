import React, { useMemo, useState } from "react";

interface User {
  id: number;
  name: string;
  role: string;
}
const Another = () => {
  const [searchIteam, setsearchTeam] = useState<string>("");

  const users: User[] = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Interviewer" },
    { id: 3, name: "Charlie", role: "Candidate" },
    { id: 4, name: "David", role: "Candidate" },
    { id: 5, name: "Eve", role: "Interviewer" },
  ];

  const findUsers = useMemo(() => {
    console.log("filterirng users");

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchIteam.toLowerCase())
    );
  }, [setsearchTeam, users]);

  const handleTheSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchTeam(e.target.value);
  };
  return (
    <div>
      <h1>This Example was my be give yo better understanding useMemo</h1>
      <input
        type="text"
        value={searchIteam}
        onChange={handleTheSearch}
        placeholder="Search users"
        className="border border-black"
      />
      <ul>
        {findUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Another;
