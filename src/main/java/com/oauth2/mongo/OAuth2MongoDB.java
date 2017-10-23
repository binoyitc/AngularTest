package com.oauth2.mongo;

import java.util.Date;
import java.util.Iterator;

import org.bson.BSONObject;
import org.bson.Document;
import org.bson.types.ObjectId;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class OAuth2MongoDB {

	/*public static void main(String[] args) {
		//mongodb://<dbuser>:<dbpassword>@ds063546.mlab.com:63546/binoy
		OAuth2MongoDB testMongo = new OAuth2MongoDB();
        MongoDatabase database =testMongo.getDatabase();
        System.out.println("checkClientId : " + testMongo.verifyClientId(database, "abc"));
        System.out.println("checkClientIdSecret : " + testMongo.verifyClientIdSecret(database, "abc", "abc123"));
        
        testMongo.addAuthCode(database, "123abc");
        System.out.println("isValidAuthCode" + testMongo.isValidAuthCode(database, "123abc"));
        
        testMongo.addToken(database, "123abcToken");
        System.out.println("isValidToken" + testMongo.isValidToken(database, "123abcToken"));
	}*/
	public MongoDatabase getDatabase(){
		MongoClientURI uri  = new MongoClientURI("mongodb://sa:sa@ds063546.mlab.com:63546/binoy"); 
        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase database = mongoClient.getDatabase("binoy");
        return database;
	}
	public void addAuthCode(MongoDatabase database, String authCode){		
		MongoCollection<Document> collection = database.getCollection("oauth2_authcodes");
		Document document = new Document("authcode", authCode).append("createdate",new Date());
		collection.insertOne(document);
	}
	
	public boolean isValidAuthCode(MongoDatabase database, String authCode){		
		MongoCollection<Document> collection = database.getCollection("oauth2_authcodes");
		BasicDBObject query = new BasicDBObject();
        query.put("authcode", authCode);
        FindIterable<Document> cursor3 =collection.find(query);
        Iterator itr3 = cursor3.iterator();
        boolean result = false;
        while(itr3.hasNext()) {
        	itr3.next();
        	//System.out.println(itr3.next());
            result = true;
            break;
        } 
        return result;
	}
	
	public void addToken(MongoDatabase database, String token) {
		MongoCollection<Document> collection = database.getCollection("oauth2_tokens");
		Document document = new Document("token", token).append("createdate",new Date());
		collection.insertOne(document);
    }

    public boolean isValidToken(MongoDatabase database, String token) {
    	MongoCollection<Document> collection = database.getCollection("oauth2_tokens");
		BasicDBObject query = new BasicDBObject();
        query.put("token", token);
        FindIterable<Document> cursor3 =collection.find(query);
        Iterator itr3 = cursor3.iterator();
        boolean result = false;
        while(itr3.hasNext()) {
        	itr3.next();
        	//System.out.println(itr3.next());
            result = true;
            break;
        } 
        return result;
    }
	
    public boolean verifyClientId(MongoDatabase database, String clientId) {
		MongoCollection<Document> collection = database.getCollection("oauth2_client_id_secret");
		BasicDBObject query = new BasicDBObject();
        query.put("clientid", clientId);
        FindIterable<Document> cursor3 =collection.find(query);
		//FindIterable<Document> cursor3 =collection.find();
        Iterator itr3 = cursor3.iterator();
        boolean result = false;
        while(itr3.hasNext()) {
        	itr3.next();//System.out.println(itr3.next());
            result = true;
            break;
        } 
        return result;
	}
    public boolean verifyClientIdSecret(MongoDatabase database, String clientId, String clientSecret) {
		MongoCollection<Document> collection = database.getCollection("oauth2_client_id_secret");
		BasicDBObject query = new BasicDBObject();
        query.put("clientid", clientId);
        query.put("clientsecret", clientSecret);
        FindIterable<Document> cursor3 =collection.find(query);
		//FindIterable<Document> cursor3 =collection.find();
        Iterator itr3 = cursor3.iterator();
        boolean result = false;
        while(itr3.hasNext()) {
        	itr3.next();//System.out.println(itr3.next());
            result = true;
            break;
        }
        return result;
	}

}
