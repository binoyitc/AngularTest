package com.java.db;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;

public class MongoSingleton {
	private static MongoDatabase database = null;
	public static MongoDatabase getConnection(){
		if(MongoSingleton.database == null){
			MongoClientURI uri  = new MongoClientURI("mongodb://sa:sa@ds063546.mlab.com:63546/binoy"); 
	        @SuppressWarnings("resource")
			MongoClient mongoClient = new MongoClient(uri);
	        MongoSingleton.database = mongoClient.getDatabase("binoy");
		}
		return MongoSingleton.database;
	}

}
