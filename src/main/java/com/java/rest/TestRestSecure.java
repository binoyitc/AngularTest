package com.java.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.OPTIONS;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.error.OAuthError;
import org.apache.oltu.oauth2.common.exception.OAuthProblemException;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.apache.oltu.oauth2.common.message.OAuthResponse;
import org.apache.oltu.oauth2.common.message.types.ParameterStyle;
import org.apache.oltu.oauth2.common.utils.OAuthUtils;
import org.apache.oltu.oauth2.rs.request.OAuthAccessResourceRequest;
import org.apache.oltu.oauth2.rs.response.OAuthRSResponse;
import org.bson.Document;
import org.bson.types.ObjectId;

import com.java.db.MongoSingleton;
import com.java.models.Product;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;

import ch.cern.poc.oauth2.Common;
import ch.cern.poc.oauth2.Database;

@Path("/secure/shop")
public class TestRestSecure {	
	
	private Database database;

    public TestRestSecure() {
    	database = Database.getInstance();
	}
    
    @OPTIONS
    @Path("products/{id}")
    public Response getOptionsDelete(@Context HttpServletRequest request) throws OAuthSystemException {
    	Response response = verifyToken(request);
		if(response != null){
			return response;
		}
    	return optionsResult();
    }
    
    @OPTIONS
    @Path("/products")
    public Response getJobsOpts(@Context HttpServletRequest request) throws OAuthSystemException {
    	Response response = verifyToken(request);
		if(response != null){
			return response;
		}
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
	public Response getProducts(@Context HttpServletRequest request) throws IOException, OAuthSystemException {
		Response response = verifyToken(request);
		if(response != null){
			return response;
		}
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
	public Response getProduct(@PathParam("id") String id, @Context HttpServletRequest request) throws IOException, OAuthSystemException {
		Response response = verifyToken(request);
		if(response != null){
			return response;
		}
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
	public Response insertJSonProducts(Product product, @Context HttpServletRequest request) throws Exception {
		Response response = verifyToken(request);
		if(response != null){
			return response;
		}
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
	public Response updateProducts(Product product, @Context HttpServletRequest request) throws OAuthSystemException {
		Response response = verifyToken(request);
		if(response != null){
			return response;
		}
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
	public Response deleteProducts(@PathParam("id") String id, @Context HttpServletRequest request) throws OAuthSystemException {
		Response response = verifyToken(request);
		if(response != null){
			return response;
		}
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
	
	
	
	private Response verifyToken(HttpServletRequest request) throws OAuthSystemException{
    	System.out.println("inside /resource");
        try {
            // Make the OAuth Request out of this request
            OAuthAccessResourceRequest oauthRequest = new OAuthAccessResourceRequest(request, ParameterStyle.HEADER);
            // Get the access token
            String accessToken = oauthRequest.getAccessToken();

            // Validate the access token
            if (!database.isValidToken(accessToken)) {
                // Return the OAuth error message
                OAuthResponse oauthResponse = OAuthRSResponse
                        .errorResponse(HttpServletResponse.SC_UNAUTHORIZED)
                        .setRealm(Common.RESOURCE_SERVER_NAME)
                        .setError(OAuthError.ResourceResponse.INVALID_TOKEN)
                        .buildHeaderMessage();

                //return Response.status(Response.Status.UNAUTHORIZED).build();
                return Response.status(Response.Status.UNAUTHORIZED)
                        .header(OAuth.HeaderType.WWW_AUTHENTICATE,
                                oauthResponse.getHeader(OAuth.HeaderType.WWW_AUTHENTICATE))
                        .build();

            }

            //final String resources = ACCESS_TO_RESOURCES_COMMUNICATE + "\nYour accessToken: " + accessToken;

            // Return the resource when token is in db
            return null; //success
        } catch (OAuthProblemException e) {
            // Check if the error code has been set
            String errorCode = e.getError();
            if (OAuthUtils.isEmpty(errorCode)) {

                // Return the OAuth error message
                OAuthResponse oauthResponse = OAuthRSResponse
                        .errorResponse(HttpServletResponse.SC_UNAUTHORIZED)
                        .setRealm(Common.RESOURCE_SERVER_NAME)
                        .buildHeaderMessage();

                // If no error code then return a standard 401 Unauthorized response
                return Response.status(Response.Status.UNAUTHORIZED)
                        .header(OAuth.HeaderType.WWW_AUTHENTICATE,
                                oauthResponse.getHeader(OAuth.HeaderType.WWW_AUTHENTICATE))
                        .build();
            }

            OAuthResponse oauthResponse = OAuthRSResponse
                    .errorResponse(HttpServletResponse.SC_UNAUTHORIZED)
                    .setRealm(Common.RESOURCE_SERVER_NAME)
                    .setError(e.getError())
                    .setErrorDescription(e.getDescription())
                    .setErrorUri(e.getUri())
                    .buildHeaderMessage();

            return Response.status(Response.Status.BAD_REQUEST)
                    .header(OAuth.HeaderType.WWW_AUTHENTICATE, oauthResponse.getHeader(OAuth.HeaderType.WWW_AUTHENTICATE))
                    .build();
        }
    
	}
}