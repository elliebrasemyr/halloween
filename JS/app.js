/*===================SELECTORS=====================*/
/*FORM*/
const form = document.querySelector('#form');
/*OBJECT ATTRIBUTES*/
const input = document.querySelector('#input');
const nr = document.querySelector('#nr');
const email = document.querySelector('#email');
/*BTN*/
const btn = document.querySelector('#btn');
/*NEW PROFILE*/
const profile = document.querySelector('#hex-list');

/*LOADER*/
const loader = document.querySelector('.loader-container');
const blurr = document.querySelector('.blurr');


/*===================EVENTS=====================*/
btn.addEventListener("click", function(event){
    
    loaderLoading();
    
    if (input.value && nr.value && email.value){

        createNewListObject(input.value, nr.value, email.value);

        const code = `
        <li class="hex-item">
            <img class="hexa-pic" src="/IMAGE/profile/sami-boudjelti-Yeapc1vYxw0-unsplash3.jpg" alt="">
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

/*===================FUNCTIONS=====================*/
/*CREATE AN OBJECT*/
function createNewListObject(input, nr, email) {
const newObject = {
    objectTitle: input,
    objectGuest: nr,
    objectEmail: email
    };
};

/*CLEAR INPUT VALUE  
CHANGE BACK COLOR TO BLACK*/
function clearInputFields(){
    input.value = "";
    nr.value = "";
    email.value = "";

    input.style.borderBottom = "#151515 2px solid";
    nr.style.borderBottom = "#151515 2px solid";
    email.style.borderBottom = "#151515 2px solid"
}

/* LOADER */
function loaderLoading(){
    loader.style.display ="flex";
    blurr.style.display ="flex";
    
    setTimeout(function(){
        loader.style.display = 'none';
        blurr.style.display ="none";
        const body = document.querySelector('body');

    }, 3000)
}

/*========================================*/

/*========================================*/

/*========================================*/
