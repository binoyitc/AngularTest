package com.java.rest;

import java.io.IOException;

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

import com.java.db.MongoSingleton;
import com.mongodb.client.MongoCollection;

@Path("/shop")
public class TestRest {

	// http://localhost:8080/NGDSDMISSO/rest/shop/products
	@GET
	@Path("products")
	@Produces(MediaType.APPLICATION_JSON)
	public String getProducts() throws IOException {
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

	@POST
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public Response insertProducts(@FormParam("name") String name, @FormParam("sku") String sku,
			@FormParam("price") int price) throws Exception {

		System.out.println("name:" + name + " sku:" + sku + " Price:" + price);
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		Document document = new Document("name", name).append("sku", sku).append("price", price);
		collection.insertOne(document);
		return Response.status(200).entity("Product Insurted").build();
	}

	@PUT
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateProducts(@FormParam("name") String name, @FormParam("sku") String sku,
			@FormParam("price") int price) throws Exception {
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");

		return Response.status(200).entity("Product updated").build();
	}

	@DELETE
	@Path("/products/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteProducts(@PathParam("id") String id) {
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		return Response.status(200).entity("Product deteted").build();
	}
}