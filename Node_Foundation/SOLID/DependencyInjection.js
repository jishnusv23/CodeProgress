// !  ----------------------------Without Dependency ------------------------------------------------
// class LoggerService {
//   log(message) {
//     console.log("LoggerService:", message);
//   }
// }

// class UserService {
//   constructor() {
//     this.logger = new LoggerService(); //tightly coupled
//   }
//   createUser(user) {
//     this.logger.log(`User  ${user} created`);
//   }
// }

// const userService = new UserService();
// userService.createUser('jishnu')

//*---------------------------------With Dependency-------------------------------------------------------

class LoggerService {
  log(message) {
    console.log("LoggerService:", message);
  }
}
class UserService {
  constructor(logger) {
    this.logger = logger;
  }
  createUser(user) {
    this.logger.log(`User ${user} created`);
  }
}

const logger = new LoggerService();
const userService = new UserService(logger);
userService.createUser('jishnu');
