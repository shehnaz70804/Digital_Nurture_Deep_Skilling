package com.library.repository;

public class BookRepository {
    private String dbName;

    public void setDbName(String dbName) {
        this.dbName = dbName;
    }

    public void save(String title) {
        System.out.println("BookRepository: Saving '" + title + "' to database: " + dbName);
    }
}
