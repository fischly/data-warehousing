const Dimension = require('./Dimension');

class GradeDimension extends Dimension {
    getName() { 
        return 'Grade'; 
    }
    getColumns() { 
        return [ 'id INTEGER PRIMARY KEY', 'grade SMALLINT', 'examinatorId TEXT', 'matno TEXT', 'courseId TEXT', 'date TEXT' ] 
    }
    getConstraints() {
        return [
            'FOREIGN KEY(examinatorId) REFERENCES Lecturer(id)',
            'FOREIGN KEY(matno)        REFERENCES Student(matno)',
            'FOREIGN KEY(courseId)     REFERENCES Course(id)'
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
    
        let gradeCounter = 0;
        return gradeFiles.map(file => {
            // load json from file
            const gradeJson = require(file);
    
            // extract single grades
            return gradeJson.results.map(
                grade => [ gradeCounter++, Number.parseInt(grade.grade), gradeJson.examinator, grade.matno, gradeJson.course, gradeJson.date ]
            );
        }).flat();
    }
}

module.exports = GradeDimension;