package com.java.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.OPTIONS;
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
import com.java.models.Product;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;

@Path("/shop")
public class TestRest {	
    
    @OPTIONS
    @Path("products/{id}")
    public Response getOptionsDelete() {
    	return optionsResult();
    }
    
    @OPTIONS
    @Path("/products")
    public Response getJobsOpts() {
      return optionsResult();
    }

	private Response createReturn(Object obj) {
		return Response.ok() // Response.status(200)
				.entity(obj).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS").build();
	}

	@GET // working
	@Path("products")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProducts() throws IOException {
		// http://localhost:8080/NGDSDMISSO/rest/shop/products
		System.out.println("GET for all records");
		ArrayList<Product> list = new ArrayList<Product>();
		String result = "";
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
			//Document myDoc = collection.find();
			FindIterable<Document> cursor3 = collection.find();
			Iterator itr3 = cursor3.iterator();
			while (itr3.hasNext()) {
				list.add(createProduct((Document) itr3.next()));
			}
			//result = list.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return createReturn(list);
	}

	@GET // working
	@Path("products/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProduct(@PathParam("id") String id) throws IOException {
		// http://localhost:8080/AngularTest/rest/shop/product/59b1ebb8e08f7529d8d8f94f
		System.out.println("GET for Find-->id:" + id);
		//String result = "";
		Document myDoc = null;
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
			BasicDBObject query = new BasicDBObject();
			query.put("_id", new ObjectId(id));
			FindIterable<Document> cursor3 = collection.find(query);
			Iterator itr3 = cursor3.iterator();
			while (itr3.hasNext()) {
				myDoc = (Document) itr3.next();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		//result = myDoc.toJson();
		return createReturn(createProduct(myDoc));
	}

	@POST
	@Path("/products")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insertJSonProducts(Product product) throws Exception {
		System.out.println("JSON POST for Insert-->name:" + product.getName() + " sku:" + product.getSku() + " Price:"
				+ product.getPrice());
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		Document document = new Document("name", product.getName()).append("sku", product.getSku()).append("price",
				product.getPrice());
		collection.insertOne(document);
		return createReturn(createProduct(document));
	}

	@PUT
	@Path("/products")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateProducts(Product product) {
		System.out.println("JSON PUT for Update --> name:" + product.getName() + " sku:" + product.getSku() + " Price:"
				+ product.getPrice());
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		Document document = new Document("name", product.getName()).append("sku", product.getSku()).append("price",
				product.getPrice());
		BasicDBObject query = new BasicDBObject();
		query.put("_id", new ObjectId(product.getId()));
		collection.replaceOne(query, document);
		return createReturn(createProduct(document));

	}

	@DELETE
	@Path("/products/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteProducts(@PathParam("id") String id) {
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("products");
		/*
		 * BasicDBObject query = new BasicDBObject(); query.put("_id", new
		 * ObjectId(id));
		 */
		Document document = new Document("_id", new ObjectId(id));
		collection.deleteOne(document);
		return createReturn(createProduct(document));
	}
	private Response optionsResult(){
    	return Response.ok()
    	        .header("Access-Control-Allow-Origin", "*")
    	        .header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, OPTIONS, DELETE")
    	        .header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With").build();
    }
	
	private Product createProduct(Document document){
		Product product = new Product();
		product.setId(document.get("_id") != null? document.get("_id").toString() : "");
		product.setName(document.get("name") != null? (String)document.get("name"): "" );
		product.setSku(document.get("sku") != null? (String)document.get("sku") : "");
		product.setPrice(document.get("price")  != null? (Integer)document.get("price"): 0);		
		return product;
	}
}