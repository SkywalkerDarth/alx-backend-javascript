namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    //setter//
    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
