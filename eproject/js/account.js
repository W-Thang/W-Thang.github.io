function login () {
    var mail = document.loginform.email.value;
    atpos = mail.indexOf("@");
    dotpos = mail.lastIndexOf(".");
    var pwd = document.loginform.pwd.value;
    if(email==""){
        return false;
    }
    if(pwd==""){
        return false;
    }
    if( document.loginform.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.loginform.email.focus() ;
        return false;
}
