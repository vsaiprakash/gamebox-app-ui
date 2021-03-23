export class UserModel{
  private _username: string;
  private _email: string;
  private _password: string;

  get username():string{
    return this._username;
  }

  set username(value: string){
    this._username = value;
  }

  get email():string{
    return this._email;
  }

  set email(value: string){
    this._email = value;
  }

  get password():string{
    return this._password;
  }

  set password(value: string){
    this._password = value;
  }

}
