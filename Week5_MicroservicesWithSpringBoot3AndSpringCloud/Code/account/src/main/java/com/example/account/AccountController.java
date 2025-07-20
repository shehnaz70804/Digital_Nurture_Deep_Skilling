package com.example.account;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {
    @GetMapping("/{number}")
    public Map<String, Object> getDetails(@PathVariable String number) {
    	return Map.of(
                "number", number,
                "type", "savings",
                "balance", 234343
            );
    }
}
