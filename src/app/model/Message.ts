export class Lesson {
  id: number;
  sender: number;
  recipient: number;
  date: Date;
  text: string;

  constructor(id: number, sender: number, recipient: number, date: Date, text: string) {
    this.id = id;
    this.sender = sender;
    this.recipient = recipient;
    this.date = date;
    this.text = text;
  }
}
