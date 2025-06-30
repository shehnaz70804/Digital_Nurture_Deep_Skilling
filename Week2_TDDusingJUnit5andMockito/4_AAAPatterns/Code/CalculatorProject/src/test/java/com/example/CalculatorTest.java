package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Arrange - setup
    @Before
    public void setUp() {
        System.out.println("Setting up before test");
        calculator = new Calculator();
    }

    // Tear down
    @After
    public void tearDown() {
        System.out.println("Cleaning up after test");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Arrange is done in @Before

        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(5, 3);
        assertEquals(2, result);
    }

    @Test
    public void testMultiplication() {
        int result = calculator.multiply(4, 2);
        assertEquals(8, result);
    }

    @Test
    public void testDivision() {
        int result = calculator.divide(10, 2);
        assertEquals(5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivisionByZero() {
        calculator.divide(5, 0);  // This will throw exception
    }
}
