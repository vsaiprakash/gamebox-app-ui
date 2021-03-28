// Don't use getters and setters as this is class is used for user profile details

export class UserModel{
  email: string;
  displayName: string;
  photoUrl: string;

  constructor(email: string, displayName: string, photoUrl: string){
    this.email = email;
    this.displayName = displayName;
    this.photoUrl = photoUrl;
  }
}
