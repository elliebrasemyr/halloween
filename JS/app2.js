/*=================================================*/
/*===================SELECTORS=====================*/
/*=================================================*/
/*===FORM===*/
const form = document.querySelector('#form');
/*===OBJECT ATTRIBUTES===*/
const input = document.querySelector('#input');
const nr = document.querySelector('#nr');
const email = document.querySelector('#email');
/*===BTN===*/
const btn = document.querySelector('#btn');
/*===NEW PROFILE===*/
const profile = document.querySelector('#hex-list');

/*===LOADER===*/
const loader = document.querySelector('.loader-container');
const blurr = document.querySelector('.blurr');

/*=================================================*/
/*=================================================*/
/*===LOAD DIREKT===*/
countDown();

/*=================================================*/
/*======================EVENTS=====================*/
/*=================================================*/
form.addEventListener("submit", function(event){
    
    loaderLoading();
    
    if (input.value && nr.value && email.value){

        createNewListObject(input.value, nr.value, email.value);
        
        //Load random nr for img
        const image = document.querySelector('.hexa-pic');
        const random = Math.abs(Math.ceil(Math.random() *10 + 1) -3);

        const code = 
        `
        <li class="hex-item">
            <img class="hexa-pic" src="/IMAGE/profile/image_${random}.jpg" alt="">
            <div id="hex-title" class="hex-content">${input.value}</div>
            <span id="guests" class="guests">${nr.value}</span>    
        </li>   
        `;

        setTimeout(function(){
            profile.innerHTML += code;
            clearInputFields()
        }, 3000)
         
        }

    if(!input.value || !nr.value || !email.value){
        setTimeout(function(){
        if(!input.value){
            input.style.borderBottom = "#9F3620 2px solid";
            input.style.color = "#9F3620";
            input.value = '*';
        }
        if(!nr.value){
            nr.style.borderBottom = "#9F3620 2px solid";
            nr.style.color = "#9F3620";
            nr.value = '*';
        }
        if(!email.value){
            email.style.borderBottom = "#9F3620 2px solid";
            email.style.color = "#9F3620";
            email.value = '*';
        } 
        else if(input.value){
            input.style.borderBottom = "#151515 2px solid";
        }
        else if(nr.value){
            nr.style.borderBottom = "#151515 2px solid";
        }
        else if(email.value){
            email.style.borderBottom = "#151515 2px solid";
        }
        }, 3000)
    }
    
    event.preventDefault();
});

/*=================================================*/
/*===================FUNCTIONS=====================*/
/*=================================================*/

/*===CREATE AN OBJECT===*/
function createNewListObject(input, nr, email) {
const newObject = {
    objectTitle: input,
    objectGuest: nr,
    objectEmail: email
    };
};

/*===CLEAR INPUT VALUE & 
CHANGE BACK COLORS===*/
function clearInputFields(){
    input.value = "";
    nr.value = "";
    email.value = "";

    input.style.borderBottom = "#151515 2px solid";
    nr.style.borderBottom = "#151515 2px solid";
    email.style.borderBottom = "#151515 2px solid";

    input.style.color = "#151515";
    nr.style.color = "#151515";
    email.style.color = "#151515";
}

/*=== LOADER ===*/
function loaderLoading(){
    loader.style.display ="flex";
    blurr.style.display ="flex";
    
    setTimeout(function(){
        loader.style.display = 'none';
        blurr.style.display ="none";
        const body = document.querySelector('body');

    }, 3000)
}

/*=== COUNTDOWN ===*/
function countDown(){
// Set the date we're counting down to
let countDownDate = new Date("Nov 2, 2021 18:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

// Get today's date and time
let now = new Date().getTime();
    
// Find the distance between now and the count down date
let distance = countDownDate - now;
    
// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
    
// If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "LET'S PARTY";
  }
}, 1000);
}

/*IMAGE*/
/* function img(){
    const image = document.querySelector('.hexa-pic');
    const random = Math.abs(Math.ceil(Math.random() *10 + 1) -3);

    console.log(random);

    if(random != 0){
        image.setAttribute('src', `./IMAGE/profile/image_{random}.jpg`)

    } 
} */



/*========================================*/

/*========================================*/

/*========================================*/
