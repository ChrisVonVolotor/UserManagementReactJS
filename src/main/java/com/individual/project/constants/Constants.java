package com.individual.project.constants;

public interface Constants {
    static final String USERS = "/users";
    static final String GET_ALL_USERS ="/all";
    static final String SEARCH_ALL = "/search/{partial}";
    static final String SEARCH_FIRST_NAME = "/search/firstname/{partial}";
    static final String SEARCH_LAST_NAME = "/search/lastname/{partial}";
    static final String SEARCH_ACCOUNT_NUMBER = "/search/accountnumber/{exact}";
    static final String CREATE_USER = "/create";
    static final String UPDATE_USER = "/update/{exact}";
    static final String DELETE_USER = "/delete/{accountNumber}";

}
