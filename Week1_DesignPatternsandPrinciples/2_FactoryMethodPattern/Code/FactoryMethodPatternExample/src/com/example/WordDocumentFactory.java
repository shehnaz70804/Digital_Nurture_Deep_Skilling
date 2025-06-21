package com.example;

public class WordDocumentFactory extends DocumentFactory {
	public Document createDocument() {
		return new WordDocument();
	}
}
