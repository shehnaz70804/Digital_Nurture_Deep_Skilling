BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans';
  EXECUTE IMMEDIATE 'DROP TABLE Customers';
EXCEPTION
  WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(100),
  Age NUMBER,
  Balance NUMBER,
  IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER REFERENCES Customers(CustomerID),
  InterestRate NUMBER,
  DueDate DATE
);

INSERT INTO Customers VALUES (1, 'Alice', 65, 15000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Bob', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Charlie', 70, 9500, 'FALSE');

INSERT INTO Loans VALUES (101, 1, 10.5, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 11.0, SYSDATE + 45);
INSERT INTO Loans VALUES (103, 3, 12.0, SYSDATE + 5);

COMMIT;

SELECT * FROM Customers;
SELECT * FROM Loans;

BEGIN
  FOR rec IN (SELECT CustomerID FROM Customers WHERE Age > 60) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = rec.CustomerID;
  END LOOP;
END;
/

SELECT * FROM Loans;

BEGIN
  FOR rec IN (SELECT CustomerID FROM Customers WHERE Balance > 10000) LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;
END;
/

SELECT * FROM Customers;

SET SERVEROUTPUT ON;
BEGIN
  FOR rec IN (
    SELECT c.Name, l.DueDate
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || rec.Name || ', your loan is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/