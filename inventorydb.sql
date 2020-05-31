-- create database inventorydb
-- CREATE DATABASE inventorydb;

-- before creating tables, you should choose database

-- create tables
CREATE TABLE role (
    role_id INTEGER UNIQUE NOT NULL,
    role_name VARCHAR(255) NOT NULL
);

CREATE TABLE app_user ( 
    user_id INTEGER UNIQUE NOT NULL,
    give_name VARCHAR(50) NOT NULL,
    family_name VARCHAR(50) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(255),
    user_phone INTEGER,
    user_photo BYTEA,
    role_id INTEGER NOT NULL,
    department_id INTEGER NOT NULL
);

CREATE TABLE department (
    department_id INTEGER UNIQUE NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    department_description VARCHAR(255)
);

CREATE TABLE cart (
    order_id INTEGER UNIQUE NOT NULL,
    product_id Integer NOT NULL,
    product_description VARCHAR(255),
    product_quantitiy INTEGER
);

CREATE TABLE vehicle (
    vehicle_id INTEGER UNIQUE NOT NULL,
    vehicle_register VARCHAR(50) UNIQUE NOT NULL,
    vehicle_make varchar(100) NOT NULL,
    vehicle_model VARCHAR(100) NOT NULL
);

CREATE TABLE warehouse (
    warehouse_id INTEGER UNIQUE NOT NULL,
    warehouse_name varchar(255) NOT NULL,
    number_and_stress VARCHAR(255) NOT NULL,
    suburb_id INTEGER UNIQUE NOT NULL,
    city_id INTEGER UNIQUE NOT NULL
);

CREATE TABLE suburb (
    suburb_id INTEGER UNIQUE NOT NULL,
    suburb_name VARCHAR(255) NOT NULL,
    postcode INTEGER UNIQUE NOT NULL
);

CREATE TABLE city (
    city_id INTEGER UNIQUE NOT NULL,
    city_name VARCHAR(255) NOT NULL
);

CREATE TABLE product (
    product_id INTEGER UNIQUE NOT NULL,
    category_id INTEGER NOT NULL,
    warehouse_id INTEGER,
    selling_price NUMERIC,
    purchase_price NUMERIC,
    quantity INTEGER,
    supplier_id INTEGER,
    manufacturer_id INTEGER,
    product_description VARCHAR(255)
);

CREATE TABLE category (
    category_id INTEGER UNIQUE NOT NULL,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE manufacturer (
    manufacturer_id INTEGER UNIQUE NOT NULL,
    manufacturer_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    contact_number INTEGER,
    number_and_stress VARCHAR(100) NOT NULL,
    suburb_id INTEGER NOT NULL,
    city_id INTEGER NOT NULL,
    postcode INTEGER NOT NULL
);

CREATE TABLE supplier (
    supplier_id INTEGER UNIQUE NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    contact_number INTEGER,
    number_and_stress VARCHAR(100) NOT NULL,
    suburb_id INTEGER NOT NULL,
    city_id INTEGER NOT NULL,
    postcode INTEGER NOT NULL
);

CREATE TABLE app_order (
    order_no INTEGER UNIQUE NOT NULL,
    order_date DATE NOT NULL,
    product_list JSON,
    expected_delivery_date DATE,
    total_price NUMERIC,
    customer_information JSON,
    order_status INTEGER
);

CREATE TABLE logistics (
    manufacturer_id INTEGER  NOT NULL,
    manufacturer_name VARCHAR(255) NOT NULL,
    product_id INTEGER NOT NULL
);

CREATE TABLE supply (
    supplier_id INTEGER  NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    product_id INTEGER NOT NULL
);

CREATE TABLE production (
    warehouse_id INTEGER  NOT NULL,
    manufacturer_name VARCHAR(255) NOT NULL,
    number_and_stress VARCHAR(255) NOT NULL,
    suburb_id INTEGER,
    city_id INTEGER
);