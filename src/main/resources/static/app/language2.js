
var languageJSON;//= changeLanguage("en");
console.log(languageJSON);

function translate(text, tl){

    var key = "trnsl.1.1.20180705T185428Z.a53cd6b968ada498.0ffa444cf52f80bcc4c7b108f958fbfeac1e7570";
    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=' + key + '&text=' + text + '&lang=en-'+tl+'&format=plain';


var rtn = "";
     $.ajax({
        url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
        dataType: 'json',
        async:false,
        data: {
            key: "trnsl.1.1.20180705T185428Z.a53cd6b968ada498.0ffa444cf52f80bcc4c7b108f958fbfeac1e7570",
            text: text,  // text to translate
            lang: 'en-'+tl
        },success: function(result) {
            rtn =  result;
        },error: function(XMLHttpRequest, errorMsg) {
            console.log(errorMsg);
        }

});
    console.log(rtn);
    return rtn.text[0];
}

function storeInDatabase(storeJson) {
    $.ajax({
        url: "http://localhost:8080/translations/create",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(storeJson),
        success: function(result) {
            console.log(result)
        },
        error: function(xhr, ajaxOptions, thrownError) {
            toastr.error(xhr.responseJSON.message);
        }
    });
}


function populateDatabase(){



   var languages=["ta","tl","tt","te","tr","udm","uz","uk","ur","fi","hi","hr","cs","sv","gd","et","eo","jv","ja","fr","az","sq","am","en","ar","hy","af","eu", "ba", "be", "bn", "my", "bg", "bs", "cy", "hu", "vi", "ht", "gl", "nl", "mrj", "el", "ka", "gu", "da", "he", "yi", "id", "ga", "it", "is", "es", "kk", "kn", "ca", "ky","zh","ko","xh","km","lo","la","lv","lt","lb","mg","ms","ml","mt","mk","mi","mr","mhr","mn","de","ne","no","pa","pap","fa","pl","pt","ro","ru","ceb","sr","si","sk","sl","sw","su","tg","th","ti","ta","tt","te","tr","udm","uz","uk","ur","fi","hi","hr","cs","sv","gd","et","eo","jv","ja"];
    for (var x = 0; x < languages.length; x++){
        var translatedJSON = {
            "fName": translate("First Name", languages[x]),
            "lName": translate("Last Name", languages[x]),
            "fullName": translate("Full Name", languages[x]),
            "configuration": translate("configuration", languages[x]),
            "addButton": translate("Add", languages[x]),
            "searchBar": translate("Search", languages[x]),
            "titleText": translate("User Management", languages[x]),
            "alertText": translate("Please Insert both a First and Last Name", languages[x]),
            "editButton": translate("Edit", languages[x]),
            "deleteButton": translate("Remove", languages[x]),
            "saveButton": translate("Save", languages[x]),
            "cancelButton": translate("Cancel", languages[x]),
            "accountNo": translate("Account", languages[x]),
            "languageCode": languages[x]
        };

        storeInDatabase(translatedJSON);

    }
}

function changeLanguage(x){
    var url = "http://localhost:8080/translations/" + x;
    var rtn = {};
    $.ajax({
        url: url,
        async:false,
        success:function (data) {
            console.log(data[0]);
            rtn = data[0];


        }
    })
    return rtn;
}

//populateDatabase();