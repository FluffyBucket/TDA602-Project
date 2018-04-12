package com.example.gwtfrontend.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface gwtfrontendServiceAsync {
    void getMessage(String msg, AsyncCallback<String> async);
}
