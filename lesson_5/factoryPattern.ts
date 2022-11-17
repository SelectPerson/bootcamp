const enum CourseName {
  Ios = 'Ios',
  Android = 'Android',
  React = 'React',
  NestJS = 'NestJS'
}

type TeacherName = 'Roman' | 'Ivan' | 'Volodymyr' | 'Alex';
type City = 'Kyiv' | 'Lutsk';

interface CourseValues {
  name: CourseName;
  duration?: number;
  teacher: TeacherName
  city: City;
}

class IosCourse implements CourseValues {
  name: CourseName;
  duration?: number;
  teacher: TeacherName
  city: City;

  constructor(duration = 4000) {
    this.name = CourseName.Ios;
    this.duration = duration;
    this.teacher = 'Alex';
    this.city = 'Kyiv'
  }
}

class AndroidCourse {
  name: CourseName;
  duration?: number;
  teacher: TeacherName
  city: City;

  constructor(duration = 2000) {
    this.name = CourseName.Android;
    this.duration = duration;
    this.teacher = 'Ivan';
    this.city = 'Kyiv'
  }
}

class ReactCourse {
  name: CourseName;
  duration?: number;
  teacher: TeacherName
  city: City;

  constructor(duration = 3000) {
    this.name = CourseName.React;
    this.duration = duration;
    this.teacher = 'Volodymyr';
    this.city = 'Lutsk'
  }
}


class NestCourse {
  name: CourseName;
  duration?: number;
  teacher: TeacherName
  city: City;

  constructor(duration = 3600) {
    this.name = CourseName.NestJS;
    this.duration = duration;
    this.teacher = 'Roman';
    this.city = 'Lutsk'
  }
}

class CourseFactory {
  create(type: CourseName, duration?: number | undefined) {
    switch (type) {
      case CourseName.Ios: return new IosCourse(duration);
      case CourseName.Android: return new AndroidCourse(duration);
      case CourseName.React: return new ReactCourse(duration);
      case CourseName.NestJS: return new NestCourse(duration);
    }
  }
}


const courses = new CourseFactory();
const ios = courses.create(CourseName.Ios, 5000);
console.log("ios", ios);

const react = courses.create(CourseName.React);
console.log("ios", react);

const nestjs = courses.create(CourseName.NestJS);
console.log("nestjs", nestjs);

