
-- do it "by hand" by calculating the average grade for each student with each lecturer and join the resulting tables then
SELECT Student.matno, t1.Schoeffmann, t2.Kimovski, t3.Eder, t4.Koepke FROM Student
    LEFT JOIN (SELECT matno, avg(grade) as Schoeffmann FROM Grade WHERE examinatorId = '36866626' GROUP BY matno) as t1 ON Student.matno = t1.matno 
    LEFT JOIN (SELECT matno, avg(grade) as Kimovski FROM Grade WHERE examinatorId = '2077308266' GROUP BY matno) as t2 ON Student.matno = t2.matno 
    LEFT JOIN (SELECT matno, avg(grade) as Eder FROM Grade WHERE examinatorId = '834107405' GROUP BY matno) as t3 ON Student.matno = t3.matno 
    LEFT JOIN (SELECT matno, avg(grade) as Koepke FROM Grade WHERE examinatorId = '772243224' GROUP BY matno) as t4 ON Student.matno = t4.matno 
    order by Student.matno;

-- for a "dynamic" approach, I think we would need something like PL/SQL or dynamic SQL