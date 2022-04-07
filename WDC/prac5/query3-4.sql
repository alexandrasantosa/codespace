SELECT given_name,family_name FROM Students
INNER Join Enrolments
ON Enrolments.student_id=Students.student_id
WHERE subject_code='COMP SCI 2207';