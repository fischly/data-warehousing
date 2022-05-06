# Data Warehousing
This application is part of an assignment I did for a Data Engineering course.


## Usage
This node package has no dependencies, so one does not need to run `npm i`.

To run the loading/processing of the data and output the result in form of SQL statements that can be imported into postgres, just run:
```sh
node index.js > export.sql
```
to write the result into `export.sql`.


## Changes I did to the data sources
- added colon (:) to two json files in order to make them valid json
- changed the ID of one course (Datenbanktechnologie), since Datenbanktechnologie and Datenbanken had the same course ID
