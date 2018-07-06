package com.individual.project.Users;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class TranslationCreation {
    private String fName;
    private String lName;
    private String fullName;
    private String configuration;
    private String accountNo;
    private String addButton;
    private String searchBar;
    private String titleText;
    private String alertText;
    private String editButton;
    private String deleteButton;
    private String saveButton;
    private String cancelButton;
    private String languageCode;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long translationNumber;

    public TranslationCreation(){}

    public TranslationCreation(String fName, String lName, String fullName, String addButton, String configuration, String searchBar, String titleText, String alertText, String editButton,
                               String deleteButton, String saveButton, String cancelButton,String accountNo, String languageCode){
        this.fName=fName;
        this.lName=lName;
        this.fullName=fullName;
        this.configuration=configuration;
        this.addButton=addButton;
        this.searchBar=searchBar;
        this.titleText=titleText;
        this.alertText=alertText;
        this.editButton=editButton;
        this.deleteButton=deleteButton;
        this.saveButton=saveButton;
        this.cancelButton=cancelButton;
        this.languageCode=languageCode;
        this.accountNo=accountNo;
    }

    public String getaccountNo() {
        return accountNo;
    }

    public String getfName() {
        return fName;
    }

    public String getaddButton() {
        return addButton;
    }

    public String getlName() {
        return lName;
    }

    public String getconfiguration() {
        return configuration;
    }

    public String getFullName() {
        return fullName;
    }

    public String getalertText() {
        return alertText;
    }

    public String getCancelButton() {
        return cancelButton;
    }

    public String getdeleteButton() {
        return deleteButton;
    }

    public String geteditButton() {
        return editButton;
    }

    public String getlanguageCode() {
        return languageCode;
    }

    public String getsaveButton() {
        return saveButton;
    }

    public String getsearchBar() {
        return searchBar;
    }

    public String gettitleText() {
        return titleText;
    }

    public long getTranslationNumber() {
        return translationNumber;
    }

    @Override
    public String toString() {
        return getTranslationNumber() + ": " + getlanguageCode();
    }


}