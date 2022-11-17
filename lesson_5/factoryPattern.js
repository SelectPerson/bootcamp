var IosCourse = /** @class */ (function () {
    function IosCourse(duration) {
        if (duration === void 0) { duration = 4000; }
        this.name = "Ios" /* CourseName.Ios */;
        this.duration = duration;
        this.teacher = 'Alex';
        this.city = 'Kyiv';
    }
    return IosCourse;
}());
var AndroidCourse = /** @class */ (function () {
    function AndroidCourse(duration) {
        if (duration === void 0) { duration = 2000; }
        this.name = "Android" /* CourseName.Android */;
        this.duration = duration;
        this.teacher = 'Ivan';
        this.city = 'Kyiv';
    }
    return AndroidCourse;
}());
var ReactCourse = /** @class */ (function () {
    function ReactCourse(duration) {
        if (duration === void 0) { duration = 3000; }
        this.name = "React" /* CourseName.React */;
        this.duration = duration;
        this.teacher = 'Volodymyr';
        this.city = 'Lutsk';
    }
    return ReactCourse;
}());
var NestCourse = /** @class */ (function () {
    function NestCourse(duration) {
        if (duration === void 0) { duration = 3600; }
        this.name = "NestJS" /* CourseName.NestJS */;
        this.duration = duration;
        this.teacher = 'Roman';
        this.city = 'Lutsk';
    }
    return NestCourse;
}());
var CourseFactory = /** @class */ (function () {
    function CourseFactory() {
    }
    CourseFactory.prototype.create = function (type, duration) {
        switch (type) {
            case "Ios" /* CourseName.Ios */: return new IosCourse(duration);
            case "Android" /* CourseName.Android */: return new AndroidCourse(duration);
            case "React" /* CourseName.React */: return new ReactCourse(duration);
            case "NestJS" /* CourseName.NestJS */: return new NestCourse(duration);
        }
    };
    return CourseFactory;
}());
var courses = new CourseFactory();
var ios = courses.create("Ios" /* CourseName.Ios */, 5000);
console.log("ios", ios);
var react = courses.create("Ios" /* CourseName.Ios */);
console.log("ios", react);
var nestjs = courses.create("NestJS" /* CourseName.NestJS */);
console.log("nestjs", nestjs);
