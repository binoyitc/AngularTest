package com.java.rest.oauth2.endpoints;

import ch.cern.poc.oauth2.Database;
import org.apache.oltu.oauth2.as.issuer.MD5Generator;
import org.apache.oltu.oauth2.as.issuer.OAuthIssuer;
import org.apache.oltu.oauth2.as.issuer.OAuthIssuerImpl;
import org.apache.oltu.oauth2.as.request.OAuthTokenRequest;
import org.apache.oltu.oauth2.as.response.OAuthASResponse;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.error.OAuthError;
import org.apache.oltu.oauth2.common.exception.OAuthProblemException;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.apache.oltu.oauth2.common.message.OAuthResponse;
import org.apache.oltu.oauth2.common.message.types.GrantType;

import com.sys.OAuthRequestWrapper;

import java.util.Enumeration;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

/**
 * Class responsible for returning tokens.
 * Created by tr0k on 2016-07-28.
 */
@Path("/token")
public class TokenEndpoint {
	//@Inject
    private Database database;

    public TokenEndpoint() {
    	database = Database.getInstance();
	}
    @POST
    @Consumes("application/x-www-form-urlencoded")
    @Produces("application/json")
    public Response authorize(@Context HttpServletRequest request, MultivaluedMap<String, String> form) throws OAuthSystemException {
    	System.out.println("inside /token");
    	
    	Enumeration<String> headerNames = request.getHeaderNames();
		while (headerNames.hasMoreElements()) {
			String headerName = headerNames.nextElement();
			System.out.println("Header Name:" + headerName);
			String headerValue = request.getHeader(headerName);
			System.out.println("Header Value:" + headerValue);
			System.out.println("\n");
		}
    	
    	
        try {
            OAuthTokenRequest oauthRequest = new OAuthTokenRequest(new OAuthRequestWrapper(request, form));
            OAuthIssuer oauthIssuerImpl = new OAuthIssuerImpl(new MD5Generator());
            System.out.println("oauthRequest : "  + oauthRequest.toString());
            System.out.println("inside /token getClientId: " + oauthRequest.getClientId());
            System.out.println("inside /token client_secret : " + oauthRequest.getClientSecret());
            
            if (!database.verifyClientIdSecret(oauthRequest.getClientId(), oauthRequest.getClientSecret())) {            	
                return Response.status(401).entity("Invalid Client ID & Secret").build();
            }
            
            // fake check of client id and client secret

            // check for grant types
            // code - tells the service that we have an authorization code and would like to have token
            if (oauthRequest.getParam(OAuth.OAUTH_GRANT_TYPE).equals(GrantType.AUTHORIZATION_CODE.toString())) {
                if (!checkAuthCode(oauthRequest.getParam(OAuth.OAUTH_CODE))) {
                    return buildBadAuthCodeResponse();
                }
            }

            // create and add new token to database for a given user
            final String accessToken = oauthIssuerImpl.accessToken();
            database.addToken(accessToken);

            // send respons with token
            OAuthResponse response = OAuthASResponse
                    .tokenResponse(HttpServletResponse.SC_OK)
                    .setAccessToken(accessToken)
                    .setExpiresIn("2")
                    .buildJSONMessage();
            System.out.println("response.getBody() : " + response.getBody());
            Response finalResponse = Response.status(response.getResponseStatus()).entity(response.getBody()).build();
            return finalResponse;

        } catch (OAuthProblemException e) {
        	e.printStackTrace();
            OAuthResponse res = OAuthASResponse.errorResponse(HttpServletResponse.SC_BAD_REQUEST).error(e)
                    .buildJSONMessage();
            return Response.status(res.getResponseStatus()).entity(res.getBody()).build();
        }catch (OAuthSystemException e) {
			e.printStackTrace();
			throw e;
		}/*catch (Exception e) {
			e.printStackTrace();
			throw e;
		}*/
    }

    private Response buildBadAuthCodeResponse() throws OAuthSystemException {
        OAuthResponse response = OAuthASResponse
                .errorResponse(HttpServletResponse.SC_BAD_REQUEST)
                .setError(OAuthError.TokenResponse.INVALID_GRANT)
                .setErrorDescription("Invalid authorization code")
                .buildJSONMessage();
        return Response.status(response.getResponseStatus()).entity(response.getBody()).build();
    }

    private boolean checkAuthCode(String authCode) {
        return database.isValidAuthCode(authCode);
    }
}
