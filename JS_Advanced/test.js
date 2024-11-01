// Simple example data - each array represents a person's [height, weight]
const people = [
  [160, 50], // short and light
  [165, 55],
  [158, 48],
  [185, 90], // tall and heavy
  [188, 85],
  [180, 88],
  [170, 65], // medium
  [172, 68],
  [168, 62],
];

// Simple function to group people into clusters
function simpleClustering(data, k = 3) {
  // Step 1: Select first k items as initial centers
  let centers = data.slice(0, k);

  // Step 2: Assign each person to nearest center
  function assignToClusters() {
    return data.map((person) => {
      let shortestDistance = Infinity;
      let clusterIndex = 0;

      // Find closest center
      centers.forEach((center, index) => {
        // Calculate distance (simple version)
        const distance =
          Math.abs(center[0] - person[0]) + Math.abs(center[1] - person[1]);

        if (distance < shortestDistance) {
          shortestDistance = distance;
          clusterIndex = index;
        }
      });

      return clusterIndex;
    });
  }

  // Get final clusters
  const clusters = assignToClusters();

  return clusters;
}

// Use the function
const results = simpleClustering(people);
console.log("Cluster assignments:", results);

// Print results in a readable way
results.forEach((cluster, index) => {
  console.log(
    `Person ${index}: Height=${people[index][0]}, Weight=${people[index][1]}, Cluster=${cluster}`
  );
});
