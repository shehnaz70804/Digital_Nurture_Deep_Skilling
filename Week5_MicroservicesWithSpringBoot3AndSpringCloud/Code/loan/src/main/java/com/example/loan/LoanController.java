package com.example.loan;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/loans")
public class LoanController {
    @GetMapping("/{number}")
    public Map<String, Object> getDetails(@PathVariable String number) {
    	return Map.of(
                "number", number,
                "type", "car",
                "loan", 400000,
                "emi", 3258,
                "tenure", 18
            );
    }
}
