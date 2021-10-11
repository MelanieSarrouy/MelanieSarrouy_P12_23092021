export class userActivity {
  constructor(user) {
    this.id = user.userId
    this.sessions = user.sessions
  }
}
