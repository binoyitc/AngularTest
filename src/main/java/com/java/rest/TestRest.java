package com.java.rest;

import java.io.IOException;
import java.util.Iterator;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.Document;
import org.bson.types.ObjectId;

import com.java.db.MongoSingleton;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;

@Path("/shop")
public class TestRest {

	@GET //working
	@Path("products")
	@Produces(MediaType.APPLICATION_JSON)
	public String getProducts() throws IOException {
		// http://localhost:8080/NGDSDMISSO/rest/shop/products
		System.out.println("GET for all records");
		String result = "";
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
			Document myDoc = collection.find().first();
			result = myDoc.toJson();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	@GET //working
	@Path("product/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProduct(@PathParam("id") String id) throws IOException {
		//http://localhost:8080/AngularTest/rest/shop/product/59b1ebb8e08f7529d8d8f94f
		System.out.println("GET for Find-->id:" + id);
		String result = "";
		Document myDoc = null;
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
			BasicDBObject query = new BasicDBObject();
	        query.put("_id", new ObjectId(id));
	        FindIterable<Document> cursor3 =collection.find(query);
	        Iterator itr3 = cursor3.iterator();
	        while(itr3.hasNext()) {
	        	myDoc =(Document) itr3.next();
	        }
		} catch (Exception e) {
			e.printStackTrace();
		}
		result = myDoc.toJson();
		return Response.status(200).entity(result).build();
	}

	@POST //working
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public Response insertProducts(@FormParam("name") String name, @FormParam("sku") String sku,
			@FormParam("price") int price) throws Exception {
		System.out.println("POST for Insert-->name:" + name + " sku:" + sku + " Price:" + price);
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		Document document = new Document("name", name).append("sku", sku).append("price", price);
		collection.insertOne(document);
		return Response.status(200).entity(document.toJson()).build();
	}

	@PUT
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public Response updateProducts(@FormParam("id") String id, @FormParam("name") String name, @FormParam("sku") String sku,
			@FormParam("price") int price) throws Exception {
		System.out.println("PUT for Update --> name:" + name + " sku:" + sku + " Price:" + price);
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		Document document = new Document("name", name).append("sku", sku).append("price", price);
		BasicDBObject query = new BasicDBObject();
        query.put("_id", new ObjectId(id));
		collection.updateOne(query,document);
		return Response.status(200).entity(document.toJson()).build();
	}

	@DELETE
	@Path("/products/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteProducts(@PathParam("id") String id) {
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		return Response.status(200).entity("Product deteted").build();
	}
}