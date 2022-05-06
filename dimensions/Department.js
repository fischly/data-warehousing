const Dimension = require('./Dimension');
const LecturerDimension = require('./Lecturer');
const CourseDimension = require('./Course');

class DepartmentDimension extends Dimension {
    getName() { 
        return 'Department'; 
    }
    getColumns() { 
        return [ 'id TEXT PRIMARY KEY', 'universityId TEXT' ];
    }
    getConstraints() {
        return [
            'FOREIGN KEY(universityId) REFERENCES University(id)',
        ];
    }

    load() {
        // load departments from lecturers and courses
        const lecturers = new LecturerDimension().load();
        const courses = new CourseDimension().load();

        let uniqueDepartments = [...new Set([...courses.map(course => course[5]), ...lecturers.map(lecturer => lecturer[4])])];
        return uniqueDepartments.map(department => [ department, 'ATEOS1000019137' ]); // set university key to 0 for now, since there is only one university
    }
}

module.exports = DepartmentDimension;