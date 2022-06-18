function handleClick (){
    const emailOutput= document.getElementById('email');

    if (emailOutput.value == ''){
        window.alert ("Please enter your email");

        // function handleClick();
    }
    else {
        console.log(emailOutput.value);
        emailOutput.value = '';
        location.href ="/success.html";
    }
    
    
}

function handleOkayClick (){
    location.href = "/index.html";
}