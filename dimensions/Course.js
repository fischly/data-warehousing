const Dimension = require('./Dimension');

class CourseDimension extends Dimension {
    getName() { 
        return 'Course'; 
    }
    getColumns() { 
        return [ 'id TEXT PRIMARY KEY', 'title TEXT', 'type TEXT', 'ECTS TEXT', 'level TEXT', 'departmentId TEXT' ];
    }
    getConstraints() {
        return [
            'FOREIGN KEY(departmentId) REFERENCES Department(id)',
        ];
    }

    load() {
        const courses = require('../data/aau_corses.json');

        const courseLevels = [ 'bachelor', 'master' ];

        let result = [];
        for (const courseLevel of courseLevels) {
            courses[courseLevel].forEach(course => {
                result.push([ course.id, course.title, course.type, course.ECTS, courseLevel, course.department ]);
            });
        }

        return result;
    }
}

module.exports = CourseDimension;