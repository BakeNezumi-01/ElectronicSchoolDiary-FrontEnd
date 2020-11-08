export class Lesson {
  idLesson: number;
  idStudent: number;
  attendance?: boolean;
  grade?: number;

  constructor(idLesson: number, idStudent: number, attendance?: boolean, grade?: number) {
    this.idLesson = idLesson;
    this.idStudent = idStudent;
    this.attendance = attendance;
    this.grade = grade;
  }
}
