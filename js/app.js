// init - to initilize the code (slider in the case) and init(); to trigger the code (slider)

// putting a comma  "," at the end of the an variable that started with "let", "var", and/or "const", you dont have to end it with the semicolon ; you can end it with a comma and go right into the next variable without declaring it with "let", "var", and/or "const"

// Remember when using getElementsByClassName, it will return as an Array

// console.log(`current: ${current}`) is an example of debugging for this project. Console.log for the variable of "current", check // to see where to place the console.log 

// console.log(`slides: ${slides.length}`) this told me how many slides that I had for this project

// infinite loop - setInterval

// anything in the {} backets, this is a code block

// ++ adding one to whatever the value is 

// for (for loop) is to repeat the code over and over
// Proper way to write a for loop - 
// for(let index = 0; index < number; index++)

// .appendChild - is to add an Child, element, Node (whatever you want to call it) within in an element

// cloneNode to make a copy

// in an Array, you can do a lot simple math inside them like a variable minus an number for example

// setInterval is important to remember

// Every HTML Tag is a node in JavaScript - meaning you can find the elements classes, tags, whatever but also remember that you can build HTML components or elments in JavaScript to also have control over them as well.

// Console.log('') is my debugging friend

// what should be the result of this? let age = 19; if (age < 21) { console.log('too young to drink') } else { console.log('here's a shot of tequila') }  - the result will show "too young to drink"


// *Remember I can always look at the documentation like developer.mozilla.org, w3schools.com, and more to find a method that will work with my code*

let init = () => {
 let container = document.getElementsByClassName('jumbo-slider__container')[0],
 slides = document.getElementsByClassName('jumbo-slider__slide'),
 circles = document.getElementsByClassName ('jumbo-slider__circle'),
 links =  document.getElementsByClassName('jumbo-slider__link'), 
 current = 1, 
 time = 6000;
 //console.log(`current: ${current}`)

 // add animation class to slide
 slides[0].classList.add('jumbo-slider__slide--active');
 links[current-1].classList.add('jumbo-slider__link--active');
 circles[current-1].classList.add('jumbo-slider__circle--filled');
 

 // update elipsis and links
 let updateNav = (current) => {
  console.log(`upadate current: ${current}`)
  for (let index = 0; index < slides.length; index++) {
   links[index].classList.remove('jumbo-slider__link--active');
   circles[index].classList.remove('jumbo-slider__circle--filled');
   
  }
  links[current-1].classList.add('jumbo-slider__link--active');
  circles[current-1].classList.add('jumbo-slider__circle--filled');
 }
 let startSliding = () => {
  
  setInterval(() => {
  //  console.log(`current: ${current}`)

   // remove from active from first and add it to the second slide so it can be become the first slide with the class activated
   slides[1].classList.add('jumbo-slider__slide--active')
   slides[0].classList.remove('jumbo-slider__slide--active')

   // adding an element to container
   // everything in the container which is jumbo-slider is copied 
   // clone the first slide and place it on the last space
   // parentElement.appendChild - The parent (in this case, it's container), this method place the element nodes inside of the parentElement
   container.appendChild(slides[0].cloneNode([true]));
   // then remove the first slide after it has been cloned
   container.removeChild(slides[0]);

   console.log(`slides: ${slides.length}`)
   // if the slide number is less 3 than run this code block
   if(current < slides.length){
     current++

    // taking UpdateNav() (a function), "current" (a variable which is declared up top) and passing it down and reassigning it to another number with the ++ and it goes back to the Let updateNav function up top
     updateNav(current)
    
   } else {
     current = 1
     updateNav(current)
   }
  

  }, time);
 }
 startSliding();
}

init();