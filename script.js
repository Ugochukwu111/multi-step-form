// things will be done iin steps


let count = 0; // this changes the steps if this equal to 2 step two loads and so on


// my aside html-element so i can change bkg-clr in differ sections.
let no1 = document.querySelector('.no-1');
let no2 = document.querySelector('.no-2');
let no3 = document.querySelector('.no-3');
let no4 = document.querySelector('.no-4');
let errorEl = document.querySelector('.js-num-error');
let formEl =  document.getElementById('form'); //

let inputPhone = document.getElementById('ph-no') // phone number input

// these are html elements of my main form steps
let main1 = document.querySelector('.main-form-1'); 
let main2 = document.querySelector('.main-form-2');
let main3 = document.querySelector('.main-form-3');
let main4 = document.querySelector('.main-form-4');
let main5 = document.querySelector('.main-form-5');



// element for my prices
let yearPlan1El = document.querySelector('.year-plan-1'); 
let yearPlan2El = document.querySelector('.year-plan-2');
let yearPlan3El = document.querySelector('.year-plan-3');//

let pg3Price1El = document.querySelector('.pg-3-price-1');
let pg3Price2El = document.querySelector('.pg-3-price-2');
let pg3Price3El = document.querySelector('.pg-3-price-3');

let pg4Price1El = document.querySelector('.pg-4-price-1');
let pg4Price2El = document.querySelector('.pg-4-price-2');
let pg4Price3El = document.querySelector('.pg-4-price-3');

let totalEl = document.querySelector('.total');

//function displays the final total
function displayTotal(total) {
  totalEl.textContent = total
}

// eleme
let costEl = document.querySelector('.costs');
let servicesCon = document.querySelector('.services');//
let onbtnEL = document.querySelector('.on-btn');//biger container that holds my inner btn that moves that changes in subcription plan
let onEL = document.querySelector('.on');//the actual element that moves when you switch plan



// my subscribtion plans elementsboxes 
let arcadeEl =  document.querySelector('.arcade');
let advanceEl =  document.querySelector('.advance');
let proEl =  document.querySelector('.pro');

//checkboxes elements
let checkboxEl1 = document.querySelector('.check-box-1');
let checkboxEl2 = document.querySelector('.check-box-2');
let checkboxEl3 = document.querySelector('.check-box-3');

//my input check element  
let inputEl1 =  document.querySelector('.js-check-input-1');
let inputEl2 =  document.querySelector('.js-check-input-2');
let inputEl3 =  document.querySelector('.js-check-input-3');

//service elements
 let service1El = document.querySelector('.js-service-1');
 let service2El = document.querySelector('.js-service-2');
 let service3El = document.querySelector('.js-service-3');

 //i want to get all my but elements so i can remove it at the end of the form

 const allButtons = document.getElementsByTagName("button");

//functions that handle the display of bkgcolor(number indicators) of the current step
function indicatorBackgroundColor( nextNumElement){
  nextNumElement.classList.add('bkg-current-indicator')
}
function removeIndicatorBackgroundColor( nextNumElement){
  nextNumElement.classList.remove('bkg-current-indicator')
}
 indicatorBackgroundColor(no1)//my first step 1 has a bkg as the page loads

 //function below is responsible for displaying the form main steps
 function currentFormStepPage(prvFormPage, nextFormPage){
  prvFormPage.style.display = 'none';
  nextFormPage.style.display = 'flex'
 }


// my object which will contain all my prices
let price = {
  arcade: 9,
  advanced: 12,
  pro: 15,

  onService : 1,
  lgStorage : 2,
  customPro : 2
}
 

let pages = [main1,main2,main3,main4, main5];//this array contains each html step of the form

// this array messages  takes in error from form 
let messages = [];

      formEl.addEventListener('submit',(event) => {
      
      
        
        for (let i = 0; i < pages.length; i++) {
        if (inputPhone.value === '' || inputPhone.value === null ) {
          messages.push('error'); 
          break // this stops the loop
       }
      }
    
      // code below handles my user incorrect phone no entry
       let userPhoneNumber =  Number(inputPhone.value)
    
      if (inputPhone.value === ''){
        errorEl.textContent = 'This field is required'; 
      } else if(inputPhone.value.length < 9 ){
        errorEl.textContent = 'number is too short'; 
      }else if(isNaN(userPhoneNumber) || inputPhone.value.trim() === ''){
        errorEl.textContent = 'NaN';
      }else if (!isNaN(userPhoneNumber) && inputPhone.value.length > 9){
        errorEl.textContent = ''; 
        messages.length = 0;
        count++
      }


       if (count === 1){
        currentFormStepPage(main1, main2)
        indicatorBackgroundColor(no2)
       }else if (count === 2) {
        currentFormStepPage(main2, main3)
        indicatorBackgroundColor(no3)
       }else if (count === 3){
        currentFormStepPage(main3, main4)
        indicatorBackgroundColor(no4)
       }else if (count === 4){
        currentFormStepPage(main4, main5)
        indicatorBackgroundColor(no4)
        //gets all buttons to apply style and remove it at final step
        for (let i = 0; i < allButtons.length; i++){
             allButtons[i].classList.add('current-form-d-none')
        }
      }
      if (count < 4){
        event.preventDefault();
      }
    })
    
   
  //  this function handles prv page
    function prvBtn() {
      count--;
      if (count < 0){
        count = 0
      }
      if (count === 0){
        currentFormStepPage(main2, main1)
        removeIndicatorBackgroundColor(no2)
      }if (count === 1) {
        currentFormStepPage(main3, main2)
        removeIndicatorBackgroundColor(no3)
       } if (count === 2){
        currentFormStepPage(main4, main3)
        removeIndicatorBackgroundColor(no4)
       }
    }


    let susPlanBtn = 1;

let notiA = false ; // my flag for arcade  
let notiB = false ; // my flag for advance
let notiC =  false ; //my flag for pro


let sumCheckBox = 0;
let  userSubcriptionamount  = 0;
 let finalTotal = 0;
arcade()

    function switchPlan() {

      if(susPlanBtn === 0) {
        onbtnEL.previousElementSibling.classList.add('pur-blu')
        onbtnEL.nextElementSibling.classList.remove('pur-blu')
        susPlanBtn++;
        onEL.style.transform = 'translateX(0%)';
         
          price.arcade = 9;
          price.advanced = 12;
          price.pro = 15;

          price.onService = 1;
          price.lgStorage = 2;
          price.customPro = 2;

          yearPlan1El.innerHTML = `$${price.arcade}/mo`;
          yearPlan2El.innerHTML = `$${price.advanced}/mo`;
          yearPlan3El.innerHTML = `$${price.pro}/mo`;
  
          pg3Price1El.innerHTML = `$${price.onService}/mo`
          pg3Price2El.innerHTML = `$${price.lgStorage}/mo`
          pg3Price3El.innerHTML = `$${price.customPro}/mo`;

          pg4Price1El.innerHTML = `$${price.onService}/mo`;
          pg4Price2El.innerHTML = `$${price.lgStorage}/mo`;
          pg4Price3El.innerHTML = `$${price.customPro}/mo`;

      
          sumCheckBox = sumCheckBox * 0.1;

        
        }
      else if (susPlanBtn === 1) {
        onbtnEL.previousElementSibling.classList.remove('pur-blu')
        onbtnEL.nextElementSibling.classList.add('pur-blu')
        susPlanBtn--;
        onEL.style.transform = 'translateX(120%)';
        price.arcade = 90;
        price.advanced = 120;
        price.pro = 150;

          price.onService = 10;
          price.lgStorage = 20;
          price.customPro = 20;
        
   
        yearPlan1El.innerHTML = `$${price.arcade}/yr`;
        yearPlan2El.innerHTML = `$${price.advanced}/yr`;//pg4price === pg3price
        yearPlan3El.innerHTML = `$${price.pro}/yr`;


        pg3Price1El.innerHTML = `$${price.onService}/yr`
        pg3Price2El.innerHTML = `$${price.lgStorage}/yr`
        pg3Price3El.innerHTML = `$${price.customPro}/yr`;

        pg4Price1El.innerHTML = `$${price.onService}/yr`;
        pg4Price2El.innerHTML = `$${price.lgStorage}/yr`
         pg4Price3El.innerHTML = `$${price.customPro}/yr`;

         sumCheckBox = sumCheckBox * 10;
        
      }  

  if (notiA === true) {
    arcade()   
  }else if(notiB === true) {
    advance()
  }else if (notiC=== true) {
    pro()
  }   
    }

    switchPlan()
  

//  reuseable functions for my subscriptioon plans!!
function plan(name, value) {
    costEl.innerHTML = `<div>
                  <p class="fw">${name}(monthly)</p>
                <p onclick="switchPlan()" class="cl-gray "><u class = "pur-blu hover fw">change</u></p>
                </div>
                <p class="fw pg-4-price-0">+${value}</p>`
}
//reuseable function for my subscription plan background colors
 function subcriptionBackgroundColor(subcription1, subcription2, subcription3){
  subcription1.style.border = '1px solid hsl(243, 100%, 62%)';
  subcription1.style.backgroundColor = 'hsl(217, 100%, 97%)';

  subcription2.style.backgroundColor = 'transparent';
  subcription2.style.border = '1px solid hsl(231, 11%, 63%)';

  subcription3.style.backgroundColor = 'transparent';
  subcription3.style.border = '1px solid hsl(231, 11%, 63%)';

 }




    function arcade() {
      subcriptionBackgroundColor(arcadeEl, advanceEl, proEl)
      plan('Arcade', yearPlan1El.innerHTML);

      notiA = true;
      notiB = false;
      notiC = false;
        
     userSubcriptionamount = price.arcade;
     finalTotal = sumCheckBox + userSubcriptionamount;
     displayTotal(finalTotal)
    }   
    
 
    function advance() {
      subcriptionBackgroundColor(advanceEl, arcadeEl, proEl);
      plan('Advanced', yearPlan2El.innerHTML);

      notiB = true;
      notiC = false;
      notiA = false

       userSubcriptionamount = price.advanced;
       finalTotal = sumCheckBox + userSubcriptionamount;
       displayTotal(finalTotal)
    }

    function pro() {
      subcriptionBackgroundColor(proEl, arcadeEl, advanceEl);
      plan('Pro', yearPlan3El.innerHTML)
    
      notiC = true;
      notiA = false;
      notiB = false;

     userSubcriptionamount = price.pro;
     finalTotal = sumCheckBox + userSubcriptionamount;
     displayTotal(finalTotal)
    }



//===============check boxes functions
function checkBox1(){
  inputEl1.checked = !inputEl1.checked;// this checks and unchecks input box;
  if (inputEl1.checked){
       checkboxEl1.style.border = '1px solid blue';
       service1El.style.display = 'flex';
        sumCheckBox  +=  price.onService;
        finalTotal += price.onService
        displayTotal(finalTotal)     
  }else{
    checkboxEl1.style.border = '1px solid hsl(231, 11%, 63%)';
    service1El.style.display = 'none';
    finalTotal -= price.onService
    sumCheckBox -=  price.onService;
    displayTotal(finalTotal)
  }
}

function checkBox2(){
  inputEl2.checked = !inputEl2.checked;// this checks and unchecks input box;
  if (inputEl2.checked){
       checkboxEl2.style.border = '1px solid blue';
       service2El.style.display = 'flex';
       sumCheckBox  +=  price.lgStorage;
       finalTotal += price.lgStorage
        displayTotal(finalTotal)
  }else{
    checkboxEl2.style.border = '1px solid hsl(231, 11%, 63%)';
    service2El.style.display = 'none';
    finalTotal -= price.lgStorage
     sumCheckBox  -=  price.lgStorage;
     displayTotal(finalTotal)
  }
}

function checkBox3(){
  inputEl3.checked = !inputEl3.checked;// this checks and unchecks input box;
  if (inputEl3.checked){
       checkboxEl3.style.border = '1px solid blue';
       service3El.style.display = 'flex';
       sumCheckBox  +=  price.customPro;
       finalTotal += price.customPro
       displayTotal(finalTotal) //this funtion display the result      
  }else{
    checkboxEl3.style.border = '1px solid hsl(231, 11%, 63%)';
    service3El.style.display = 'none';
    finalTotal -= price.customPro;
    sumCheckBox -=  price.customPro;
    displayTotal(finalTotal)
    
  }
}


 



