let users = [
  {
    name: "Alice Smith",
    dateOfBirth: "1990-06-15",
    email: "alice.smith@example.com",
    gender: "Female",
  },
  {
    name: "John Doe",
    dateOfBirth: "1985-11-25",
    email: "john.doe@example.com",
    gender: "Male",
  },
  {
    name: "Emily Johnson",
    dateOfBirth: "1992-03-02",
    email: "emily.johnson@example.com",
    gender: "Female",
  },
  {
    name: "Michael Brown",
    dateOfBirth: "1987-09-10",
    email: "michael.brown@example.com",
    gender: "Male",
  },
];

function SerachData(obj, query) {
  let result = [];
  for (let i = 0; i < obj.length; i++) {
    let user = obj[i];
    const matchName = user.name.toLowerCase().includes(query);
    const matchDob = user.dateOfBirth.toLowerCase().includes(query);
    if(matchDob||matchName){
        return user
    }
  }
}
console.log(SerachData(users,'micha'))
