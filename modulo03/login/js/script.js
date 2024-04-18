$(document).ready(function (){
 $('form').submit(function(evnt){
    let user = $('#user').val();
    let pwd = $('#pwd').val();

    if (user == "john@gmail.com" && pwd == "secreto") {
        alert("Welcome!");
    } else {
        alert("User or Password is incorrect!");
    }

    });
});