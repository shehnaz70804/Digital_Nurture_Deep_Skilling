package com.example;

import java.util.Scanner;

import java.util.Arrays;
import java.util.Comparator;

public class UserInterface {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Chair", "Furniture"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Phone", "Electronics")
        };

        System.out.print("Enter product name for Linear Search: ");
        String input1 = sc.nextLine();
        Product result1 = Searching.linearSearch(products, input1);
        if (result1 != null)
            System.out.println("Linear Search Result: " + result1.getProductId());
        else
            System.out.println("No product found");

        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        System.out.print("Enter product name for Binary Search: ");
        String input2 = sc.nextLine();
        Product result2 = Searching.binarySearch(products, input2);
        if (result2 != null)
            System.out.println("Binary Search Result: " + result2.getProductId());
        else
            System.out.println("No product found");

        sc.close();
    }
}
