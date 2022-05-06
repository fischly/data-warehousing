const Dimension = require('./Dimension');

class StudentDimension extends Dimension {
    getName() { 
        return 'Student'; 
    }
    getColumns() { 
        return [ 'matno TEXT PRIMARY KEY', 'name TEXT', 'studyplanId INTEGER' ]; 
    }
    getConstraints() {
        return [
            'FOREIGN KEY(studyplanId) REFERENCES Studyplan(id)',
        ];
    }

    load() {
        const gradeFiles = [
            '../data/results/resultlist_blockchains_bpm.json',
            '../data/results/resultlist_data_engineering.json',
            '../data/results/resultlist_datenbaken.json',
            '../data/results/resultlist_esop.json',
            '../data/results/resultlist_interop.json',
            '../data/results/resultlist_parallel.json',
            '../data/results/resultlist_process_engineering.json',
            '../data/results/resultlist_webtech.json',
        ];
    
        const flattendStudents = gradeFiles.map(file => {
            // load json from file
            const gradeJson = require(file);
    
            // extract single grades
            return gradeJson.results.map(
                grade => [ grade.matno, grade.name, grade.studyplan ]
            );
        }).flat();
        
        // filter out duplicate students by matriculation number
        const matNos = flattendStudents.map(student => student[0]);
        const filteredStudents = flattendStudents.filter((student, index) => !matNos.includes(student[0], index + 1));
    
        return filteredStudents; //.sort((a, b) => a[1].localeCompare(b[1]));
    }
}

module.exports = StudentDimension;