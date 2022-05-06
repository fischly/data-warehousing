

/**
 * Data structure to hold a table.
 * Allows to print the SQL statements to load the table into a DBMS.
 */
class Table {
    setName(name) {
        this.name = name;
        return this;
    }

    setColumns(columns) {
        this.columns = columns;
        return this;
    }

    setConstraints(constraints) {
        this.constraints = constraints;
        return this;
    }

    setValues(values) {
        this.values = values;
        return this;
    }

    /** Exports this table as SQL statements. */
    toString() {
        // create table statement
        let returnValue = `CREATE TABLE IF NOT EXISTS ${this.name} (\n`;

        // concat the column and constraint array into one array
        const fused = [...this.columns, ...this.constraints];
        // add each column definition and constraint to the output
        for (let i = 0; i < fused.length; i++) {
            returnValue += `\t${fused[i]}`;

            if (i < fused.length - 1) {
                returnValue += ',\n';
            }
        }

        returnValue += '\n);\n\n';

        // insert value statements
        for (const value of this.values) {
            returnValue += `INSERT INTO ${this.name} VALUES (`;

            for (let i = 0; i < value.length; i++) {
                if (typeof value[i] === 'number') {
                    returnValue += value[i];
                } else {
                    returnValue += `'${value[i]}'`;
                }
                

                if (i < value.length - 1) {
                    returnValue += ', ';
                }
            }

            returnValue += ');\n';
        }


        return returnValue;
    }
}

module.exports = Table;