let movies =[
    {
        name:"Falcon and the winter soldier",
        des:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in iure, sequi distinctio quae magni voluptatum sint expedita dolore rem at corporis assumenda, odio itaque voluptate fugiat nisi ipsum omnis.",

        image:"images/slider 2.PNG"

},

    {
        name:"loki",
        des:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in iure, sequi distinctio quae magni voluptatum sint expedita dolore rem at corporis assumenda, odio itaque voluptate fugiat nisi ipsum omnis.",
            
        image:"images/slider 1.PNG"
},

    {
        name:"wanda vision",
        des:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in iure, sequi distinctio quae magni voluptatum sint expedita dolore rem at corporis assumenda, odio itaque voluptate fugiat nisi ipsum omnis.",
        
        image:"images/slider 3.PNG"
},

    {
        name:"raya and the last dragon",
        des:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in iure, sequi distinctio quae magni voluptatum sint expedita dolore rem at corporis assumenda, odio itaque voluptate fugiat nisi ipsum omnis.",

        image:"images/slider 4.PNG"
},

    {
        name:"luca",
        des:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in iure, sequi distinctio quae magni voluptatum sint expedita dolore rem at corporis assumenda, odio itaque voluptate fugiat nisi ipsum omnis.",

        image:"images/slider 5.PNG"
    }
];

const carousel = document.querySelector('.carousel');
let sliders = []

let slideIndex = 0; //track the current slide

const createSlide = () => {
if(slideIndex >= movies.length){
    slideIndex=0;
}

// create DOM element

let slide = document.createElement('div');
let imgElement = document.createElement('img');
let content = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');


// attach all element

imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
// h1.textContent = movies[slideIndex].name;
p.appendChild(document.createTextNode(movies[slideIndex].des));
// p.textContent = movies[slideIndex].des;
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
slide.appendChild(content);

carousel.appendChild(slide);

// setting up images

imgElement.src=movies[slideIndex].image;
slideIndex++;

// setting elements classname 

slide.className ="slider";
content.className ="slide-content";
h1.className ="movie-title";
p.className ="movie-des";

sliders.push(slide);

if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
}

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
createSlide();
},3000);

// video

const videoCards =[...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover",() => {
        let video = item.children[1];
        video.play()
    });

    item.addEventListener("mouseleave",() => {
        let video = item.children[1];
        video.pause()
    });
});

// card sliders

let cardContainer =[...document.querySelectorAll('.card-container')];
let preBtns =[...document.querySelectorAll('.pre-btn')];
let nxtBtns =[...document.querySelectorAll('.nxt-btn')];

cardContainer.forEach((item,i) => {
    let containerDimensions=item.getBoundingClientReact();
    let containerWidth = containerDimensions.Width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth-200;

    })

    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth+200;

    });
});


