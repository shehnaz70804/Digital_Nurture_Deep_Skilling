package com.example;

import java.util.Scanner;

public class UserInterface {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		ForecastingLogic forecaster = new RecursiveForecaster();

        System.out.print("Enter present value (e.g., 10000): ");
        double presentValue = scanner.nextDouble();

        System.out.print("Enter annual growth rate (e.g., 0.08 for 8%): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

        double futureValue = forecaster.calculateFutureValue(presentValue, rate, years);

        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);

        scanner.close();
	}
}
