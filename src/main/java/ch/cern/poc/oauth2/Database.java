package ch.cern.poc.oauth2;

import com.mongodb.client.MongoDatabase;

/**
 * Fake, basic databaase to store authentication codes and tokens for valid users.
 * Created by tr0k on 2016-07-28.
 */
//@ApplicationScoped
public class Database {
	
	private static Database database = null;
	
	public static Database getInstance(){
		if(database == null){
			database = new Database();
		}
		return database;
	}
	
    /*private Set<String> authCodes = new HashSet<>();
    private Set<String> tokens = new HashSet<>();*/
	private MongoDatabase mongoDatabase;
	com.oauth2.mongo.OAuth2MongoDB oAuth2MongoDB;
	
	public Database() {
		oAuth2MongoDB = new com.oauth2.mongo.OAuth2MongoDB();
		mongoDatabase = oAuth2MongoDB.getDatabase();
	}
	
    public void addAuthCode(String authCode) {
    	oAuth2MongoDB.addAuthCode(mongoDatabase, authCode);
    }

    public boolean isValidAuthCode(String authCode) {
    	return oAuth2MongoDB.isValidAuthCode(mongoDatabase, authCode);
    }

    public void addToken(String token) {
    	oAuth2MongoDB.addToken(mongoDatabase, token);
    }

    public boolean isValidToken(String token) {
    	return oAuth2MongoDB.isValidToken(mongoDatabase, token);
    }
    
    public boolean verifyClientIdSecret(String clientId, String clientSecret){
    	return oAuth2MongoDB.verifyClientIdSecret(mongoDatabase, clientId, clientSecret);
    }
    public boolean verifyClientId(String clientId){
    	return oAuth2MongoDB.verifyClientId(mongoDatabase, clientId);
    }

}
