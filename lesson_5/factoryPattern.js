var IosCourse = /** @class */ (function () {
    function IosCourse(_a) {
        var duration = _a.duration;
        this.name = "Ios" /* CourseName.Ios */;
        this.duration = duration || 3600;
        this.teacher = 'Alex';
        this.city = 'Kyiv';
    }
    return IosCourse;
}());
var AndroidCourse = /** @class */ (function () {
    function AndroidCourse(_a) {
        var duration = _a.duration, teacher = _a.teacher;
        this.name = 'Android';
        this.duration = duration;
        this.teacher = teacher;
    }
    return AndroidCourse;
}());
var ReactCourse = /** @class */ (function () {
    function ReactCourse(_a) {
        var duration = _a.duration, teacher = _a.teacher;
        this.name = 'React';
        this.duration = duration;
        this.teacher = teacher;
    }
    return ReactCourse;
}());
var NestCourse = /** @class */ (function () {
    function NestCourse() {
    }
    return NestCourse;
}());
var CourseFactory = /** @class */ (function () {
    function CourseFactory() {
    }
    CourseFactory.prototype.create = function (type) {
        switch (type) {
            case "Ios" /* CourseName.Ios */: return new IosCourse({ city: undefined, name: undefined, teacher: undefined, duration: 3000 });
        }
    };
    CourseFactory.prototype.getCourse = function (_a) {
        var type = _a.type;
        console.log("");
    };
    CourseFactory.list = {
        ios: IosCourse,
        android: AndroidCourse,
        react: ReactCourse,
        nest: NestCourse
    };
    return CourseFactory;
}());
var courses = new CourseFactory();
courses.create("Ios" /* CourseName.Ios */);
