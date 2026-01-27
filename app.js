const test=['web devloper', 'Cyber-Security expert', 'Back-end Devloper'];

let textScript = document.querySelector('.animate-text');
let menu = document.querySelector('.menu2');
let bars = document.querySelector('.bar');




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







