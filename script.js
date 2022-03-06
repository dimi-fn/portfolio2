// <button class="hamburger" id="hamburger">
const hamburgerButton = document.getElementById("hamburger"); 
hamburgerButton.addEventListener("click" , toggleButton)
//console.log(hamburgerButton);

const navList = document.getElementById("nav-list"); // <ul id="nav-list">
//console.log(navList);

function toggleButton(){
    navList.classList.toggle("show")
};

/* Input validation for contact form */
const validateForm = async() =>{
        document.querySelector('.status').style.color = "red";
        const name =  document.getElementById('name').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty!";
            return false;
        }
        const email =  document.getElementById('email').value;
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty!";
            return false;
        } else {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                document.querySelector('.status').innerHTML = "Email format invalid!";
                return false;
            }
        }
        const subject =  document.getElementById('subject').value;
        if (subject == "") {
            document.querySelector('.status').innerHTML = "Subject cannot be empty!";
            return false;
        }
        const message =  document.getElementById('message').value;
        if (message == "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty!";
            return false;
        }
        
        document.querySelector('.status').innerHTML = "Sending...";
        document.querySelector('.status').style.color  = "black";
        document.querySelector('.status').style.fontWeight  = "bold";
       
        // wait 1000ms before submitting (in order to display the message "Sending")
        // Using asynchronous function in order to use the setTimeout function before "submit"
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        document.getElementById('contact-form').submit();
          
      };
    