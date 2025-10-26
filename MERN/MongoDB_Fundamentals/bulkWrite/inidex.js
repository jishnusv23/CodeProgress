db.employeedetail.bulkWrite([
  {
    insertOne: {
      document: {
        eid: 13,
        ename: "New Employee",
        dept: "finance",
        desig: "analyst",
        salary: 60000,
        yoj: 2023,
        address: { dno: 407, street: 6, locality: "xyz", city: "hyderabad" },
      },
    },
  },
  {
    updateOne: {
      filter: { ename: "Jishnu" },
      update: { $set: { salary: 50000 } },
    },
  },
  {
    deleteOne: {
      filter: { salary: { $lt: 0 } },
    },
  },
]);
