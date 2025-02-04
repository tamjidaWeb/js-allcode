// function sleep(names,time){
//     console.log(names+ " is sleeping from "+ time);
// }
// // console.log(names)
// sleep('jasim','10pm');
// sleep('rahim','2pm');
// sleep('karim','4am');
// sleep('sadia','9am');



// function myFunction(a, b) {
//     // return a * b;
   
// }
// let x = myFunction(4, 3);
// console.log(x);
// var carName='bmw';
// function myFunction() {
//     let carName = "Volvo";
//     console.log(carName);
   
// }  
// console.log(carName);
// myFunction();
// let car = {
//     Name: "John",
//     model: "Doe",
//     weight: '50',
//     Color: "blue",
//     start: function (){
//         console.log('car has started');
//     },
//     drive: function(){
//         console.log('car is driving');
//     }
//   };

//   console.log(car.weight);
//   console.log(car[model]);

// car.start();


// function myMove(){
//     const animate = document.querySelector('#animate');
//     let pos = 0;
//     const interval = setInterval(frame,5);
//     function frame(){
//         if(pos < 350){
//         pos++;
//         animate.style.top=pos + 'px';
//         animate.style.left = pos + 'px';
//     }
//     else{
//         clearInterval(interval);
//     }
//     }
// }
// myMove();

// function changeText(id)
// {
//     console.log(this);
//     id.innerHTML ="hello"
//     const change = document.querySelector('#text');
//     change.innerText ='hello';
// }


// const button = document.querySelector('#button');

// button.onclick= function(){
//     console.log('hello')
// }




// function myFunction(test){
//     console.log(test)
// }


// const button = document.querySelector('#button')
// const container = document.querySelector('.container')
// button.addEventListener('click',function(){
//     myFunction("hellooo button")
// },true)
// container.addEventListener('click',function(){
//     myFunction("hellooo div")
// },true)



// const para = document.createElement('p');
// const node = document.createTextNode('hello world');


// para.appendChild(node);
// const element = document.getElementById('div1');
// element.appendChild(para);

// const para = document.createElement('p');
// const node = document.createTextNode("i'm not busy nooo");

// para.appendChild(node);

// const element = document.getElementById('div1');
// const p2 = document.getElementById('p2');
// element.replaceChild(para, p2);

// const p2 = document.getElementById('p2');
// p2.removeChild();

// const div1 = document.getElementById('div1');
// const p2 = document.getElementById('p2')
// div1.removeChild(p2)



// const counter = document.getElementById('counter');
// const plusBtn = document.getElementById('plusBtn')
// const minusBtn = document.getElementById('minusBtn')
// let counting = 0;

// const updateCounting =(value)=>{
//     counting = counting +value;
//     counter.innerHTML = counting;
//     if(counting >=10){
//        plusBtn.setAttribute('disabled', true)
      
//     }
   
//     else{
//        plusBtn.removeAttribute('disabled', false)
//     }

  

//     if(counting <= 0){
//         minusBtn.setAttribute('disabled', true);
//     }
//     else{
//         minusBtn.removeAttribute('disabled', false)
//     }

// }

// plusBtn.addEventListener('click', ()=>{
//     updateCounting(1);

// })
// minusBtn.addEventListener('click', ()=>{
    
//     updateCounting(-1);
// })



// const generateRGBcolor = () => {
//     const r = Math.floor(Math.random()*255);
//     const g = Math.floor(Math.random()*255);
//     const b = Math.floor(Math.random()*255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// const updateColor = ()=>{
//     const color = generateRGBcolor();
//     const colorBox = document.getElementById('colorBox');
//     colorBox.style.backgroundColor = color;
//     const colorCode = document.getElementById('colorCode');
//     colorCode.innerHTML= color;
// }
// const copyColorCode = () =>{
//     const colorCode = document.getElementById('colorCode');
//     const inputTag = document.createElement('input');
//     document.body.appendChild(inputTag);
//     inputTag.value=colorCode.innerText;
//     inputTag.select();
//     document.execCommand('copy');
//     document.body.removeChild(inputTag);
//     alert('copied on clipboard')
// }
// document.getElementById('copyButton').addEventListener('click', ()=>{
//     copyColorCode();
// })


// function generateNewColorBtn()
// {
//     updateColor();
// }


// const timerDisplay= document.getElementById('timer');
// const startBtn = document.getElementById('start-btn');
// const stopBtn = document.getElementById('stop-btn');
// let timeLeft;
// let  timerInterval;
// let isRunning = false;


// const startTimer = (duration)=>{
//     let timer = duration;
//      timerInterval=setInterval(()=>{  
//      const minutes= parseInt(timer/60,10);
//      const seconds = parseInt(timer % 60, 10);

//     const displayMinutes=  minutes<10 ? '0' + minutes : minutes;
//     const displaySeconds= seconds<10 ? '0'+ seconds : seconds;

//      timerDisplay.textContent = displayMinutes+': '+displaySeconds;

//      if(--timer<0){
//         clearInterval(timerInterval);
//         timerDisplay.textContent = ' Breath Out';

//         setTimeout(() => {
//             timerDisplay.textContent = 'Brath In';
//             startTimer(timeLeft);
//         }, 5000);

//      }

//     },1000);
    

// }
// startBtn.addEventListener('click', ()=>{
// if(!isRunning){
//     timeLeft = 15;
//     startTimer(timeLeft);
//     isRunning = true;
// }
    
// })


// const stopTimer = ()=>{
//     clearInterval(timerInterval);
//     timerDisplay.textContent = 'Breath In';
//     isRunning= false;
// }
// stopBtn.addEventListener('click', ()=>{
//     stopTimer();
//   isRunning= false;
    
// })






// const extractText = ()=>{
//     const inputFile= document.getElementById('imageInput');
//     const output = document.getElementById('output');

//     const imageFile = inputFile.files[0];

//     if(!imageFile){
//         output.textContent = 'please select'
//         return;
//     }

//     Tesseract.recognize(
//         imageFile,
//         'eng'
//     ).then(({data})=>{
//         output.textContent = data.text;
//     }).catch((err)=>{
//         console.error('error', error);
//         output.textContent = 'error;'
//     })
// }







// const addTask =()=>{
//     const taskInput = document.getElementById('taskInput');
//     const taskiInputValue =taskInput.value.trim();
//     if(taskiInputValue !== '')
//     {
//         const taskListUl = document.getElementById('taskList');
//         const li = document.createElement('li');
//         li.innerHTML='<input type="checkbox" >'+taskiInputValue+' <button onclick= "deleteTask(this)">Delete</button>';
//         taskListUl.appendChild(li);

//         taskInput.value='';
//     }
//     else{
//         alert('please add new task')
//     }
    
// }
// const deleteTask=(btn)=>{
//     const li= btn.parentNode;
//     li.parentNode.removeChild(li)
    
// }
// const deleteTaskChecked=()=>{
//     const taskList = document.getElementById('taskList');
//     const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     checkBoxes.forEach(checkbox=>{
//         const li =checkbox.parentNode;
//         li.parentNode.removeChild(li);
        
        
//     }) 
// }



// let currentIndex=0;

// const showSlide =(index)=>{
//     const slides = document.getElementById('slides');
//     const totalSlides = slides.children.length;
   

//     if(index >= totalSlides){
//         currentIndex = 0;
//     }

//     else if(index <0){
//         currentIndex = totalSlides -1;

//     }
//     else{
//         currentIndex = index;
//     }

//     slides.style.transform = `translateX(${-currentIndex*100}%)`
// }

// const nextSlide=()=>{
//     showSlide(currentIndex + 1);
    
// }
// const prevSlide=()=>{
//     showSlide(currentIndex - 1);
    
// }



// const getWeather =()=>{
//     const city=document.getElementById('cityInput').value;
//     const apiKey='f9ce69eabcf2e5f4bafe1086d1af8547';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    

//     fetch(apiUrl)
//     .then(res =>res.json())
//     .then(data =>{
//         const weatherInfo = document.getElementById('weatherInfo');
//         const description = data.weather[0].description;
//         const temperature = data.main.temp;
//         const humidity = data.main.humidity;
//         const windSpeed = data.wind.speed;

//         weatherInfo.innerHTML = `
//             <p>Description: ${description} </p>
//             <h4>Temperature: ${temperature} &#8451</h4>
//             <p>Humidity: ${humidity}%</p>
//             <p>Wind Speed: ${windSpeed} m/s</p>
//         `;
        
//     }
        
//     )
//     .catch(error =>{
//         console.log('data not valid', error);
//         document.getElementById('weatherInfo').textContent = 'city not found'
//     })
// }   




// const calculateTip=()=>{
//    const billAmount= parseFloat(document.getElementById('billAmount').value);
//    const tipParcentage =parseFloat(document.getElementById('tipParcentage').value);
//    console.log('tipParcentage',tipParcentage);

//    if(isNaN(billAmount)|| isNaN(tipParcentage)){
//     document.getElementById('result').innerText = 'enter valid number';
//     return;
//    }

//    const tipAmount = (billAmount* tipParcentage)/100;
//    const totalAmount =billAmount+tipAmount;

//    document.getElementById('result').innerHTML = `
//         <p>Tip Amount :$${tipAmount.toFixed(2)}</p>
//         <p>Tip Amount :$${totalAmount.toFixed(2)}</p>
   
//    `
   
// }

// const recipieResult= document.getElementById('recipieResult');

// const searchButton = () =>{
//    const searchInput= document.getElementById('searchInput').value;
//    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
//    .then(res=>res.json())
//    .then(data=>{
//       const recipes = data.meals;
// console.log(recipes);

//       if(recipes){
//          recipes.forEach(recipe=>{
//             const recipeDiv = document.createElement('div');
//             recipeDiv.innerHTML = `
//                <h3>${recipe.strMeal}</h3>
//                <img src=${recipe.strMealThumb} width="100%">
//                <p>${recipe.strInstructions}</p>
//             `;
//             recipieResult.appendChild(recipeDiv)
//          });
//          document.getElementById('searchInput').value = '';
//       }

//       else{
//          recipieResult.innerHTML = '<p>No recipe Found!!</p>'
//       }
//    })
   
// }




const startTyping = () =>{
   console.log('hello');
}




document.addEventListener('DOMContentLoaded',()=>{
   const quotes = ["amr sonar bangla", 
                  "hello i am jjyoti",
                  "all that gliter is not gold",
                  "Be yourself everyone else is already taken.",
                  "A room without books is like a body without a soul"];

         const quoteDisplay= document.getElementById('quote');
         const inputBox=document.getElementById('inputBox');
         const startBtn = document.getElementById('startBtn');
         const resultDiv = document.getElementById('result-div');
})






















































