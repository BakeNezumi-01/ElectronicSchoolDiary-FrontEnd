export class Lesson {
  id: number;
  date: Date;
  teacher: number;
  groupname: string;
  discipline: string;
  homeWork?: string;
  comment?: string;

  constructor(id: number, date: Date, teacher: number, groupname: string,
              discipline: string, homeWork?: string, comment?: string) {
    this.id = id;
    this.date = date;
    this.teacher = teacher;
    this.groupname = groupname;
    this.discipline = discipline;
    this.homeWork = homeWork;
    this.comment = comment;
  }
}
