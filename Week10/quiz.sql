CREATE DATABASE enrol;

USE enrol;

CREATE TABLE Faculty (
    facultyName VARCHAR(255),
    address VARCHAR(255),
    PRIMARY KEY (facultyName)
);

CREATE TABLE School (
    schoolName VARCHAR(255),
    facultyName VARCHAR(255),
    PRIMARY KEY (schoolName),
    FOREIGN KEY (facultyName) REFERENCES Faculty(facultyName) ON DELETE CASCADE
);

CREATE TABLE Degree (
    facultyName VARCHAR(255),
    degreeAbbr VARCHAR(63),
    degreeName VARCHAR(255),
    PRIMARY KEY (facultyName,degreeAbbr),
    FOREIGN KEY (facultyName) REFERENCES Faculty(facultyName) ON DELETE CASCADE
);

CREATE TABLE Student (
    studentID CHAR(8),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    PRIMARY KEY (studentID)
);

CREATE TABLE Subject (
    subjectCode VARCHAR(63),
    subjectName VARCHAR(255),
    schoolName VARCHAR(255),
    PRIMARY KEY (subjectCode),
    FOREIGN KEY (schoolName) REFERENCES School(schoolName) ON DELETE NO ACTION
);

CREATE TABLE Candidature (
    facultyName VARCHAR(255),
    degreeAbbr VARCHAR(63),
    studentID CHAR(8),
    KEY (facultyName,degreeAbbr,studentID),
    FOREIGN KEY (facultyName,degreeAbbr) REFERENCES Degree(facultyName,degreeAbbr) ON DELETE SET NULL,
    FOREIGN KEY (studentID) REFERENCES Student(studentID) ON DELETE CASCADE
);

CREATE TABLE Enrolment (
    subjectCode VARCHAR(63),
    studentID CHAR(8),
    year INT,
    semester VARCHAR(63),
    mark INT,
    PRIMARY KEY (subjectCode,studentID,year,semester),
    FOREIGN KEY (subjectCode) REFERENCES Subject(subjectCode) ON DELETE CASCADE,
    FOREIGN KEY (studentID) REFERENCES Student(studentID) ON DELETE CASCADE
);
