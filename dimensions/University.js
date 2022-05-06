const Dimension = require('./Dimension');
const LecturerDimension = require('./Lecturer');
const CourseDimension = require('./Course');

class UniversityDimension extends Dimension {
    getName() { 
        return 'University'; 
    }
    getColumns() { 
        return [ 'id TEXT PRIMARY KEY', 'name TEXT', 'state TEXT', 'city TEXT', 'street TEXT', 'zip TEXT' ];
    }
    getConstraints() {
        return [];
    }

    load() {
        const metadata = require('../data/aau_metadata.json');

        return [ [metadata.id, metadata.name, metadata.state, metadata.city, metadata.street, metadata.zip ] ]; // only one university in dataset, so just return it's data for now
    }
}

module.exports = UniversityDimension;