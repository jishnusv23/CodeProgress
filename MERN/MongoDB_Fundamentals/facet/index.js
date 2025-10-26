db.employeedetail.aggregate([
  {
    $facet: {
      groupByDept: [{ $group: { _id: "$dept", count: { $sum: 1 } } }],
      averageSalary: [
        { $group: { _id: null, avgSalary: { $avg: "$salary" } } },
      ],
    },
  },
]);
