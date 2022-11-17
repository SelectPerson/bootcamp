const enum CourseName {
  Ios = 'Ios',
  Android = 'Android',
  React = 'React',
  NestJS = 'NestJS'
}

type TeacherType = 'Roman' | 'Ivan' | 'Volodymyr' | 'Alex';
type City = 'Kyiv' | 'Lutsk';

interface CourseValues {
  name: CourseName;
  duration?: Date | number;
  teacher: TeacherType
  city: City;
}

class IosCourse implements CourseValues{
  // public name: CourseName;
  // public duration: Date | number;
  // public teacher: TeacherType;
  // ublic city: City;

  constructor(duration) {
    this.name = CourseName.Ios;
    this.duration = duration || 3600
    this.teacher = 'Alex';
    this.city = 'Kyiv'
  }


}

class AndroidCourse {
  name: string;
  duration: string;
  teacher: string;

  constructor({duration, teacher}) {
    this.name = 'Android'
    this.duration = duration
    this.teacher = teacher
  }
}

class ReactCourse {
  name: string;
  duration: string;
  teacher: string;

  constructor({duration, teacher}) {
    this.name = 'React'
    this.duration = duration
    this.teacher = teacher
  }
}


class NestCourse {

}

class CourseFactory  {
  static list = {
    ios: IosCourse,
    android: AndroidCourse,
    react: ReactCourse,
    nest: NestCourse
  }

  create(type: CourseName) {
    switch (type) {
      case CourseName.Ios: return new IosCourse();
    }
  }

  getCourse({ type }) {
    console.log("")
  }
}


const courses = new CourseFactory();

courses.create(CourseName.Ios);

