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

public class TestMongo {

	public static void main(String[] args) {
		//mongodb://<dbuser>:<dbpassword>@ds063546.mlab.com:63546/binoy
		MongoClientURI uri  = new MongoClientURI("mongodb://sa:sa@ds063546.mlab.com:63546/binoy"); 
        MongoClient mongoClient = new MongoClient(uri);
        MongoDatabase database = mongoClient.getDatabase("binoy");
        MongoCollection<Document> collection = database.getCollection("products");
        //single Find all
        FindIterable<Document> cursor = collection.find();
        Iterator itr = cursor.iterator();
        while(itr.hasNext()) {
            System.out.println(itr.next());
        }
        
        //Filter for search
        System.out.println("Filter for search");
        BasicDBObject gtQuery = new BasicDBObject();
        gtQuery.put("price", new BasicDBObject("$gt", 98));
        FindIterable<Document> cursor2 =collection.find(gtQuery);
        Iterator itr2 = cursor2.iterator();
        while(itr2.hasNext()) {
            System.out.println(itr2.next());
        }        
        //insert data
        //Document document = new Document("name", "Binoy199").append("sku", "sku199").append("price", 199);
		//collection.insertOne(document);
		
        //find with ID
        System.out.println("find with ID");
        BasicDBObject query = new BasicDBObject();
        query.put("_id", new ObjectId("59b1ebb8e08f7529d8d8f94f"));
        FindIterable<Document> cursor3 =collection.find(query);
        Iterator itr3 = cursor3.iterator();
        while(itr3.hasNext()) {
            System.out.println(itr3.next());
        }        
        
        
        
	}
}
