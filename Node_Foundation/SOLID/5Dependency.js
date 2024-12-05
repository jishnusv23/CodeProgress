// Bad Example (Violating Dependency Inversion Principle)
class MySQLDatabase {
  connect() {
    console.log("Connecting to MySQL database");
  }

  save(data) {
    console.log("Saving data to MySQL:", data);
  }
}

class UserService {
  constructor() {
    // Directly dependent on concrete MySQL implementation
    this.database = new MySQLDatabase();
  }

  saveUser(user) {
    // Tightly coupled to MySQL database
    this.database.connect();
    this.database.save(user);
  }
}

// Good Example (Following Dependency Inversion Principle)
// Abstract Database Interface
class DatabaseInterface {
  connect() {
    throw new Error("Must implement connect method");
  }

  save(data) {
    throw new Error("Must implement save method");
  }
}

// Concrete Database Implementations
class MySQLDatabase extends DatabaseInterface {
  connect() {
    console.log("Connecting to MySQL database");
  }

  save(data) {
    console.log("Saving data to MySQL:", data);
  }
}

class PostgreSQLDatabase extends DatabaseInterface {
  connect() {
    console.log("Connecting to PostgreSQL database");
  }

  save(data) {
    console.log("Saving data to PostgreSQL:", data);
  }
}

class MongoDatabase extends DatabaseInterface {
  connect() {
    console.log("Connecting to MongoDB");
  }

  save(data) {
    console.log("Saving data to MongoDB:", data);
  }
}

// Improved User Service
class UserService {
  // Dependency Injection through constructor
  // Accepts any class that implements DatabaseInterface
  constructor(database) {
    // Depends on abstraction, not concrete implementation
    this.database = database;
  }

  saveUser(user) {
    // Works with any database implementation
    this.database.connect();
    this.database.save(user);
  }
}

// Dependency Injection Container (Simple Implementation)
class DIContainer {
  constructor() {
    this.dependencies = {};
  }

  register(name, dependency) {
    this.dependencies[name] = dependency;
  }

  resolve(name) {
    return this.dependencies[name];
  }
}

// Usage Example
function main() {
  // Create dependency injection container
  const container = new DIContainer();

  // Register different database implementations
  container.register("mysqlDatabase", new MySQLDatabase());
  container.register("postgresDatabase", new PostgreSQLDatabase());
  container.register("mongoDatabase", new MongoDatabase());

  // Create user services with different database implementations
  const mysqlUserService = new UserService(container.resolve("mysqlDatabase"));

  const postgresUserService = new UserService(
    container.resolve("postgresDatabase")
  );

  const mongoUserService = new UserService(container.resolve("mongoDatabase"));

  // Save user with different database implementations
  const user = { id: 1, name: "John Doe" };

  console.log("MySQL User Service:");
  mysqlUserService.saveUser(user);

  console.log("\nPostgreSQL User Service:");
  postgresUserService.saveUser(user);

  console.log("\nMongo User Service:");
  mongoUserService.saveUser(user);
}

// Run the example
main();
