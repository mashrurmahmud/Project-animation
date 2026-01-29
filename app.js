const test=['web devloper', 'Cyber-Security expert', 'Back-end Devloper'];

let textScript = document.querySelector('.animate-text');
// let clickMe = document.querySelector('.clickme');
let clickMenow = document.querySelector('#clicklog');

let shade = document.querySelector('.shade');
let menu = document.querySelector('.menu2');
let bars = document.querySelector('.bar');
let login = document.getElementById('loginModal');
const image = ['./img/engineer-removebg-preview.png', './img/engineer.jpg', './img/mash.png'];
const cross = document.querySelector('.cross-mark ');







let countIndex = 0;


const ListA = [{name:'Apple', prize:200, image1:'./img/engineer-removebg-preview.png'}];
const ListB = [{name:'JackFruite', prize:300, image1:'./img/engineer.jpg'}, {name:'Apple', prize:200, image1:'./img/engineer-removebg-preview.png'}];

// const handleMatch = ()=>{
//     const match = document.getElementById('match');
//     for(const A of ListA){
//         for(const B of ListB){
//             if(A?.name == B?.name){
//                 const div = document.createElement('div');
//                 div.innerHTML=`
//                  <h1>${A?.name}</h1>
//                  <img src='${A?.image1}' />

//                 `;
//                 let addhon = match.appendChild(div);
//                 return addhon;
//             }
//         }
//     }
// }

clickMenow.addEventListener('click', function(){
    console.log('hello')
    shade.classList.toggle('show');
    login.classList.toggle('show');
    console.log(cross.style)
    cross.style.transform='rotate(360deg)';



})

cross.addEventListener('click', function(){
    cross.style.transform='rotate(90deg)';
    shade.classList.remove('show');
    login.classList.remove('show');
    

    
    
})


const handleSlide = ()=>{
    countIndex += 1;
    
    const sliderImage = document.getElementById('sliderImage');
    const newDiv = document.createElement('div');
    newDiv.className='images';
    newDiv.innerHTML=`
      <img class='w-full' src='${image[countIndex]}'/>
    `
    sliderImage.appendChild(newDiv)
  
    
    

}





let index = 0;



bars.addEventListener('click', ()=>{
    // menu.style.visibility='visible'
    // console.log('hello');
    // console.log(menu.style)
    // menu.style.opacity= '1';
    menu.classList.toggle('show')
    
})



const handleReset = ()=>{

    const word = test[index];
    textScript.textContent=word;
    gsap.fromTo(textScript, {
        y:25,
        duration:0.5,
        opacity:0,
    },{
        y:0,
        duration:0.5,
        opacity:1,
        delay:2
    })
    
    gsap.to(textScript, {
        y:-50,
        
        duration:0.8,
        opacity:0,
        delay:3,
        onComplete:()=>{
            index = (index + 1) % test.length;
            handleReset()
        }
    })



}






handleReset();


gsap.from('.mash', {
    x:-200,
    opacity:0
})

gsap.from('.choose_img', {
    x:200,
    opacity:0,

})
gsap.from('.masjh',{
    x:200
})

gsap.to('.text-animation', {
    opacity:1,
    y:0,
    stagger:0.5,
    duration:3,
    stagger:0.2
    
})












