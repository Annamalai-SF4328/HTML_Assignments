function DoFirst() {
    var submit = document.getElementById("submit");
    submit.addEventListener("click", SaveCrap, false);
}

function SaveCrap() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var website = document.getElementById("website").value;
    var message = document.getElementById("message").value;

    sessionStorage.setItem("name1", name);
    sessionStorage.setItem('email1', email);
    sessionStorage.setItem('phone1', phone);
    sessionStorage.setItem('website1', website);
    sessionStorage.setItem('message1', message);

    Display();
    
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="" ;
    document.getElementById("website").value="" ;
    document.getElementById("message").value="" ;
}
function Display() {
    var resultBox = document.getElementById("resultBox");
    var name = sessionStorage.getItem('name1');
    var email = sessionStorage.getItem('email1');
    var phone = sessionStorage.getItem('phone1');
    var website = sessionStorage.getItem('website1');
    var message = sessionStorage.getItem('message1');

    resultBox.innerHTML = "<h5>We have received:</h5>" + "Name: " + name + "<br>Email Address: " + email + "<br>Phone: " + phone + "<br>Website: " + website + "<br>Message: " + message + "<br>Thankyou";
}
window.addEventListener("load", DoFirst, false);

