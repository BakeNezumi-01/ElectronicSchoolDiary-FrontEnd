export class Lesson {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  lastname: string;
  middlename: string;
  birthday: string;
  phone: string;

  constructor(id: number, username: string, password: string, email: string, name: string,
              lastname: string, middlename: string, birthday: string, phone: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.name = name;
    this.lastname = lastname;
    this.middlename = middlename;
    this.birthday = birthday;
    this.phone = phone;
  }
}
