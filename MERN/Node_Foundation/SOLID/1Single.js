class UserCreator {
  constructor(user) {
    this.user = user;
  }
  createUser() {
    console.log("Creating User", this.user);
  }
}

class EmailNotifer {
  constructor(user) {
    this.user = user;
  }
  sendEmailNotification() {
    console.log("Sending Email to :", this.user.email);
  }
}

class Logger {
  constructor(user) {
    this.user = user;
  }
  logUserInfo() {
    console.log("Logging user info:",this.user);
  }
}


