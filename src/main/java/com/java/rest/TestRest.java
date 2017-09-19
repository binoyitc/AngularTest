package com.java.rest;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.java.db.MongoSingleton;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

@Path("/shop")
public class TestRest {

	//http://localhost:8080/NGDSDMISSO/rest/shop/products
	@GET
    @Path("products")
    @Produces(MediaType.APPLICATION_JSON)
    public String test() throws IOException {
    	//http://localhost:8080/dmi/sso?dealername=A1234
    	String result = "";
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("users");
			Document myDoc = collection.find().first();
			result = myDoc.toJson();
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return result;
    }
}
