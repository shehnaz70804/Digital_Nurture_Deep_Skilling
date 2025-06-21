package com.example;

public class Searching {
	public static Product linearSearch(Product[] products, String name) {
		Product result= null;
		for(Product product: products) {
			if(product.getProductName().equalsIgnoreCase(name)) {
				result = product;
				break;
			}
		}
		return result;
	}
	
	public static Product binarySearch(Product[] products, String name) {
		Product result = null;
		int low = 0;
		int high = products.length-1;
		
		while(low<=high) {
			int mid = (low+high)/2;
			int cmp = products[mid].getProductName().compareToIgnoreCase(name);
			if(cmp==0) {
				result = products[mid];
				break;
			}
			else if(cmp<0) low = mid+1;
			else high = mid-1;
		}
		
		return result;
	}
}
