
const UniversityDimension = require('./dimensions/University');
const DepartmentDimension = require('./dimensions/Department');
const LecturerDimension = require('./dimensions/Lecturer');
const CourseDimension = require('./dimensions/Course');
const StudyplanDimension = require('./dimensions/StudyPlan');
const StudentDimension = require('./dimensions/Student');
const GradeDimension = require('./dimensions/Grade');



const dimensions = [
    new UniversityDimension(),
    new DepartmentDimension(),
    new LecturerDimension(),
    new CourseDimension(),
    new StudyplanDimension(),
    new StudentDimension(),
    new GradeDimension()
];

for (const dimension of dimensions) {
    console.log(dimension.toTable());
    console.log('\n\n');
}