package com.example;

public class RecursiveForecaster implements ForecastingLogic {
	public double calculateFutureValue(double presentValue, double rate, int years) {
		double result;
		if(years==0) {
			result = presentValue;
		} else {
			result = calculateFutureValue(presentValue, rate, years-1)*(1+rate);
		}
		return result;
	}
}
