/**
 * Created by cwgraff on 1/4/16.
 */
var storeData;

$.ajax('data.json').then(function(response){

    storeData = response;

    for(var i=0; i < response.length; i++) {

        var id = storeData[i].id;
        var gender = storeData[i].gender;
        var firstName = storeData[i].first_name;
        var lastName = storeData[i].last_name;
        var eMail = storeData[i].email;

        //console.log(firstName);

        if(!eMail) {
            $('.appendHere').append("<br/><br/>ID #" + id + "<br/>Gender: " + gender + "<br/>Name: " + firstName + " " + lastName);
        }
        else {
            $('.appendHere').append("<br/><br/>ID #" + id + "<br/>Gender: " + gender + "<br/>Name: " + firstName + " " + lastName + "<br/>E-Mail: " + eMail);
        }
    }
});