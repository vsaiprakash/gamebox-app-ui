// Don't use getters and setters as this is class is used for user profile details

export class UserModel{
  email: string;
  displayName: string;
  photoURL: string;
  masterRank: number;
  userId: string;

  constructor(email: string, displayName: string, photoURL: string){
    this.email = email;
    this.displayName = displayName;
    this.photoURL = photoURL;
  }

  // setMasterRank(masterRank: number){
  //   this.masterRank = masterRank;
  // }
}
