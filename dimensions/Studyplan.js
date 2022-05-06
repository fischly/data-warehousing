const Dimension = require('./Dimension');

class StudyplanDimension extends Dimension {
    getName() { 
        return 'Studyplan'; 
    }
    getColumns() { 
        return [ 'id INTEGER PRIMARY KEY', 'name TEXT', 'level TEXT', 'branch TEXT' ];
    }
    getConstraints() {
        return [];
    }

    load() {
        const metadata = require('../data/aau_metadata.json');
    
        let result = [];
        metadata.bachelor_study_plans.forEach(studyplan => {
            result.push([ studyplan.id, studyplan.name, 'bachelor', studyplan.branch ]);
        });
    
        metadata.master_study_plans.forEach(studyplan => {
            result.push([ studyplan.id, studyplan.name, 'master', studyplan.branch ]);
        });
    
        return result;
    }
}

module.exports = StudyplanDimension;