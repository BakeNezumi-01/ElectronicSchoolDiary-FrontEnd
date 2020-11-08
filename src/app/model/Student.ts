export class Lesson {
  id: number;
  groupp?: string;
  nameParent1: string;
  phoneParent1: string;
  nameParent2: string;
  phoneParent2: string;

  constructor(id: number, nameParent1: string, phoneParent1: string,
              nameParent2: string, phoneParent2: string, groupp?: string) {
    this.id = id;
    this.groupp = groupp;
    this.nameParent1 = nameParent1;
    this.phoneParent1 = phoneParent1;
    this.nameParent2 = nameParent2;
    this.phoneParent2 = phoneParent2;
  }
}
