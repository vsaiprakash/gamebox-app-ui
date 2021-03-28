// Don't use getters and setters as this is class is used for user profile details

export class UserModel{
  email: string;
  displayName: string;

  constructor(email: string, displayName: string){
    this.email = email;
    this.displayName = displayName;
  }
}
