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

// these are html elements of my main form
let main1 = document.querySelector('.main-form-1');
let main2 = document.querySelector('.main-form-2');
let main3 = document.querySelector('.main-form-3');
let main4 = document.querySelector('.main-form-4');


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


//pg3Price1El.style.color = 'red'
//

let totalEl = document.querySelector('.total');

// eleme
let costEl = document.querySelector('.costs');
let servicesCon = document.querySelector('.services');//
let onbtnEL = document.querySelector('.on-btn');//biger container that holds my inner btn that moves that changes in subcription plan


let onEL = document.querySelector('.on');


// my subscribtion plans elementsboxes arcade
let arcadeEl =  document.querySelector('.arcade');
let advanceEl =  document.querySelector('.advance');
let proEl =  document.querySelector('.pro');

//checkboxes
let checkboxEl1 = document.querySelector('.check-box-1');
let checkboxEl2 = document.querySelector('.check-box-2');
let checkboxEl3 = document.querySelector('.check-box-3');


//my input check element  
//let checkInput1 =  document.querySelector('.check-box-1');


let inputEl1 =  document.querySelector('.js-check-input-1');
let inputEl2 =  document.querySelector('.js-check-input-2');
let inputEl3 =  document.querySelector('.js-check-input-3');

//service elements
 let service1El = document.querySelector('.js-service-1');
 let service2El = document.querySelector('.js-service-2');
 let service3El = document.querySelector('.js-service-3');




// my object which will contain all my prices
let price = {
  arcade: 9,
  advanced: 12,
  pro: 15,

  onService : 1,
  lgStorage : 2,
  customPro : 2
}


  



let messages = [];

let reveal = false

      formEl.addEventListener('submit',(event) => {
        count++
     if (count === 1) {
 
      if (inputPhone.value === '' || inputPhone.value === null ) {
         messages.push('error');
        
      }
    
      if (messages.length > 0){
      errorEl.innerHTML = 'This field is required';
      
    }
    
    if (inputPhone.value.length < 5){
      count = 0
    }   
  }

  event.preventDefault();
    
  if (count === 2){
     main1.style.display = 'none';
     main2.style.display = 'flex';
  }
  
   if (count === 3) {
     main1.style.display = 'none';
     main2.style.display = 'none';
     main3.style.display = 'flex';
   }

  if(count === 4) {
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
    main4.style.display = 'flex';
  }

  
  if(count === 5) {
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
   
  }
    })
    
   

    function prvBtn() {
      count--;
      if (count <= 0){
        count = 1;
      }
      if (count === 1){
        main1.style.display = 'flex';
        main2.style.display = 'none';

      }
      if (count === 2){
        main1.style.display = 'none';
        main2.style.display = 'flex';
        main4.style.display = 'none';
        main3.style.display = 'none';
      }
      if (count === 3){
        main1.style.display = 'none';
        main2.style.display = 'none';
        main4.style.display = 'none';
        main3.style.display = 'flex';
      }
      if (count === 4){
        main1.style.display = 'none';
        main2.style.display = 'none';
        main3.style.display = 'none';
        main4.style.display = 'flex';
      }
    //console.log(count)
    }


    let susPlanBtn = 1;

let notiA = false ; // my notifier for arcade
let notiB = false ; // my notifier for advance
let notiC =  false ; //  my notifier for pro




let amount = 0;
let sumCheckBox = 0;

    function switchPlan() {
      if(susPlanBtn === 0) {
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

      
          sumCheckBox = sumCheckBox * 0.1
          console.log(sumCheckBox)  ;
        
        }
      else if (susPlanBtn === 1) {

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

         sumCheckBox = sumCheckBox * 10
         console.log(sumCheckBox)
    
      }

      

  if (notiA === true) {
    arcade()
  }

  if (notiB === true) {
    advance()
  }

  if (notiC=== true) {
    pro()
  }
       

  
    }
  



function plan(name, value) {
    costEl.innerHTML = `<div>
                  <p class="fw">${name}(monthly)</p>
                <p class="cl-gray"><u>change</u></p>
                </div>
                <p class="fw pg-4-price-0">+${value}</p>`
}


function addSubcribtions(amount) {
  let amountOfSubcriptions = amount;
  return amountOfSubcriptions;
}


    function arcade() {
      arcadeEl.style.border = '1px solid hsl(243, 100%, 62%)';
      arcadeEl.style.backgroundColor = '  hsl(217, 100%, 97%)';

      advanceEl.style.backgroundColor = 'transparent';
      advanceEl.style.border = '1px solid hsl(231, 11%, 63%)';

      proEl.style.backgroundColor = 'transparent';
      proEl.style.border = '1px solid hsl(231, 11%, 63%)';

      plan('Arcade', yearPlan1El.innerHTML);

      notiA = true;
      notiB = false;
      notiC = false;

      let userSubcriptionamount = addSubcribtions(price.arcade);

      
    }   
    arcade()
 
    function advance() {
      console.log('advanced clicked')
      advanceEl.style.border = '1px solid hsl(243, 100%, 62%)';
      advanceEl.style.backgroundColor = '  hsl(217, 100%, 97%)';

      arcadeEl.style.backgroundColor = 'transparent';
      arcadeEl.style.border = '1px solid hsl(231, 11%, 63%)';

      proEl.style.backgroundColor = 'transparent';
      proEl.style.border = '1px solid hsl(231, 11%, 63%)';

      plan('Advanced', yearPlan2El.innerHTML);
      notiB = true;
      notiC = false;

      let userSubcriptionamount = addSubcribtions(price.advanced);
  
    }

    function pro() {
      proEl.style.border = '1px solid hsl(243, 100%, 62%)';
      proEl.style.backgroundColor = '  hsl(217, 100%, 97%)';

      advanceEl.style.backgroundColor = 'transparent';
      advanceEl.style.border = '1px solid hsl(231, 11%, 63%)';


      arcadeEl.style.backgroundColor = 'transparent';
      arcadeEl.style.border = '1px solid hsl(231, 11%, 63%)';


      plan('Pro', yearPlan3El.innerHTML)
    
      notiC = true;
      notiA = false;
      notiB = false;

      let userSubcriptionamount = addSubcribtions(price.pro);
    }











//check boxes function
function checkBox1(){
  inputEl1.checked = !inputEl1.checked;// this checks and unchecks input box;
  if (inputEl1.checked){
       checkboxEl1.style.border = '1px solid blue';
       service1El.style.display = 'flex';
        sumCheckBox  +=  price.onService;
        console.log(sumCheckBox)
       
  }else{
    checkboxEl1.style.border = '1px solid hsl(231, 11%, 63%)';
    service1El.style.display = 'none';
    sumCheckBox -=  price.onService;
    
  }
  // return sumCheckBox
}


function checkBox2(){
  inputEl2.checked = !inputEl2.checked;// this checks and unchecks input box;
  if (inputEl2.checked){
       checkboxEl2.style.border = '1px solid blue';
       service2El.style.display = 'flex';
       sumCheckBox  +=  price.lgStorage;
       
  }else{
    checkboxEl2.style.border = '1px solid hsl(231, 11%, 63%)';
    service2El.style.display = 'none';
     sumCheckBox  -=  price.lgStorage;
     console.log(sumCheckBox)
  }
}

function checkBox3(){
  inputEl3.checked = !inputEl3.checked;// this checks and unchecks input box;
  if (inputEl3.checked){
       checkboxEl3.style.border = '1px solid blue';
       service3El.style.display = 'flex';
       sumCheckBox  +=  price.customPro;
       console.log(sumCheckBox)
          
  }else{
    checkboxEl3.style.border = '1px solid hsl(231, 11%, 63%)';
    service3El.style.display = 'none';
    sumCheckBox -=  price.customPro;
    
   
    
  }
}


 



