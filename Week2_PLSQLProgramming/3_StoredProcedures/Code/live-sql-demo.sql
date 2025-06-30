BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE SavingsAccounts';
  EXECUTE IMMEDIATE 'DROP TABLE Employees';
  EXECUTE IMMEDIATE 'DROP TABLE BankAccounts';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE SavingsAccounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerName VARCHAR2(100),
  Balance NUMBER
);

INSERT INTO SavingsAccounts VALUES (1, 'Alice', 10000);
INSERT INTO SavingsAccounts VALUES (2, 'Bob', 5000);
INSERT INTO SavingsAccounts VALUES (3, 'Charlie', 7500);

CREATE TABLE Employees (
  EmpID NUMBER PRIMARY KEY,
  Name VARCHAR2(100),
  Department VARCHAR2(50),
  Salary NUMBER
);

INSERT INTO Employees VALUES (1, 'John', 'HR', 40000);
INSERT INTO Employees VALUES (2, 'Jane', 'IT', 50000);
INSERT INTO Employees VALUES (3, 'Mark', 'IT', 45000);


CREATE TABLE BankAccounts (
  AccountNo NUMBER PRIMARY KEY,
  HolderName VARCHAR2(100),
  Balance NUMBER
);

INSERT INTO BankAccounts VALUES (101, 'Alice', 10000);
INSERT INTO BankAccounts VALUES (102, 'Alice', 5000);
INSERT INTO BankAccounts VALUES (201, 'Bob', 3000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE SavingsAccounts
  SET Balance = Balance + (Balance * 0.01);
END;
/

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_department IN VARCHAR2,
  p_bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * (p_bonus_percent / 100))
  WHERE Department = p_department;
END;
/

CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_acc IN NUMBER,
  p_to_acc IN NUMBER,
  p_amount IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance FROM BankAccounts WHERE AccountNo = p_from_acc;

  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
  END IF;

  UPDATE BankAccounts
  SET Balance = Balance - p_amount
  WHERE AccountNo = p_from_acc;

  UPDATE BankAccounts
  SET Balance = Balance + p_amount
  WHERE AccountNo = p_to_acc;
END;
/


SET SERVEROUTPUT ON;

BEGIN
  ProcessMonthlyInterest;
  DBMS_OUTPUT.PUT_LINE('Interest processed for all savings accounts.');
END;
/

SELECT * FROM SavingsAccounts;

BEGIN
  UpdateEmployeeBonus('IT', 10);
  DBMS_OUTPUT.PUT_LINE('Bonus updated for IT department.');
END;
/

SELECT * FROM Employees;

BEGIN
  TransferFunds(101, 102, 2000);
  DBMS_OUTPUT.PUT_LINE('Funds transferred from 101 to 102.');
END;
/

SELECT * FROM BankAccounts;