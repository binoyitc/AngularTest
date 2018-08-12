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
import com.java.models.ScheduleJobs;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;

@Path("/schedule")
public class Scheduler {	
    
    @OPTIONS
    @Path("jobs/{id}")
    public Response getOptionsDelete() {
    	return optionsResult();
    }
    
    @OPTIONS
    @Path("/jobs")
    public Response getJobsOpts() {
      return optionsResult();
    }

	private Response createReturn(Object obj) {
		return Response.ok() // Response.status(200)
				.entity(obj).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS").build();
	}

	@GET // working
	@Path("jobs")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProducts() throws IOException {
		// http://localhost:8080/NGDSDMISSO/rest/shop/products
		System.out.println("GET for all jobs");
		ArrayList<ScheduleJobs> list = new ArrayList<ScheduleJobs>();
		String result = "";
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("schedulejobs");
			//Document myDoc = collection.find();
			FindIterable<Document> cursor3 = collection.find();
			Iterator itr3 = cursor3.iterator();
			while (itr3.hasNext()) {
				list.add(createJobObj((Document) itr3.next()));
			}
			//result = list.toString();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return createReturn(list);
	}

	@GET // working
	@Path("jobs/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getProduct(@PathParam("id") String id) throws IOException {
		// http://localhost:8080/AngularTest/rest/shop/product/59b1ebb8e08f7529d8d8f94f
		System.out.println("GET for Find-->id:" + id);
		//String result = "";
		Document myDoc = null;
		try {
			MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("schedulejobs");
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
		return createReturn(createJobObj(myDoc));
	}

	@POST
	@Path("/jobs")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insertJSonProducts(ScheduleJobs jobs) throws Exception {
		System.out.println("JSON POST for Insert: " + jobs.toString());
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("schedulejobs");
		Document document = new Document("name", jobs.getName())
				.append("description" , jobs.getDescription())
				.append("time" , jobs.getTime())
				.append("date" , jobs.getDate())
				.append("repeat" , jobs.isRepeat()) 
				.append("daily" , jobs.isDaily()) 
				.append("weekly" , jobs.isWeekly())
				.append("monthly", jobs.isMonthly())
				.append("yearly" , jobs.isYearly())
				.append(" monday" , jobs.isMonday()) 
				.append("tuesday" , jobs.isTuesday()) 
				.append("wednesday", jobs.isWednesday()) 
				.append("thursday", jobs.isThursday()) 
				.append("friday" , jobs.isFriday()) 
				.append("allDayEvent" , jobs.isAllDayEvent()); 
		collection.insertOne(document);
		return createReturn(createJobObj(document));
	}

	@PUT
	@Path("/jobs")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateProducts(ScheduleJobs jobs) {
		System.out.println("JSON POST for Insert: " + jobs.toString());
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("schedulejobs");
		Document document = new Document("name", jobs.getName())
				.append("description" , jobs.getDescription())
				.append("time" , jobs.getTime())
				.append("date" , jobs.getDate())
				.append("repeat" , jobs.isRepeat()) 
				.append("daily" , jobs.isDaily()) 
				.append("weekly" , jobs.isWeekly())
				.append("monthly", jobs.isMonthly())
				.append("yearly" , jobs.isYearly())
				.append(" monday" , jobs.isMonday()) 
				.append("tuesday" , jobs.isTuesday()) 
				.append("wednesday", jobs.isWednesday()) 
				.append("thursday", jobs.isThursday()) 
				.append("friday" , jobs.isFriday()) 
				.append("allDayEvent" , jobs.isAllDayEvent()); 
		BasicDBObject query = new BasicDBObject();
		query.put("_id", new ObjectId(jobs.getId()));
		collection.replaceOne(query, document);
		return createReturn(createJobObj(document));

	}

	@DELETE
	@Path("/jobs/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteProducts(@PathParam("id") String id) {
		MongoCollection<Document> collection = MongoSingleton.getConnection().getCollection("schedulejobs");
		/*
		 * BasicDBObject query = new BasicDBObject(); query.put("_id", new
		 * ObjectId(id));
		 */
		System.out.println("inside delete");
		Document document = new Document("_id", new ObjectId(id));
		collection.deleteOne(document);
		return createReturn(createJobObj(document));
	}
	private Response optionsResult(){
    	return Response.ok()
    	        .header("Access-Control-Allow-Origin", "*")
    	        .header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, OPTIONS, DELETE")
    	        .header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With").build();
    }
	
	private ScheduleJobs createJobObj(Document document){
		ScheduleJobs job = new ScheduleJobs();
		job.setId(document.get("_id") != null? document.get("_id").toString() : "");
		job.setName(document.get("name") != null? (String)document.get("name"): "" );		
		job.setDescription(document.get("description") != null? (String)document.get("description") : "");
		job.setTime(document.get("time") != null? (String)document.get("time") : "");
		job.setDate(document.get("date") != null? (String)document.get("date") : "");
		job.setRepeat(document.get("repeat") != null? (boolean)document.get("repeat") : false);
		job.setDaily(document.get("daily") != null? (boolean)document.get("daily") : false);
		job.setWeekly(document.get("weekly") != null? (boolean)document.get("weekly") : false);
		job.setMonthly(document.get("monthly") != null? (boolean)document.get("monthly") : false);
		job.setYearly(document.get("yearly") != null? (boolean)document.get("yearly") : false);
		job.setMonday(document.get("monday") != null? (boolean)document.get("monday") : false);
		job.setTuesday(document.get("tuesday") != null? (boolean)document.get("tuesday") : false);
		job.setWednesday(document.get("wednesday") != null? (boolean)document.get("wednesday") : false);
		job.setThursday(document.get("thursday") != null? (boolean)document.get("thursday") : false);
		job.setFriday(document.get("friday") != null? (boolean)document.get("friday") : false);
		job.setAllDayEvent(document.get("allDayEvent") != null? (boolean)document.get("allDayEvent") : false);
		return job;
	}
}