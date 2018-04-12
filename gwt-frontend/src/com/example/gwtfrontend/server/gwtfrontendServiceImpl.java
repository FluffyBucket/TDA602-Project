package com.example.gwtfrontend.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.example.gwtfrontend.client.gwtfrontendService;

public class gwtfrontendServiceImpl extends RemoteServiceServlet implements gwtfrontendService {
    // Implementation of sample interface method
    public String getMessage(String msg) {
        return "Client said: \"" + msg + "\"<br>Server answered: \"Hi!\"";
    }
}