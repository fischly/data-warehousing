const Dimension = require('./Dimension');

class LecturerDimension extends Dimension {
    getName() { 
        return 'Lecturer'; 
    }
    getColumns() { 
        return [ 'id TEXT PRIMARY KEY', 'name TEXT', 'rank TEXT', 'title TEXT', 'departmentId TEXT' ];
    }
    getConstraints() {
        return [
            'FOREIGN KEY(departmentId) REFERENCES Department(id)',
        ];
    }

    load() {
        const metadata = require('../data/aau_metadata.json');
    
        return metadata.lecturers.map(lecturer => {
            // for now, use the simple rule, that each lecturer has exactly one rank follow
            const [_, rank, title, name] = lecturer.name.match(/(.+?\.) (.*\.) (.+)$/);
    
            return [ lecturer.id, name, rank, title, lecturer.department ];
        });
    }
}

module.exports = LecturerDimension;