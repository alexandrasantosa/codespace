DELETE FROM  Enrolments
where student_id in (select student_id from Students where given_name='Jane');
DELETE FROM Students where given_name ='Jane';