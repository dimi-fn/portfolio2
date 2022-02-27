// <button class="hamburger" id="hamburger">
const hamburgerButton = document.getElementById("hamburger") 

const navList = document.getElementById("nav-list") // <ul id="nav-list">

function toggleButton(){
    navList.classList.toggle("show")
}

/* Without async function and without time delay for the message "Sending..."*/
// // Contact Form Validation 
// function validateForm() {
//     var name =  document.getElementById('name').value;
//     if (name == "") {
//         document.querySelector('.status').innerHTML = "Name cannot be empty!";
//         return false;
//     }
//     var email =  document.getElementById('email').value;
//     if (email == "") {
//         document.querySelector('.status').innerHTML = "Email cannot be empty!";
//         return false;
//     } else {
//         var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         if(!re.test(email)){
//             document.querySelector('.status').innerHTML = "Email format invalid!";
//             return false;
//         }
//     }
//     var subject =  document.getElementById('subject').value;
//     if (subject == "") {
//         document.querySelector('.status').innerHTML = "Subject cannot be empty!";
//         return false;
//     }
//     var message =  document.getElementById('message').value;
//     if (message == "") {
//         document.querySelector('.status').innerHTML = "Message cannot be empty!";
//         return false;
//     }
    
//     document.querySelector('.status').innerHTML = "Sending...";
   
   
//     document.getElementById('contact-form').submit();

//   };


// Using asynchronous function in order to use the setTimeout function before "submit"
const validateForm = async() =>{
        var name =  document.getElementById('name').value;
        if (name == "") {
            document.querySelector('.status').innerHTML = "Name cannot be empty!";
            return false;
        }
        var email =  document.getElementById('email').value;
        if (email == "") {
            document.querySelector('.status').innerHTML = "Email cannot be empty!";
            return false;
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(email)){
                document.querySelector('.status').innerHTML = "Email format invalid!";
                return false;
            }
        }
        var subject =  document.getElementById('subject').value;
        if (subject == "") {
            document.querySelector('.status').innerHTML = "Subject cannot be empty!";
            return false;
        }
        var message =  document.getElementById('message').value;
        if (message == "") {
            document.querySelector('.status').innerHTML = "Message cannot be empty!";
            return false;
        }
        
        document.querySelector('.status').innerHTML = "Sending...";
       
        // wait 1000ms before submitting (in order to display the message "Sending")
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        document.getElementById('contact-form').submit();
          
      };
    