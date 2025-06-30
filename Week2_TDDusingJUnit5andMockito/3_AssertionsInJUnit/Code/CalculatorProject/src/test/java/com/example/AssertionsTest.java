package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3);

        // Assert true
        assertTrue(5 > 3);
        
        // Assert not equals
        assertNotEquals(4, 2 + 3);

        // Assert false
        assertFalse(5 < 3);

        // Assert null
        assertNull(null);

        // Assert not null
        assertNotNull(new Object());
        
        // Assert same
        String str = "hello";
        assertSame(str, str);
        
        // Assert not same
        assertNotSame("Objects should not be same", new Object(), new Object());
        
        // Assert array equal
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals(expected, actual);
        
    }
}
