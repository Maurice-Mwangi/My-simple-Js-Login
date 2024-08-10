
const error_paragraph = document.getElementById("error");
const txtUsername = document.getElementById("username");
const txtPassword = document.getElementById("password");
const image_password_reavealer = document.getElementById("image-show");
const btnLogin = document.getElementById("btnLogin");
const btnClose = document.getElementById("btnCancel");

image_password_reavealer.addEventListener("dblclick", reveal_password);

function reveal_password(){
    if(txtPassword.type === 'password'){
        txtPassword.type = 'text';                          //first open the text box
        image_password_reavealer.src = 'eyes closed.jpg';   //second change the image


        //then set timer after 3 second everything gets back to normal
        setInterval(function(){
            txtPassword.type = 'password';                          //return text box as a password
            image_password_reavealer.src = 'eyes open.jpg';       //second return first image
        }, 3000);
    }
}

btnLogin.addEventListener("click", (e)=>{verifyData(e);});

function verifyData(e){

    error_paragraph.textContent = "";       //first clear the error section

    username = txtUsername.value;
    password = txtPassword.value;
    let error_message = "";
    let pass = true;

    if(username === "" || password === ""){
        pass = false;
        error_message += "\nNeither password nor username should be blank";
    }

    if(username.length > 20){
        pass = false;
        error_message += "\nUsername cannot have more than 20 characters";
    }

    if(password.length > 20){
        pass = false;
        error_message += "\nPassword cannot have more than 20 characters";
    }
       

    if(!pass){
        e.preventDefault();
        error_paragraph.textContent = error_message;
    }
}

btnClose.addEventListener('click', ()=>{
    let closeTab = confirm("Are you sure you want to leave this tab");
    if(closeTab){
        window.close();
    }
})