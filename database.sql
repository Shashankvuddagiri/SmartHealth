CREATE TABLE employees (
    emp_id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
	emergency_contact VARCHAR(20),
    blood_group VARCHAR(5),
    coy VARCHAR(100),
    dob DATE,
    doa DATE,
    date_of_promotion DATE,
    date_of_retirement DATE,
    cfms_id VARCHAR(50),
    abs_no VARCHAR(50),
    apgli_no VARCHAR(50),
    pan_no VARCHAR(20),
    adhar_no VARCHAR(20),
    bank_ac VARCHAR(30),
    address TEXT,
    native_district VARCHAR(50),
    native_village VARCHAR(50),
    native_mandal VARCHAR(50),
    native_state VARCHAR(50),
    id_marks TEXT,
    caste VARCHAR(50),
    father VARCHAR(100),
    mother VARCHAR(100),
    wife VARCHAR(100),
    mail_id VARCHAR(100),
    photo BYTEA
);
INSERT INTO employees (
    emp_id, name, phone, blood_group, coy, dob, doa, date_of_promotion,
    date_of_retirement, cfms_id, abs_no, apgli_no, pan_no, adhar_no,
    bank_ac, address, native_district, native_village, native_mandal,
    native_state, id_marks, caste, father, mother, wife, mail_id
) VALUES
(10001, 'Rajesh Kumar', '9876543210', 'B+', 'Alpha Company', '1985-07-15', '2010-06-01', 
 '2018-04-10', '2045-07-15', 'CFMS12345', 'ABS1001', 'APGLI5001', 
 'ABCDE1234F', '123456789012', '12345678901234', 
 'H.No: 1-2-3, Gandhi Nagar, Hyderabad', 'Ranga Reddy', 'Gachibowli', 
 'Serilingampally', 'Telangana', 'Mole on left cheek', 'OC', 
 'Suresh Kumar', 'Lakshmi Devi', 'Priya Sharma', 'rajesh.kumar@example.com'),

(10002, 'Priya Patel', '8765432109', 'O+', 'Beta Company', '1990-11-22', '2015-03-15', 
 '2020-08-20', '2050-11-22', 'CFMS12346', 'ABS1002', 'APGLI5002', 
 'BCDEF2345G', '234567890123', '23456789012345', 
 'Flat 301, Sunshine Apartments, Mumbai', 'Mumbai', 'Andheri', 
 'Andheri West', 'Maharashtra', 'Scar on right forearm', 'SC', 
 'Amit Patel', 'Meena Patel', 'Rahul Shah', 'priya.patel@example.com'),

(10003, 'Arjun Singh', '7654321098', 'A-', 'Gamma Company', '1988-05-30', '2012-09-10', 
 '2019-11-05', '2048-05-30', 'CFMS12347', 'ABS1003', 'APGLI5003', 
 'CDEFG3456H', '345678901234', '34567890123456', 
 '12/B, MG Road, Bangalore', 'Bangalore Urban', 'Koramangala', 
 'Bangalore South', 'Karnataka', 'Tattoo on right wrist', 'OBC', 
 'Vikram Singh', 'Sunita Singh', 'Neha Gupta', 'arjun.singh@example.com');
 SELECT * FROM employees;
 -- MEDICINE MASTER TABLE
 CREATE TABLE medicines_master (
    medicine_id SERIAL PRIMARY KEY,
    name_of_medicine VARCHAR(100) NOT NULL,
    type_of_medicine VARCHAR(50) NOT NULL CHECK (
        type_of_medicine IN ('Tablets', 'Capsules', 'Injection', 'Infusion', 'Syrups')
    ),
    classification VARCHAR(50) NOT NULL CHECK (
        classification IN (
            'Anti Biotics', 'Eye & Ear Drops', 'Dressings', 'Vitamins or Tonics',
            'Anti Diabetics', 'Anti Hypertensives', 'Hormones', 'Lipid Lowering',
            'Anti Histamines', 'Cough Suppressants', 'Mucolytics', 'IV Fluids',
            'Ointments', 'Lotions', 'Anti Fungals', 'Anti Virals', 'Analgesics'
        )
    )
);
CREATE TABLE institute_master (
    institute_id SERIAL PRIMARY KEY,
    name_of_institute VARCHAR(100) NOT NULL,
    name_of_manufacturer VARCHAR(100) NOT NULL
);
CREATE TABLE employee_master (
    unique_id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    phone_number VARCHAR(15),
    blood_group VARCHAR(5) CHECK (
        blood_group IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    ),
    address TEXT,
    arogya_bharata_number VARCHAR(50),
    designation VARCHAR(50),  -- Removed CHECK constraint
    height_cm NUMERIC(5,2),
    weight_kg NUMERIC(5,2),
    bmi NUMERIC(5,2) GENERATED ALWAYS AS (
        CASE WHEN height_cm > 0 THEN weight_kg / ((height_cm/100)^2) ELSE NULL END
    ) STORED,
    allergic_to TEXT,
    previous_history TEXT,
    native_village VARCHAR(50),
    native_mandal VARCHAR(50),
    native_district VARCHAR(50),
    native_state VARCHAR(50),
    pan_number VARCHAR(10),
    aadhar_number VARCHAR(12),  -- Corrected spelling
    father_name VARCHAR(100),
    mother_name VARCHAR(100),
    wife_name VARCHAR(100),
    mail_id VARCHAR(100),
    doa DATE,
    dor DATE,
    dop DATE,
    cfms VARCHAR(50),
    caste VARCHAR(30),
    photo BYTEA,
    gpf_no VARCHAR(50),
    apgli_no VARCHAR(50),
    gross_salary NUMERIC(10,2),
    net_salary NUMERIC(10,2),
    bank_account VARCHAR(20)
);
INSERT INTO employee_master (
    unique_id, name, dob, phone_number, blood_group, address,
    designation, height_cm, weight_kg, pan_number, aadhar_number,  -- Corrected here
    mail_id, doa, gross_salary, net_salary
) VALUES
(10001, 'Ramesh Kumar', '1980-05-15', '9876543210', 'B+', 
 'H.No 1-2-3, Doctors Colony, Hyderabad', 'Senior Doctor', 175, 72,
 'ABCDE1234F', '123456789012', 'ramesh.kumar@hospital.com',
 '2010-06-15', 150000, 120000),

(10002, 'Priya Sharma', '1985-11-22', '8765432109', 'O+',
 'Flat 201, Staff Quarters, Secunderabad', 'Head Nurse', 162, 58,
 'BCDEF2345G', '234567890123', 'priya.sharma@hospital.com',
 '2015-03-10', 60000, 54000);
 INSERT INTO medicines_master (name_of_medicine, type_of_medicine, classification) VALUES
-- Anti Biotics
('Amoxicillin 500mg', 'Tablets', 'Anti Biotics'),
('Azithromycin 250mg', 'Tablets', 'Anti Biotics'),
('Cefixime 200mg', 'Tablets', 'Anti Biotics'),
('Ciprofloxacin 500mg', 'Tablets', 'Anti Biotics'),

-- Anti Diabetics
('Metformin 500mg', 'Tablets', 'Anti Diabetics'),
('Glimiperide 1mg', 'Tablets', 'Anti Diabetics'),
('Insulin Glargine', 'Injection', 'Anti Diabetics'),

-- Anti Hypertensives
('Amlodipine 5mg', 'Tablets', 'Anti Hypertensives'),
('Telmisartan 40mg', 'Tablets', 'Anti Hypertensives'),
('Losartan 50mg', 'Tablets', 'Anti Hypertensives'),

-- Analgesics
('Paracetamol 500mg', 'Tablets', 'Analgesics'),
('Diclofenac 50mg', 'Tablets', 'Analgesics'),
('Tramadol 50mg', 'Tablets', 'Analgesics'),

-- Vitamins
('Vitamin B Complex', 'Tablets', 'Vitamins or Tonics'),
('Vitamin D3 60K IU', 'Tablets', 'Vitamins or Tonics'),

-- Others
('Cetirizine 10mg', 'Tablets', 'Anti Histamines'),
('Omeprazole 20mg', 'Capsules', 'Dressings'),
('Pantoprazole 40mg', 'Tablets', 'Dressings'),
('Atorvastatin 10mg', 'Tablets', 'Lipid Lowering'),
('Fluconazole 150mg', 'Tablets', 'Anti Fungals');
INSERT INTO institute_master (name_of_institute, name_of_manufacturer) VALUES
-- Government Hospitals
('AIIMS Delhi', 'Indian Pharmaceuticals'),
('PGIMER Chandigarh', 'Bharat Serum'),
('CMC Vellore', 'Hindustan Antibiotics'),
('NIMHANS Bangalore', 'Karnataka Drugs'),

-- Private Hospitals
('Apollo Hospitals', 'Sun Pharma'),
('Fortis Healthcare', 'Dr. Reddy''s Labs'),
('Max Healthcare', 'Cipla Limited'),
('Manipal Hospitals', 'Lupin Pharmaceuticals'),

-- Research Institutes
('ICMR Delhi', 'Biocon Limited'),
('NIRT Chennai', 'Glenmark Pharma'),

-- State Government Hospitals
('Gandhi Hospital Hyderabad', 'Telangana Meds'),
('Seth GSMC Mumbai', 'Maharashtra Drugs');
--main store ledger
CREATE TABLE main_store_ledger (
    transaction_id SERIAL PRIMARY KEY,
    medicine_name VARCHAR(100) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    receipt_quantity INTEGER DEFAULT 0,
    issue_quantity INTEGER DEFAULT 0,
    balance_quantity INTEGER NOT NULL,
    transaction_type VARCHAR(20) CHECK (transaction_type IN ('Receipt', 'Issue', 'Adjustment')),
    source_or_destination VARCHAR(100), -- Could be vendor name or sub-store name
    batch_number VARCHAR(50),
    expiry_date DATE,
    remarks TEXT
);

-- Create index for faster lookups
CREATE INDEX idx_main_store_medicine ON main_store_ledger(medicine_name);
--sub-store ledger
CREATE TABLE sub_store_ledger (
    transaction_id SERIAL PRIMARY KEY,
    medicine_name VARCHAR(100) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    receipt_quantity INTEGER DEFAULT 0,
    issue_quantity INTEGER DEFAULT 0,
    balance_quantity INTEGER NOT NULL,
    transaction_type VARCHAR(20) CHECK (transaction_type IN ('Receipt from Main', 'Issue to Patient', 'Adjustment')),
    patient_id VARCHAR(50), -- If issued to patient
    prescriber_id VARCHAR(50), -- Doctor/nurse who prescribed
    batch_number VARCHAR(50),
    expiry_date DATE,
    remarks TEXT
);

-- Create index for faster lookups
CREATE INDEX idx_sub_store_medicine ON sub_store_ledger(medicine_name);
INSERT INTO main_store_ledger (
    medicine_name, receipt_quantity, issue_quantity, balance_quantity, 
    transaction_type, source_or_destination
) VALUES
('Tab.PARACETAMOL', 10000, 0, 10000, 'Receipt', 'Pharma Supplier Inc'),
('Tab.PARACETAMOL', 0, 1000, 9000, 'Issue', 'Sub Store A'),
('Tab.PARACETAMOL', 3500, 0, 12500, 'Receipt', 'Pharma Supplier Inc'),
('Tab.PARACETAMOL', 0, 250, 12250, 'Issue', 'Sub Store B'),
('Inj.CEFTRIAXONE', 500, 0, 500, 'Receipt', 'Global Medicines'),
('Inj.CEFTRIAXONE', 0, 50, 450, 'Issue', 'Emergency Ward');
INSERT INTO sub_store_ledger (
    medicine_name, receipt_quantity, issue_quantity, balance_quantity, 
    transaction_type, patient_id, prescriber_id
) VALUES
('Tab.PARACETAMOL', 1000, 0, 1000, 'Receipt from Main', NULL, NULL),
('Tab.PARACETAMOL', 0, 100, 900, 'Issue to Patient', 'PT1001', 'DR202'),
('Tab.PARACETAMOL', 500, 0, 1400, 'Receipt from Main', NULL, NULL),
('Tab.PARACETAMOL', 0, 250, 1150, 'Issue to Patient', 'PT1045', 'DR187'),
('Cap.OMEPRAZOLE', 300, 0, 300, 'Receipt from Main', NULL, NULL),
('Cap.OMEPRAZOLE', 0, 30, 270, 'Issue to Patient', 'PT1102', 'DR156');
--employee report table
CREATE TABLE employeefront (
    emp_id BIGINT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
	emergency_contact VARCHAR(20),
    blood_group VARCHAR(5),
    
    dob DATE,
    
    
    --employee for frontend
	
  
   
    address VARCHAR(50),
    native_district VARCHAR(50),
    native_village VARCHAR(50),
    native_mandal VARCHAR(50),
    native_state VARCHAR(50),
    id_marks TEXT,
    caste VARCHAR(50),
    father VARCHAR(100),
    mother VARCHAR(100),
    wife VARCHAR(100),
    mail_id VARCHAR(100),
    photo BYTEA
);
INSERT INTO employeefront (
    emp_id, name, phone, blood_group, native_district, native_village, native_mandal,
    native_state, id_marks, caste, father, mother, wife, mail_id
) VALUES
(10001, 'Rajesh Kumar', '9876543210', 'B+',  
 'H.No: 1-2-3, Gandhi Nagar, Hyderabad', 'Ranga Reddy', 'Gachibowli', 
 'Serilingampally', 'Telangana', 'Mole on left cheek', 'OC', 
 'Suresh Kumar', 'Lakshmi Devi', 'Priya Sharma', 'rajesh.kumar@example.com'),

(10002, 'Priya Patel', '8765432109', 'O+',  
 'Flat 301, Sunshine Apartments, Mumbai', 'Mumbai', 'Andheri', 
 'Andheri West', 'Maharashtra', 'Scar on right forearm', 'SC', 
 'Amit Patel', 'Meena Patel', 'Rahul Shah', 'priya.patel@example.com'),

(10003, 'Arjun Singh', '7654321098', 'A-', 
 '12/B, MG Road, Bangalore', 'Bangalore Urban', 'Koramangala', 
 'Bangalore South', 'Karnataka', 'Tattoo on right wrist', 'OBC', 
 'Vikram Singh', 'Sunita Singh', 'Neha Gupta', 'arjun.singh@example.com');