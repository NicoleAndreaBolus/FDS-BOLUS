CREATE DATABASE hospital;

USE hospital;

CREATE TABLE patients (
    patient_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    gender CHAR(1) NOT NULL,
    birth_date DATE,
    city TEXT,
    province_id CHAR(2),
    allergies TEXT,
    height INT,
    weight INT
);


SELECT * FROM patients;

INSERT INTO patients (patient_id, first_name, last_name, gender, birth_date, city, province_id, allergies, height, weight) 
VALUES 
(1, 'Juan', 'Dela Cruz', 'M', '2001-05-10', 'Manila', 'NR', 'pollen', 170, 65),
(2, 'Maria', 'Santos', 'F', '1995-02-22', 'Cebu City', 'CV', NULL, 160, 55),
(3, 'Pedro', 'Reyes', 'M', '1989-07-14', 'Davao City', 'DV', 'seafood', 175, 70),
(4, 'Ana', 'Lim', 'F', '2000-01-01', 'Baguio City', 'CR', 'dust', 150, 45),
(5, 'Carlo', 'Gomez', 'M', '1993-09-09', 'Iloilo City', 'WV', 'penicillin', 168, 62);


SELECT * FROM patients
WHERE GENDER = 'F';

SELECT first_name, last_name
FROM patients;

SELECT * FROM patients
WHERE province_id = 'NR';

SELECT * FROM patients
WHERE allergies = 'pollen';

SELECT first_name, last_name, height
FROM patients
WHERE height > 160
ORDER BY height DESC;


SELECT first_name, last_name, weight
FROM patients
WHERE weight between 50 AND 70;

SELECT first_name, last_name, birth_date
FROM patients
WHERE birth_date < '2000-01-01';

SELECT last_name, city 
FROM patients
WHERE gender = "M";

SELECT last_name 
FROM patients
ORDER BY last_name ASC;


UPDATE patients SET city = "Quezon City"
WHERE patient_id = '1';

SELECT * FROM patients;

UPDATE patients SET weight = 52
WHERE patient_id = '2';

UPDATE patients SET allergies = NULL
WHERE patient_id = '4';

UPDATE patients SET height = height + 2
WHERE patient_id = '3';



UPDATE patients SET city = "Mandaue City"
WHERE city = 'Cebu City';



UPDATE patients SET province_id = "VI"
WHERE patient_id = '5';


UPDATE patients SET weight = 50
WHERE weight < 50;

DELETE FROM patients
WHERE patient_id = '5';

DELETE FROM patients
WHERE allergies IS NULL;

SELECT * FROM patients;

DELETE FROM patients
WHERE province_id = 'DV';

DELETE FROM patients
WHERE height > 180;

DELETE FROM patients
WHERE birth_date < '1990-01-01';