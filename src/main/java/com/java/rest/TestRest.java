package com.java.rest;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/shop")
public class TestRest {

	//http://localhost:8080/NGDSDMISSO/rest/shop/products
	@GET
    @Path("products")
    @Produces(MediaType.TEXT_PLAIN)
    public String test() throws IOException {
    	//http://localhost:8080/dmi/sso?dealername=A1234
    	String result = "";
		try {
			result = "test";
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return result;
    }
}
