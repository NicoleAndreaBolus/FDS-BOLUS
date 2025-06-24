SHOW DATABASES;

CREATE DATABASE DB_ESHOP;

USE DB_ESHOP;

CREATE TABLE customers(
	customer_id INT,
	first_name VARCHAR(100),
    middle_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(50),
    date_registered DATE,
    birthdate DATE,
    contact_number INT
);

SHOW TABLES;

DESC customers;

CREATE TABLE products(
	product_id INT,
    shop_id INT,
    product_name VARCHAR(50),
    description VARCHAR(200),
    product_category VARCHAR(100),
    price INT,
    stocks INT,
    brand VARCHAR(50)
);

SHOW TABLES;

DESC products;


CREATE TABLE distibutors(
	distributor_name VARCHAR(100),
    warehouse_address VARCHAR(200),
    owner_firstname VARCHAR(100),
    owner_middlename VARCHAR(100),
    owner_lastname VARCHAR(100),
    email VARCHAR(100),
    contact_number INT,
    shop_type VARCHAR(100),
    number_products INT
);


DESC distributors;



