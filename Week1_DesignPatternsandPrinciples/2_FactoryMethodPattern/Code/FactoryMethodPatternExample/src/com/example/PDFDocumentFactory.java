package com.example;

public class PDFDocumentFactory extends DocumentFactory {
	public Document createDocument() {
		return new PDFDocument();
	}
}
