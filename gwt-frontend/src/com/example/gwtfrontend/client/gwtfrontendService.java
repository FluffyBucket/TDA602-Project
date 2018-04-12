package com.example.gwtfrontend.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("gwtfrontendService")
public interface gwtfrontendService extends RemoteService {
    // Sample interface method of remote interface
    String getMessage(String msg);

    /**
     * Utility/Convenience class.
     * Use gwtfrontendService.App.getInstance() to access static instance of gwtfrontendServiceAsync
     */
    public static class App {
        private static gwtfrontendServiceAsync ourInstance = GWT.create(gwtfrontendService.class);

        public static synchronized gwtfrontendServiceAsync getInstance() {
            return ourInstance;
        }
    }
}
