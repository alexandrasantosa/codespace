INSERT INTO Students ( student_id ,given_name,family_name,program )
VALUES ( 'a1111113','Bob','Smith','BCompSc');

INSERT INTO Students ( student_id ,given_name,family_name,program )
VALUES ( 'a1111114','Wei','Zhang','BCompSc');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111111','COMP SCI 1102','62');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111111','COMP SCI 2000','80');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111112','COMP SCI 1102','55');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111112','COMP SCI 2207','80');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111113','PHIL 2039','65');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111113','COMP SCI 1102','46');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111114','COMP SCI 2207','67');

INSERT INTO Enrolments( student_id ,subject_code,mark)
VALUES ( 'a1111114','COMP SCI 2000','49');


INSERT INTO Subjects( subject_code,subject,faculty)
VALUES ( 'COMP SCI 1102','Object Oriented Programming','ECMS');

INSERT INTO Subjects( subject_code,subject,faculty)
VALUES ( 'COMP SCI 2207','Web and Database Computing','ECMS');

INSERT INTO Subjects( subject_code,subject,faculty)
VALUES ( 'COMP SCI 2000','Computer Systems','ECMS');

INSERT INTO Subjects( subject_code,subject,faculty)
VALUES ( 'PHIL 2039','Philosophy of Mind','Arts');

DELETE FROM  Enrolments where student_id in (select student_id from Students where given_name='Jane');
DELETE FROM Students where given_name ='Jane';

#3.4
SELECT given_name,family_name FROM Students
INNER Join Enrolments
ON Enrolments.student_id=Students.student_id
WHERE subject_code='COMP SCI 2207';

#3.7
DESCRIBE Teachers;


SELECT Students.given_name ,Students.family_name,Enrolments.mark
FROM Students INNER JOIN Enrolments
ON Enrolments.student_id=Students.student_id
WHERE Enrolments.subject_code='COMP SCI 2000'
AND Enrolments.mark < 50;

