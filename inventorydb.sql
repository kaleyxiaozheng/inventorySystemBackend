-- create database inventorydb
-- CREATE DATABASE inventorydb;

-- before creating tables, you should choose database

-- create tables
CREATE TABLE department (
    department_id INTEGER UNIQUE NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    department_description VARCHAR(255)
);

CREATE TABLE app_user ( 
    user_id INTEGER UNIQUE NOT NULL,
    given_name VARCHAR(50) NOT NULL,
    family_name VARCHAR(50) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_phone INTEGER,
    user_photo BYTEA,
    user_type INTEGER UNIQUE Not NULL,
    user_role_id INTEGER UNIQUE NOT NULL,
    user_department_id INTEGER UNIQUE NOT NULL,
    user_vehicle_id INTEGER
);

CREATE TABLE product (
    product_id INTEGER UNIQUE NOT NULL,
    product_category_id INTEGER NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    product_description VARCHAR(255),
    product_warehouse_id INTEGER,
    unit_price NUMERIC NOT NULL,
    gst NUMERIC,
    extra_cost NUMERIC,
    pur_price NUMERIC NOT NULL,
    quantity INTEGER NOT NULL,
    supplier_id INTEGER,
    manufacturer_id INTEGER
);

CREATE TABLE category (
    category_id INTEGER UNIQUE NOT NULL,
    category_name VARCHAR(255) NOT NULL,
    category_exc VARCHAR(255),
);

CREATE TABLE cart (
    product_id Integer NOT NULL,
    product_description VARCHAR(255),
    product_quantitiy INTEGER NOT NULL, 
    order_date DATE NOT NULL
);

CREATE TABLE role (
    role_id INTEGER UNIQUE NOT NULL,
    role_name VARCHAR(255) NOT NULL
);

CREATE TABLE vehicle (
    vehicle_id INTEGER UNIQUE NOT NULL,
    vehicle_register VARCHAR(50) UNIQUE NOT NULL,
    vehicle_make VARCHAR(100) NOT NULL,
    vehicle_model VARCHAR(100) NOT NULL,
    vehicle_capacity VARCHAR(255) NOT NULL
);

CREATE TABLE app_order (
    order_no INTEGER UNIQUE NOT NULL,
    order_date DATE NOT NULL,
    product_list JSON,
    expected_delivery_date DATE,
    total_price NUMERIC,
    customer_information JSON,
    order_status INTEGER,
    invoice_no INTEGER UNIQUE
);

CREATE TABLE supplier (
    supplier_id INTEGER UNIQUE NOT NULL,
    supplier_name VARCHAR(255) NOT NULL,
    supplier_contact_person VARCHAR(255),
    supplier_contact_number INTEGER,
    supplier_street_address VARCHAR(100),
    supplier_suburb_id INTEGER NOT NULL,
    supplier_city_id INTEGER NOT NULL
);

CREATE TABLE manufacturer (
    manufacturer_id INTEGER UNIQUE NOT NULL,
    manufacturer_name VARCHAR(255) NOT NULL,
    manufacturer_contact_person VARCHAR(255),
    manufacturer_contact_number INTEGER,
    manufacturer_street_address VARCHAR(100) NOT NULL,
    manufacturer_suburb_id INTEGER NOT NULL,
    manufacturer_city_id INTEGER NOT NULL,
);

CREATE TABLE warehouse (
    warehouse_id INTEGER UNIQUE NOT NULL,
    warehouse_name varchar(255),
    warehouse_street_address VARCHAR(255) NOT NULL,
    warehouse_suburb_id INTEGER UNIQUE NOT NULL,
    warehouse_city_id INTEGER UNIQUE NOT NULL
);

CREATE TABLE suburb (
    suburb_id INTEGER UNIQUE NOT NULL,
    suburb_name VARCHAR(255) NOT NULL,
    postcode INTEGER
);

CREATE TABLE city (
    city_id INTEGER UNIQUE NOT NULL,
    city_name VARCHAR(50) NOT NULL,
    city_state VARCHAR(50)
);