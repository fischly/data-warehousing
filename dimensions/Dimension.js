const Table = require('../util/Table');

/**
 * Base class for all dimensions.
 * 
 * Child classes must implement the following methods:
 * - getName()
 * - getColumns()
 * - getConstraints()
 * - load()
 */
class Dimension {
    /* abstract functions that have to implemented in the child classes */

    /** Returns this dimension's name. */
    getName() { }
    /** Returns this dimension's columns. */
    getColumns() { }
    /** Returns this dimension's constraints (mainly foreign key constraints). */
    getConstraints() { }
    /** Loads and processes the data to fill this column. Returns an array of an array representing the rows of this dimension. */
    load() { }

    /** Returns this dimensions in the form of SQL statements to load them into a DBMS. */
    toTable() {
        return new Table()
            .setName(this.getName())
            .setColumns(this.getColumns())
            .setConstraints(this.getConstraints())
            .setValues(this.load())
            .toString();
    }
}


module.exports = Dimension;